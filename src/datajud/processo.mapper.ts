import { Injectable } from '@nestjs/common';
import { ProcessoEntity } from './entities/processo.entity';
import { Movimento, Processo } from './dto/response-client-datajud-dtos';
import { MetadadosEntity } from './entities/metadata.entity';
import { MovimentoEntity } from './entities/movimento.entity';
import {
  MovimentosResponse,
  ProcessoResponse,
} from './dto/response-processo.dtos';
import { format, fromZonedTime } from 'date-fns-tz';

@Injectable()
export class ProcessoMapper {
  toProcessoEntity(processo: Processo, processCode: string): ProcessoEntity {
    const source = processo._source;
    const processoEntity = new ProcessoEntity();
    processoEntity.codigoProcesso = processCode;
    processoEntity.classe = source.classe.nome;
    processoEntity.sistema = source.sistema.nome;
    processoEntity.formato = source.formato.nome;
    processoEntity.tribunal = source.tribunal;
    processoEntity.dataUltimaAtualizacao = source.dataHoraUltimaAtualizacao;
    processoEntity.grau = source.grau;
    processoEntity.dataAjuizamento = source.dataAjuizamento;
    processoEntity.movimentacoes = this.toMovimentoEntity(source.movimentos);
    processoEntity.assuntos = source.assuntos.map((assunto) => assunto.nome);
    processoEntity.dataCriacao = new Date();
    return processoEntity;
  }

  toMetadados(processo: Processo, processEntityId: number): MetadadosEntity {
    const metadadosEntity = new MetadadosEntity();
    metadadosEntity.processoId = processEntityId;
    metadadosEntity.dados = { dataCricao: new Date(), ...processo };
    return metadadosEntity;
  }

  private toMovimentoEntity(movimentos: Movimento[]): MovimentoEntity[] {
    if (!movimentos) return [];
    return movimentos.map((movimento) => {
      const processMovementsEntity = new MovimentoEntity();
      processMovementsEntity.data = movimento.dataHora;
      processMovementsEntity.nome = movimento.nome;
      return processMovementsEntity;
    });
  }

  toProcessosResponse(processosEntities: ProcessoEntity[]): ProcessoResponse[] {
    return processosEntities.map((processoEntity) =>
      this.toProcessoResponse(processoEntity),
    );
  }

  toProcessoResponse(processoEntity: ProcessoEntity): ProcessoResponse {
    const processoResponse = new ProcessoResponse();
    processoResponse.codigoProcesso = processoEntity.codigoProcesso;
    processoResponse.classe = processoEntity.classe;
    processoResponse.sistema = processoEntity.sistema;
    processoResponse.formato = processoEntity.formato;
    processoResponse.tribunal = processoEntity.tribunal;
    processoResponse.grau = processoEntity.grau;
    processoResponse.assuntos = processoEntity.assuntos;
    processoResponse.dataAjuizamento = this.formatarData(
      processoEntity.dataAjuizamento,
    );
    processoResponse.dataUltimaAtualizacao = this.formatarData(
      processoEntity.dataUltimaAtualizacao,
    );

    processoResponse.movimentacoes = processoEntity.movimentacoes.map(
      (movimento) => this.toMovimentoResponse(movimento),
    );

    return processoResponse;
  }

  private toMovimentoResponse(movimento: MovimentoEntity): MovimentosResponse {
    const movimentoResponse = new MovimentosResponse();
    movimentoResponse.data = this.formatarData(movimento.data);
    movimentoResponse.nome = movimento.nome;
    return movimentoResponse;
  }

  formatarData(data: Date): string {
    return format(data, 'dd-MM-yyyy');
  }
}
