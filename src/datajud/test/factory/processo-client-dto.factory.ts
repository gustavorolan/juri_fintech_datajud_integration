import { Processo } from '../../dto/response-client-datajud-dtos';

export class ProcessoClientDtoFactory {
  static get(): Processo {
    return {
      _index: 'api_publica_trf1',
      _type: '_doc',
      _id: 'TRF1_436_JE_16403_00008323520184013202',
      _score: 13.723827,
      _source: {
        numeroProcesso: '00008323520184013202',
        classe: {
          codigo: 436,
          nome: 'Procedimento do Juizado Especial Cível',
        },
        sistema: {
          codigo: 1,
          nome: 'Pje',
        },
        formato: {
          codigo: 1,
          nome: 'Eletrônico',
        },
        tribunal: 'TRF1',
        dataHoraUltimaAtualizacao: new Date('2023-07-21T19:10:08.483Z'),
        grau: 'JE',
        dataAjuizamento: new Date('2018-10-29T00:00:00.000Z'),
        movimentos: [
          {
            complementosTabelados: [
              {
                codigo: 2,
                valor: 1,
                nome: 'competência exclusiva',
                descricao: 'tipo_de_distribuicao_redistribuicao',
              },
            ],
            codigo: 26,
            nome: 'Distribuição',
            dataHora: new Date('2018-10-30T14:06:24.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 15,
                valor: 9,
                nome: 'designada',
                descricao: 'situacao_da_audiencia',
              },
              {
                codigo: 16,
                valor: 23,
                nome: 'instrução e julgamento',
                descricao: 'tipo_de_audiencia',
              },
            ],
            codigo: 970,
            nome: 'Audiência',
            dataHora: new Date('2018-11-06T11:54:44.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 4,
                valor: 80,
                nome: 'Outros documentos',
                descricao: 'tipo_de_documento',
              },
            ],
            codigo: 581,
            nome: 'Documento',
            dataHora: new Date('2019-02-15T15:31:24.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 15,
                valor: 14,
                nome: 'não-realizada',
                descricao: 'situacao_da_audiencia',
              },
              {
                codigo: 16,
                valor: 22,
                nome: 'instrução',
                descricao: 'tipo_de_audiencia',
              },
            ],
            codigo: 970,
            nome: 'Audiência',
            dataHora: new Date('2019-04-01T12:05:35.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 4,
                valor: 80,
                nome: 'Outros documentos',
                descricao: 'tipo_de_documento',
              },
            ],
            codigo: 581,
            nome: 'Documento',
            dataHora: new Date('2019-04-11T15:33:18.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 3,
                valor: 6,
                nome: 'para decisão',
                descricao: 'tipo_de_conclusao',
              },
            ],
            codigo: 51,
            nome: 'Conclusão',
            dataHora: new Date('2019-04-11T15:33:40.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 18,
                valor: 40,
                nome: 'outros motivos',
                descricao: 'motivo_da_remessa',
              },
            ],
            codigo: 123,
            nome: 'Remessa',
            dataHora: new Date('2019-06-19T09:52:59.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 18,
                valor: 40,
                nome: 'outros motivos',
                descricao: 'motivo_da_remessa',
              },
            ],
            codigo: 982,
            nome: 'Remessa',
            dataHora: new Date('2019-06-24T16:43:41.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 16,
                valor: 23,
                nome: 'instrução e julgamento',
                descricao: 'tipo_de_audiencia',
              },
              {
                codigo: 15,
                valor: 9,
                nome: 'designada',
                descricao: 'situacao_da_audiencia',
              },
            ],
            codigo: 970,
            nome: 'Audiência',
            dataHora: new Date('2019-07-04T15:30:48.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 16,
                valor: 23,
                nome: 'instrução e julgamento',
                descricao: 'tipo_de_audiencia',
              },
              {
                codigo: 15,
                valor: 13,
                nome: 'realizada',
                descricao: 'situacao_da_audiencia',
              },
            ],
            codigo: 970,
            nome: 'Audiência',
            dataHora: new Date('2019-12-16T17:18:42.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 18,
                valor: 90,
                nome: 'declaração de competência para Ácórdão vinculado a Tribunal diferente',
                descricao: 'motivo_da_remessa',
              },
            ],
            codigo: 22,
            nome: 'Baixa Definitiva',
            dataHora: new Date('2020-03-26T15:02:56.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 4,
                valor: 107,
                nome: 'Certidão',
                descricao: 'tipo_de_documento',
              },
            ],
            codigo: 581,
            nome: 'Documento',
            dataHora: new Date('2020-09-10T18:34:03.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 4,
                valor: 107,
                nome: 'Certidão',
                descricao: 'tipo_de_documento',
              },
            ],
            codigo: 581,
            nome: 'Documento',
            dataHora: new Date('2020-09-10T18:36:18.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 4,
                valor: 80,
                nome: 'Outros documentos',
                descricao: 'tipo_de_documento',
              },
            ],
            codigo: 60,
            nome: 'Expedição de documento',
            dataHora: new Date('2020-09-10T18:37:04.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 3,
                valor: 36,
                nome: 'para julgamento',
                descricao: 'tipo_de_conclusao',
              },
            ],
            codigo: 51,
            nome: 'Conclusão',
            dataHora: new Date('2020-09-24T18:03:20.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 4,
                valor: 80,
                nome: 'Outros documentos',
                descricao: 'tipo_de_documento',
              },
            ],
            codigo: 60,
            nome: 'Expedição de documento',
            dataHora: new Date('2020-10-05T20:03:40.000Z'),
          },
          {
            complementosTabelados: [
              {
                codigo: 4,
                valor: 80,
                nome: 'Outros documentos',
                descricao: 'tipo_de_documento',
              },
            ],
            codigo: 581,
            nome: 'Documento',
            dataHora: new Date('2020-11-12T20:24:27.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 11376,
            nome: 'Ausência do autor à audiência',
            dataHora: new Date('2020-10-02T11:14:19.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 1051,
            nome: 'Decurso de Prazo',
            dataHora: new Date('2020-10-28T09:08:13.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 1051,
            nome: 'Decurso de Prazo',
            dataHora: new Date('2020-10-31T09:52:58.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 1051,
            nome: 'Decurso de Prazo',
            dataHora: new Date('2020-11-06T08:18:00.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 246,
            nome: 'Definitivo',
            dataHora: new Date('2020-11-12T20:27:30.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 132,
            nome: 'Recebimento',
            dataHora: new Date('2018-10-31T13:47:44.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 132,
            nome: 'Recebimento',
            dataHora: new Date('2018-11-06T10:37:20.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 12263,
            nome: 'Intimação',
            dataHora: new Date('2018-11-13T15:17:00.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 92,
            nome: 'Publicação',
            dataHora: new Date('2018-11-16T10:36:00.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 493,
            nome: 'Entrega em carga/vista',
            dataHora: new Date('2018-12-04T12:36:23.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 132,
            nome: 'Recebimento',
            dataHora: new Date('2019-02-12T14:44:08.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 132,
            nome: 'Recebimento',
            dataHora: new Date('2019-02-12T14:44:49.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 11010,
            nome: 'Mero expediente',
            dataHora: new Date('2019-05-10T13:44:00.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 132,
            nome: 'Recebimento',
            dataHora: new Date('2019-06-25T09:48:12.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 132,
            nome: 'Recebimento',
            dataHora: new Date('2019-07-03T17:00:00.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 12263,
            nome: 'Intimação',
            dataHora: new Date('2019-07-04T15:35:22.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 12263,
            nome: 'Intimação',
            dataHora: new Date('2019-07-19T16:41:31.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 92,
            nome: 'Publicação',
            dataHora: new Date('2019-07-23T17:53:57.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 493,
            nome: 'Entrega em carga/vista',
            dataHora: new Date('2019-07-26T14:03:31.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 132,
            nome: 'Recebimento',
            dataHora: new Date('2019-10-03T11:24:19.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 11010,
            nome: 'Mero expediente',
            dataHora: new Date('2019-12-16T18:03:00.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 11010,
            nome: 'Mero expediente',
            dataHora: new Date('2020-03-27T18:00:02.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 132,
            nome: 'Recebimento',
            dataHora: new Date('2020-06-01T16:22:00.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 11383,
            nome: 'Ato ordinatório',
            dataHora: new Date('2020-08-04T14:48:12.000Z'),
          },
          {
            complementosTabelados: [],
            codigo: 14732,
            nome: 'Conversão de Autos Físicos em Eletrônicos',
            dataHora: new Date('2020-08-05T01:15:18.000Z'),
          },
        ],
        id: 'TRF1_436_JE_16403_00008323520184013202',
        nivelSigilo: 0,
        orgaoJulgador: {
          codigoMunicipioIBGE: 5128,
          codigo: 16403,
          nome: 'JEF Adj - Tefé',
        },
        assuntos: [
          {
            codigo: 6177,
            nome: 'Concessão',
          },
        ],
      },
    };
  }
}
