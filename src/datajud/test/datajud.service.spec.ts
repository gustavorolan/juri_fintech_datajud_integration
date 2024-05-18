import { TestingModule } from '@nestjs/testing';
import { ProcessoService } from '../processo.service';
import { FindOptionsWhere, Like, MoreThanOrEqual, Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

import { DatajudClient } from '../datajud.client';
import { ProcessoEntity } from '../entities/processo.entity';
import { MetadadosEntity } from '../entities/metadata.entity';
import { MovimentoEntity } from '../entities/movimento.entity';
import { CreateProcessoDto } from '../dto/request-create-processo.dtos';
import { processoServiceModuleTest } from './datajud.service.test.module';
import { ProcessoEntityFactory } from './factory/processo-entity.factory';
import { ProcessoRequestDtoFactory } from './factory/processo-request-dto.factory';
import { ProcessoResponseDtoFactory } from './factory/processo-response-dto.factory';
import { ProcessoClientDtoFactory } from './factory/processo-client-dto.factory';
import { MetadadosEntityFactory } from './factory/metadata-entity.factory';
import { CustomHttpException } from '../exceptions/exception.entity';
import { ProcessoQueryParamsDtoFactory } from './factory/query-params-processo-dto.factory';
import { ProcessoQueryParamsDto } from '../dto/query-params-processo.dtos';

describe('ProcessoService', () => {
  let service: ProcessoService;
  let processoRepository: Repository<ProcessoEntity>;
  let metadadosRepository: Repository<MetadadosEntity>;
  let movimentoRepository: Repository<MovimentoEntity>;
  let datajudClient: DatajudClient;

  beforeEach(async () => {
    const module: TestingModule = await processoServiceModuleTest();

    service = module.get<ProcessoService>(ProcessoService);
    processoRepository = module.get<Repository<ProcessoEntity>>(
      getRepositoryToken(ProcessoEntity),
    );
    metadadosRepository = module.get<Repository<MetadadosEntity>>(
      getRepositoryToken(MetadadosEntity),
    );
    movimentoRepository = module.get<Repository<MovimentoEntity>>(
      getRepositoryToken(MovimentoEntity),
    );
    datajudClient = module.get<DatajudClient>(DatajudClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('Não deve criar novo processo pois já existe um com esse código criado há menos de  2 meses', async () => {
      const createProcessoDto: CreateProcessoDto =
        ProcessoRequestDtoFactory.getRequest();
      const processoEntity = ProcessoEntityFactory.getEntity();
      const processoResponseEsperado = ProcessoResponseDtoFactory.getResponse();

      jest
        .spyOn(processoRepository, 'findOne')
        .mockResolvedValue(ProcessoEntityFactory.getEntity());

      const resultado = await service.create(createProcessoDto);

      expect(processoRepository.findOne).toHaveBeenCalledWith({
        where: { codigoProcesso: processoEntity.codigoProcesso },
        relations: ['movimentacoes'],
      });

      expect(processoResponseEsperado).toEqual(resultado);
    });

    it('Deve criar um novo processo pois não há nenhum existente ', async () => {
      const createProcessoDto: CreateProcessoDto =
        ProcessoRequestDtoFactory.getRequest();
      const processoEntity = ProcessoEntityFactory.getEntity();
      const processoResponseEsperado = ProcessoResponseDtoFactory.getResponse();
      const processoClientResponse = ProcessoClientDtoFactory.get();
      const metadataEntity = MetadadosEntityFactory.get();

      jest.spyOn(processoRepository, 'findOne').mockResolvedValue(undefined);

      jest.spyOn(processoRepository, 'save').mockResolvedValue(processoEntity);

      jest.spyOn(metadadosRepository, 'save').mockResolvedValue(metadataEntity);

      jest
        .spyOn(datajudClient, 'findByProcessCode')
        .mockResolvedValue(processoClientResponse);

      const resultado = await service.create(createProcessoDto);

      expect(processoRepository.findOne).toHaveBeenCalledWith({
        where: { codigoProcesso: processoEntity.codigoProcesso },
        relations: ['movimentacoes'],
      });

      expect(processoRepository.save).toHaveBeenCalled();

      expect(metadadosRepository.save).toHaveBeenCalled();

      expect(datajudClient.findByProcessCode).toHaveBeenCalledWith(
        processoEntity.codigoProcesso,
      );

      expect(processoResponseEsperado).toEqual(resultado);
    });

    it('Deve deletar registro antigo e criar um novo processo novo ', async () => {
      const createProcessoDto: CreateProcessoDto =
        ProcessoRequestDtoFactory.getRequest();
      const processoEntity = ProcessoEntityFactory.getEntity();
      processoEntity.dataCriacao = new Date('2018-2-28 21:00:00.000Z');
      const processoResponseEsperado = ProcessoResponseDtoFactory.getResponse();
      const processoClientResponse = ProcessoClientDtoFactory.get();
      const metadataEntity = MetadadosEntityFactory.get();

      jest
        .spyOn(processoRepository, 'findOne')
        .mockResolvedValue(processoEntity);

      jest.spyOn(metadadosRepository, 'save').mockResolvedValue(metadataEntity);

      jest.spyOn(processoRepository, 'save').mockResolvedValue(processoEntity);

      jest
        .spyOn(movimentoRepository, 'find')
        .mockResolvedValue(processoEntity.movimentacoes);

      jest.spyOn(movimentoRepository, 'delete').mockImplementation();

      jest.spyOn(processoRepository, 'delete').mockImplementation();

      jest
        .spyOn(datajudClient, 'findByProcessCode')
        .mockResolvedValue(processoClientResponse);

      const resultado = await service.create(createProcessoDto);

      expect(processoRepository.findOne).toHaveBeenCalledWith({
        where: { codigoProcesso: processoEntity.codigoProcesso },
        relations: ['movimentacoes'],
      });

      expect(datajudClient.findByProcessCode).toHaveBeenCalledWith(
        processoEntity.codigoProcesso,
      );

      expect(processoRepository.save).toHaveBeenCalled();

      expect(metadadosRepository.save).toHaveBeenCalled();

      expect(processoRepository.delete).toHaveBeenCalled();

      expect(movimentoRepository.delete).toHaveBeenCalled();

      expect(movimentoRepository.find).toHaveBeenCalled();

      expect(processoResponseEsperado).toEqual(resultado);
    });

    it('Deve lançar exceção, pois processo inexistente ', async () => {
      const createProcessoDto: CreateProcessoDto =
        ProcessoRequestDtoFactory.getRequest();
      const processoEntity = ProcessoEntityFactory.getEntity();

      jest.spyOn(processoRepository, 'findOne').mockResolvedValue(undefined);

      try {
        await service.create(createProcessoDto);
      } catch (error) {
        expect(error).toBeInstanceOf(CustomHttpException);
        expect(error.response.message).toEqual([
          'Processo não foi encontrado!',
        ]);
      }

      expect(processoRepository.findOne).toHaveBeenCalledWith({
        where: { codigoProcesso: processoEntity.codigoProcesso },
        relations: ['movimentacoes'],
      });

      expect(datajudClient.findByProcessCode).toHaveBeenCalledWith(
        processoEntity.codigoProcesso,
      );
    });

    describe('findAll', () => {
      it('Deve retornar dois itens, query com todos filtros', async () => {
        const processosEntities = [
          ProcessoEntityFactory.getEntity(),
          ProcessoEntityFactory.getEntity(),
        ];

        const processosResponseEsperado = {
          dadosResponse: [
            ProcessoResponseDtoFactory.getResponse(),
            ProcessoResponseDtoFactory.getResponse(),
          ],
          total: 2,
        };

        const queryParams = ProcessoQueryParamsDtoFactory.get();

        const whereEsperado: FindOptionsWhere<ProcessoEntity> = {};
        whereEsperado.dataAjuizamento = MoreThanOrEqual(
          new Date('2022-10-20T03:00:00.000Z'),
        );
        whereEsperado.assuntos = Like(`%${queryParams.assunto}%`);
        whereEsperado.classe = queryParams.classe;

        jest
          .spyOn(processoRepository, 'findAndCount')
          .mockResolvedValue([processosEntities, 2]);

        const resultado = await service.findAll(queryParams);

        expect(processoRepository.findAndCount).toHaveBeenCalledWith({
          where: whereEsperado,
          take: 10,
          skip: (queryParams.page - 1) * 10,
          relations: ['movimentacoes'],
        });

        expect(processosResponseEsperado).toEqual(resultado);
      });
    });

    it('Deve lançar exceção, pois data em formato incorreto ', async () => {
      const queryParams = ProcessoQueryParamsDtoFactory.get();
      queryParams.data = '2312421';

      try {
        await service.findAll(queryParams);
      } catch (error) {
        expect(error).toBeInstanceOf(CustomHttpException);
        expect(error.response.message).toEqual([
          'Formato da data deve ser o seguinte dd-MM-yyyy',
        ]);
      }
    });

    it('Deve lançar exceção, pois tentativa de query injection ', async () => {
      const queryParams = ProcessoQueryParamsDtoFactory.get();
      queryParams.assunto = 'insert';

      try {
        new ProcessoQueryParamsDto(
          queryParams.page,
          queryParams.data,
          queryParams.assunto,
          queryParams.classe,
        );
      } catch (error) {
        expect(error).toBeInstanceOf(CustomHttpException);
        expect(error.response.message).toEqual(['Filtro inválido']);
      }
    });
  });
});
