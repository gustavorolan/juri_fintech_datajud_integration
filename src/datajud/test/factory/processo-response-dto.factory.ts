import {
  MovimentosResponse,
  ProcessoResponse,
} from '../../dto/response-processo.dtos';

export class ProcessoResponseDtoFactory {
  static getResponse(): ProcessoResponse {
    const processo: ProcessoResponse = {
      codigoProcesso: '00008323520184013202',
      classe: 'Procedimento do Juizado Especial Cível',
      sistema: 'Pje',
      formato: 'Eletrônico',
      tribunal: 'TRF1',
      dataUltimaAtualizacao: '21-07-2023',
      grau: 'JE',
      dataAjuizamento: '28-10-2018',
      movimentacoes: [],
      assuntos: ['Concessão'],
    };

    processo.movimentacoes = this.getMovimentosResponse();

    return processo;
  }

  static getMovimentosResponse(): MovimentosResponse[] {
    return [
      {
        data: '30-10-2018',
        nome: 'Distribuição',
      },
      {
        data: '06-11-2018',
        nome: 'Audiência',
      },
      {
        data: '15-02-2019',
        nome: 'Documento',
      },
      {
        data: '01-04-2019',
        nome: 'Audiência',
      },
      {
        data: '11-04-2019',
        nome: 'Documento',
      },
      {
        data: '11-04-2019',
        nome: 'Conclusão',
      },
      {
        data: '19-06-2019',
        nome: 'Remessa',
      },
      {
        data: '24-06-2019',
        nome: 'Remessa',
      },
      {
        data: '04-07-2019',
        nome: 'Audiência',
      },
      {
        data: '16-12-2019',
        nome: 'Audiência',
      },
      {
        data: '26-03-2020',
        nome: 'Baixa Definitiva',
      },
      {
        data: '10-09-2020',
        nome: 'Documento',
      },
      {
        data: '10-09-2020',
        nome: 'Documento',
      },
      {
        data: '10-09-2020',
        nome: 'Expedição de documento',
      },
      {
        data: '24-09-2020',
        nome: 'Conclusão',
      },
      {
        data: '05-10-2020',
        nome: 'Expedição de documento',
      },
      {
        data: '12-11-2020',
        nome: 'Documento',
      },
      {
        data: '02-10-2020',
        nome: 'Ausência do autor à audiência',
      },
      {
        data: '28-10-2020',
        nome: 'Decurso de Prazo',
      },
      {
        data: '31-10-2020',
        nome: 'Decurso de Prazo',
      },
      {
        data: '06-11-2020',
        nome: 'Decurso de Prazo',
      },
      {
        data: '12-11-2020',
        nome: 'Definitivo',
      },
      {
        data: '31-10-2018',
        nome: 'Recebimento',
      },
      {
        data: '06-11-2018',
        nome: 'Recebimento',
      },
      {
        data: '13-11-2018',
        nome: 'Intimação',
      },
      {
        data: '16-11-2018',
        nome: 'Publicação',
      },
      {
        data: '04-12-2018',
        nome: 'Entrega em carga/vista',
      },
      {
        data: '12-02-2019',
        nome: 'Recebimento',
      },
      {
        data: '12-02-2019',
        nome: 'Recebimento',
      },
      {
        data: '10-05-2019',
        nome: 'Mero expediente',
      },
      {
        data: '25-06-2019',
        nome: 'Recebimento',
      },
      {
        data: '03-07-2019',
        nome: 'Recebimento',
      },
      {
        data: '04-07-2019',
        nome: 'Intimação',
      },
      {
        data: '19-07-2019',
        nome: 'Intimação',
      },
      {
        data: '23-07-2019',
        nome: 'Publicação',
      },
      {
        data: '26-07-2019',
        nome: 'Entrega em carga/vista',
      },
      {
        data: '03-10-2019',
        nome: 'Recebimento',
      },
      {
        data: '16-12-2019',
        nome: 'Mero expediente',
      },
      {
        data: '27-03-2020',
        nome: 'Mero expediente',
      },
      {
        data: '01-06-2020',
        nome: 'Recebimento',
      },
      {
        data: '04-08-2020',
        nome: 'Ato ordinatório',
      },
      {
        data: '04-08-2020',
        nome: 'Conversão de Autos Físicos em Eletrônicos',
      },
    ];
  }
}
