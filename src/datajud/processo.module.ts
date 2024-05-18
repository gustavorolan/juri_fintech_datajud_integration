import { Module } from '@nestjs/common';
import { ProcessoService } from './processo.service';
import { ProcessoController } from './processo.controller';
import { ProcessoEntity } from './entities/processo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatajudClient } from './datajud.client';
import { HttpModule } from '@nestjs/axios';
import { ProcessoMapper } from './processo.mapper';
import { MovimentoEntity } from './entities/movimento.entity';
import { MetadadosEntity } from './entities/metadata.entity';
import { LogService } from './log.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProcessoEntity,
      MovimentoEntity,
      MetadadosEntity,
    ]),
    HttpModule,
  ],
  controllers: [ProcessoController],
  providers: [ProcessoService, DatajudClient, ProcessoMapper, LogService],
})
export class ProcessoModule {}
