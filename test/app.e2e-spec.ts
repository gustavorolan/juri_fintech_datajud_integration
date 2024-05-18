import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

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
