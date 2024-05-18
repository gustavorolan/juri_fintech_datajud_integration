import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ProcessoService } from './processo.service';
import { CreateProcessoDto } from './dto/request-create-processo.dtos';
import { ProcessoQueryParamsDto } from "./dto/query-params-processo.dtos";

@Controller('v0/processo')
export class ProcessoController {
  constructor(private readonly datajudService: ProcessoService) {}

  @Post()
  create(@Body() createDatajudDto: CreateProcessoDto) {
    return this.datajudService.create(createDatajudDto);
  }

  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('data') data: string,
    @Query('assunto') assunto: string,
    @Query('classe') classe: string,
  ) {
    return this.datajudService.findAll(
      new ProcessoQueryParamsDto(page, data, assunto, classe),
    );
  }
}
