import { Test } from '@nestjs/testing';
import { ProcessoService } from '../processo.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProcessoEntity } from '../entities/processo.entity';
import { Repository } from 'typeorm';
import { MetadadosEntity } from '../entities/metadata.entity';
import { MovimentoEntity } from '../entities/movimento.entity';
import { DatajudClient } from '../datajud.client';
import { ProcessoMapper } from '../processo.mapper';
import { LogService } from '../log.service';

export const processoServiceModuleTest = async () =>
  await Test.createTestingModule({
    providers: [
      ProcessoService,
      {
        provide: getRepositoryToken(ProcessoEntity),
        useClass: Repository,
      },
      {
        provide: getRepositoryToken(MetadadosEntity),
        useClass: Repository,
      },
      {
        provide: getRepositoryToken(MovimentoEntity),
        useClass: Repository,
      },
      {
        provide: DatajudClient,
        useValue: {
          findByProcessCode: jest.fn(),
        },
      },
      {
        provide: ProcessoMapper,
        useClass: ProcessoMapper,
      },
      {
        provide: LogService,
        useClass: LogService,
      },
    ],
  }).compile();
