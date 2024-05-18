import { Injectable, Logger } from '@nestjs/common';
import { CreateProcessoDto } from './dto/request-create-processo.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { ProcessoEntity } from './entities/processo.entity';
import { FindOptionsWhere, Like, MoreThanOrEqual, Repository } from 'typeorm';
import { DatajudClient } from './datajud.client';
import { ProcessoMapper } from './processo.mapper';
import { MetadadosEntity } from './entities/metadata.entity';
import { MovimentoEntity } from './entities/movimento.entity';
import { CustomHttpException } from './exceptions/exception.entity';
import { ProcessoResponse } from './dto/response-processo.dtos';
import { ProcessoQueryParamsDto } from './dto/query-params-processo.dtos';
import { isValid, parse } from 'date-fns';
import { LogService } from './log.service';

@Injectable()
export class ProcessoService {
  private PAGE_LIMIT = 10;

  constructor(
    @InjectRepository(ProcessoEntity)
    private readonly processoRepository: Repository<ProcessoEntity>,
    @InjectRepository(MetadadosEntity)
    private readonly metadadosRepository: Repository<MetadadosEntity>,
    @InjectRepository(MovimentoEntity)
    private readonly movimentoRepository: Repository<MovimentoEntity>,
    private readonly datajudClient: DatajudClient,
    private readonly processoMapper: ProcessoMapper,
    private readonly logService: LogService,
  ) {}

  private logger = new Logger('ProcessoService');

  async create({ processo }: CreateProcessoDto): Promise<ProcessoResponse> {
    const codigoProcesso = processo;

    const processoEntity = await this.processoRepository.findOne({
      where: { codigoProcesso: codigoProcesso },
      relations: ['movimentacoes'],
    });

    const novoProcessoEntity = await this.saveOrUpdate(
      processoEntity,
      codigoProcesso,
    );

    return this.processoMapper.toProcessoResponse(novoProcessoEntity);
  }

  private async saveOrUpdate(
    processoEntity: ProcessoEntity,
    codigoProcesso: string,
  ) {
    if (processoEntity && this.isDataValida(processoEntity.dataCriacao)) {
      this.logger.log(
        `Retornando processo do banco de dados com data válida. Código Processo:${codigoProcesso}`,
      );
      return processoEntity;
    } else {
      const novoProcessoEntity = await this.saveFromDatajud(
        processoEntity,
        codigoProcesso,
      );
      this.logger.log(
        `Retornando processo após update da api do datajud. Código Processo:${codigoProcesso}`,
      );
      return novoProcessoEntity;
    }
  }

  async findAll(queryParams: ProcessoQueryParamsDto) {
    const where = this.whereBuilder(queryParams);
    this.logger.log(
      `Executando consulta dos processos com os seguintes parâmetros: ${JSON.stringify(queryParams)}`,
    );
    const [dados, total] = await this.processoRepository.findAndCount({
      where: where,
      take: this.PAGE_LIMIT,
      skip: (queryParams.page - 1) * this.PAGE_LIMIT,
      relations: ['movimentacoes'],
    });
    const dadosResponse = this.processoMapper.toProcessosResponse(dados);
    return { dadosResponse, total };
  }

  private whereBuilder(queryParams: ProcessoQueryParamsDto) {
    const where: FindOptionsWhere<ProcessoEntity> = {};

    if (queryParams.data)
      where.dataAjuizamento = MoreThanOrEqual(
        this.formatarData(queryParams.data),
      );
    if (queryParams.assunto) where.assuntos = Like(`%${queryParams.assunto}%`);
    if (queryParams.classe) where.classe = queryParams.classe;
    return where;
  }

  private formatarData(data: string): Date {
    const parsedDate = parse(data, 'dd-MM-yyyy', new Date());

    if (!isValid(parsedDate)) {
      this.logService.errorAndThrow(
        this.logger,
        CustomHttpException.formatoInvalidoParaData,
      );
    }

    return new Date(
      parsedDate.getFullYear(),
      parsedDate.getMonth(),
      parsedDate.getDate(),
    );
  }

  private async saveFromDatajud(
    processEntity: ProcessoEntity,
    codigoProcesso: string,
  ): Promise<ProcessoEntity> {
    if (processEntity) {
      this.logger.log(
        `Deletando entidade do processo desatualizado antiga.  Código Processo:${codigoProcesso}`,
      );
      await this.deleteLocal(processEntity.id);
    }

    this.logger.log(
      `Criando processo atualizado. Código Processo:${codigoProcesso}`,
    );
    return this.saveLocal(codigoProcesso);
  }

  private async saveLocal(processCode: string) {
    const clientProcess = await this.getClientProcess(processCode);

    const processEntity = await this.processoRepository.save(
      this.processoMapper.toProcessoEntity(clientProcess, processCode),
    );

    await this.metadadosRepository.save(
      this.processoMapper.toMetadados(clientProcess, processEntity.id),
    );

    return processEntity;
  }

  private async getClientProcess(processCode: string) {
    const clientProcess =
      await this.datajudClient.findByProcessCode(processCode);
    if (!clientProcess) {
      this.logService.errorAndThrow(
        this.logger,
        CustomHttpException.processoNaoEncotrado,
      );
    }
    return clientProcess;
  }

  private async deleteLocal(processEntityId: number) {
    await this.deleteMovimentos(processEntityId);
    await this.processoRepository.delete(processEntityId);
  }

  private async deleteMovimentos(processEntityId: number) {
    const movimentos: MovimentoEntity[] = await this.movimentoRepository.find({
      where: { processo: { id: processEntityId } },
    });
    movimentos.forEach((movimento) => {
      this.movimentoRepository.delete(movimento);
    });
  }

  private isDataValida(dataCriacao: Date): boolean {
    const dataInicial = new Date();
    dataInicial.setMonth(dataInicial.getMonth() - 2);
    return dataInicial <= dataCriacao;
  }
}
