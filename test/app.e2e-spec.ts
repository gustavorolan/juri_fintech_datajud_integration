import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { DatajudClient } from '../src/datajud/datajud.client';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST) Requisição Correta', async () => {
    const response = await request(app.getHttpServer())
      .post('/v0/processo')
      .send({ processo: '00008323520184013202' })
      .expect(201);

    expect(response.body).toMatchObject({
      classe: expect.any(String),
      sistema: expect.any(String),
      formato: expect.any(String),
      tribunal: expect.any(String),
      grau: expect.any(String),
      assuntos: expect.arrayContaining([expect.any(String)]),
      dataAjuizamento: expect.any(String),
      dataUltimaAtualizacao: expect.any(String),
      movimentacoes: expect.arrayContaining([
        expect.objectContaining({
          data: expect.any(String),
          nome: expect.any(String),
        }),
      ]),
    });
  });

  it('/ (POST) Requisição inválida', () => {
    return request(app.getHttpServer())
      .post('/v0/processo')
      .send({ processo: '000083235201840132023242' })
      .expect(400)
      .expect({
        message: ['O número do processo deve ter exatamente 20 caracteres.'],
        error: 'Bad Request',
        statusCode: 400,
      });
  });

  it('/ (GET) Requisição  Correta', async () => {
    const response = await request(app.getHttpServer())
      .get('/v0/processo?page=1&data=28-10-2018')
      .expect(200);

    expect(response.body).toMatchObject({
      dadosResponse: expect.arrayContaining([
        expect.objectContaining({
          classe: expect.any(String),
          sistema: expect.any(String),
          formato: expect.any(String),
          tribunal: expect.any(String),
          grau: expect.any(String),
          assuntos: expect.arrayContaining([expect.any(String)]),
          dataAjuizamento: expect.any(String),
          dataUltimaAtualizacao: expect.any(String),
          movimentacoes: expect.arrayContaining([
            expect.objectContaining({
              data: expect.any(String),
              nome: expect.any(String),
            }),
          ]),
        }),
      ]),
      total: expect.any(Number),
    });
  });

  it('/ (GET) Requisição inválida', () => {
    return request(app.getHttpServer())
      .get('/v0/processo?page=1&data=28-10-2018&assunto=insert')
      .expect(400)
      .expect({
        message: ['Filtro inválido'],
        error: 'Bad Request',
        statusCode: 400,
      });
  });
});

const datajudMockResponse = {
  took: 924,
  timed_out: false,
  _shards: {
    total: 7,
    successful: 7,
    skipped: 0,
    failed: 0,
  },
  hits: {
    total: {
      value: 1,
      relation: 'eq',
    },
    max_score: 13.723827,
    hits: [
      {
        _index: 'api_publica_trf1',
        _type: '_doc',
        _id: 'TRF1_436_JE_16403_00008323520184013202',
        _score: 13.723827,
        _source: {
          numeroProcesso: '00008323520184013202',
          classe: {
            codigo: 436,
            nome: 'Procedimento do Juizado Especial Cível oi',
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
          dataHoraUltimaAtualizacao: '2023-07-21T19:10:08.483Z',
          grau: 'JE',
          '@timestamp': '2023-09-05T02:00:11.344Z',
          dataAjuizamento: '2018-10-29T00:00:00.000Z',
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
              dataHora: '2018-10-30T14:06:24.000Z',
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
              dataHora: '2018-11-06T11:54:44.000Z',
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
              dataHora: '2019-02-15T15:31:24.000Z',
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
              dataHora: '2019-04-01T12:05:35.000Z',
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
              dataHora: '2019-04-11T15:33:18.000Z',
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
              dataHora: '2019-04-11T15:33:40.000Z',
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
              dataHora: '2019-06-19T09:52:59.000',
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
      },
    ],
  },
};
