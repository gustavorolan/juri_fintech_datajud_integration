import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ProcessoService } from './processo.service';
import { CreateProcessoDto } from './dto/request-create-processo.dtos';
import { ProcessoQueryParamsDto } from './dto/query-params-processo.dtos';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ProcessoResponse } from "./dto/response-processo.dtos";

@Controller('v0/processo')
export class ProcessoController {
  constructor(private readonly datajudService: ProcessoService) {}

  @Post()
  @ApiOperation({ summary: 'Endpoint para criação dos processos' })
  @ApiResponse({
    status: 201,
    description: 'Successful response',
    type: ProcessoResponse,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    schema: {
      example: {
        message: ['Mensagem exemplo'],
        error: 'Bad Request',
        statusCode: 400,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
    schema: {
      example: {
        message: ['Mensagem exemplo'],
        error: 'Not Found',
        statusCode: 'Not Found',
      },
    },
  })
  create(@Body() createDatajudDto: CreateProcessoDto) {
    return this.datajudService.create(createDatajudDto);
  }

  @Get()
  @ApiOperation({ summary: 'Endpoint para consulta dos processos' })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: ProcessoResponse,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    schema: {
      example: {
        message: ['Mensagem exemplo'],
        error: 'Bad Request',
        statusCode: 400,
      },
    },
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Numero da página.',
    example: 1,
  })
  @ApiQuery({
    name: 'data',
    required: false,
    description:
      'Filtrar por data, retorna os processos com data de ajuizamento maiores que a inserida.',
    example: '28-10-2018',
  })
  @ApiQuery({
    name: 'assunto',
    required: false,
    description:
      'Filtrar por assunto, retorna os processos que contém o assunto inserido. ',
    example: 'Concessão',
  })
  @ApiQuery({
    name: 'classe',
    required: false,
    description:
      'Filtrar por classe, retorna os processos que são da classe inserida.',
    example: 'Procedimento do Juizado Especial Cível',
  })
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
