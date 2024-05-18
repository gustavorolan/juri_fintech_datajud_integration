import { ProcessoEntity } from '../../entities/processo.entity';
import { MovimentoEntity } from '../../entities/movimento.entity';

export class ProcessoEntityFactory {
  static getEntity(): ProcessoEntity {
    const processo: ProcessoEntity = {
      dataCriacao: new Date('2024-05-18T18:06:26.474Z'),
      codigoProcesso: '00008323520184013202',
      classe: 'Procedimento do Juizado Especial Cível',
      sistema: 'Pje',
      formato: 'Eletrônico',
      tribunal: 'TRF1',
      dataUltimaAtualizacao: new Date('2023-07-21T19:10:08.483Z'),
      grau: 'JE',
      dataAjuizamento: new Date('2018-10-29T00:00:00.000Z'),
      movimentacoes: [],
      assuntos: ['Concessão'],
      id: 8,
    };

    processo.movimentacoes = this.getMovimentoEntities(processo);

    return processo;
  }

  static getMovimentoEntities(processo: ProcessoEntity): MovimentoEntity[] {
    return [
      {
        data: new Date('2018-10-30T14:06:24.000Z'),
        nome: 'Distribuição',
        id: 295,
        processo: processo,
      },
      {
        data: new Date('2018-11-06T11:54:44.000Z'),
        nome: 'Audiência',
        id: 296,
        processo: processo,
      },
      {
        data: new Date('2019-02-15T15:31:24.000Z'),
        nome: 'Documento',
        id: 297,
        processo: processo,
      },
      {
        data: new Date('2019-04-01T12:05:35.000Z'),
        nome: 'Audiência',
        id: 298,
        processo: processo,
      },
      {
        data: new Date('2019-04-11T15:33:18.000Z'),
        nome: 'Documento',
        id: 299,
        processo: processo,
      },
      {
        data: new Date('2019-04-11T15:33:40.000Z'),
        nome: 'Conclusão',
        id: 300,
        processo: processo,
      },
      {
        data: new Date('2019-06-19T09:52:59.000Z'),
        nome: 'Remessa',
        id: 301,
        processo: processo,
      },
      {
        data: new Date('2019-06-24T16:43:41.000Z'),
        nome: 'Remessa',
        id: 302,
        processo: processo,
      },
      {
        data: new Date('2019-07-04T15:30:48.000Z'),
        nome: 'Audiência',
        id: 303,
        processo: processo,
      },
      {
        data: new Date('2019-12-16T17:18:42.000Z'),
        nome: 'Audiência',
        id: 304,
        processo: processo,
      },
      {
        data: new Date('2020-03-26T15:02:56.000Z'),
        nome: 'Baixa Definitiva',
        id: 305,
        processo: processo,
      },
      {
        data: new Date('2020-09-10T18:34:03.000Z'),
        nome: 'Documento',
        id: 306,
        processo: processo,
      },
      {
        data: new Date('2020-09-10T18:36:18.000Z'),
        nome: 'Documento',
        id: 307,
        processo: processo,
      },
      {
        data: new Date('2020-09-10T18:37:04.000Z'),
        nome: 'Expedição de documento',
        id: 308,
        processo: processo,
      },
      {
        data: new Date('2020-09-24T18:03:20.000Z'),
        nome: 'Conclusão',
        id: 309,
        processo: processo,
      },
      {
        data: new Date('2020-10-05T20:03:40.000Z'),
        nome: 'Expedição de documento',
        id: 310,
        processo: processo,
      },
      {
        data: new Date('2020-11-12T20:24:27.000Z'),
        nome: 'Documento',
        id: 311,
        processo: processo,
      },
      {
        data: new Date('2020-10-02T11:14:19.000Z'),
        nome: 'Ausência do autor à audiência',
        id: 312,
        processo: processo,
      },
      {
        data: new Date('2020-10-28T09:08:13.000Z'),
        nome: 'Decurso de Prazo',
        id: 313,
        processo: processo,
      },
      {
        data: new Date('2020-10-31T09:52:58.000Z'),
        nome: 'Decurso de Prazo',
        id: 314,
        processo: processo,
      },
      {
        data: new Date('2020-11-06T08:18:00.000Z'),
        nome: 'Decurso de Prazo',
        id: 315,
        processo: processo,
      },
      {
        data: new Date('2020-11-12T20:27:30.000Z'),
        nome: 'Definitivo',
        id: 316,
        processo: processo,
      },
      {
        data: new Date('2018-10-31T13:47:44.000Z'),
        nome: 'Recebimento',
        id: 317,
        processo: processo,
      },
      {
        data: new Date('2018-11-06T10:37:20.000Z'),
        nome: 'Recebimento',
        id: 318,
        processo: processo,
      },
      {
        data: new Date('2018-11-13T15:17:00.000Z'),
        nome: 'Intimação',
        id: 319,
        processo: processo,
      },
      {
        data: new Date('2018-11-16T10:36:00.000Z'),
        nome: 'Publicação',
        id: 320,
        processo: processo,
      },
      {
        data: new Date('2018-12-04T12:36:23.000Z'),
        nome: 'Entrega em carga/vista',
        id: 321,
        processo: processo,
      },
      {
        data: new Date('2019-02-12T14:44:08.000Z'),
        nome: 'Recebimento',
        id: 322,
        processo: processo,
      },
      {
        data: new Date('2019-02-12T14:44:49.000Z'),
        nome: 'Recebimento',
        id: 323,
        processo: processo,
      },
      {
        data: new Date('2019-05-10T13:44:00.000Z'),
        nome: 'Mero expediente',
        id: 324,
        processo: processo,
      },
      {
        data: new Date('2019-06-25T09:48:12.000Z'),
        nome: 'Recebimento',
        id: 325,
        processo: processo,
      },
      {
        data: new Date('2019-07-03T17:00:00.000Z'),
        nome: 'Recebimento',
        id: 326,
        processo: processo,
      },
      {
        data: new Date('2019-07-04T15:35:22.000Z'),
        nome: 'Intimação',
        id: 327,
        processo: processo,
      },
      {
        data: new Date('2019-07-19T16:41:31.000Z'),
        nome: 'Intimação',
        id: 328,
        processo: processo,
      },
      {
        data: new Date('2019-07-23T17:53:57.000Z'),
        nome: 'Publicação',
        id: 329,
        processo: processo,
      },
      {
        data: new Date('2019-07-26T14:03:31.000Z'),
        nome: 'Entrega em carga/vista',
        id: 330,
        processo: processo,
      },
      {
        data: new Date('2019-10-03T11:24:19.000Z'),
        nome: 'Recebimento',
        id: 331,
        processo: processo,
      },
      {
        data: new Date('2019-12-16T18:03:00.000Z'),
        nome: 'Mero expediente',
        id: 332,
        processo: processo,
      },
      {
        data: new Date('2020-03-27T18:00:02.000Z'),
        nome: 'Mero expediente',
        id: 333,
        processo: processo,
      },
      {
        data: new Date('2020-06-01T16:22:00.000Z'),
        nome: 'Recebimento',
        id: 334,
        processo: processo,
      },
      {
        data: new Date('2020-08-04T14:48:12.000Z'),
        nome: 'Ato ordinatório',
        id: 335,
        processo: processo,
      },
      {
        data: new Date('2020-08-05T01:15:18.000Z'),
        nome: 'Conversão de Autos Físicos em Eletrônicos',
        id: 336,
        processo: processo,
      },
    ];
  }
}
