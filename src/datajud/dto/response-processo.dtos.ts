import { ApiProperty } from '@nestjs/swagger';

export class ProcessoResponse {
  @ApiProperty({ example: '00008323520184013202' })
  codigoProcesso: string;

  @ApiProperty({ example: 'Procedimento do Juizado Especial Cível' })
  classe: string;

  @ApiProperty({ example: 'Pje' })
  sistema: string;

  @ApiProperty({ example: 'Eletrônico' })
  formato: string;

  @ApiProperty({ example: 'TRF1' })
  tribunal: string;

  @ApiProperty({ example: '28-10-2018' })
  dataUltimaAtualizacao: string;

  @ApiProperty({ example: 'JE' })
  grau: string;

  @ApiProperty({ example: '28-10-2018' })
  dataAjuizamento: string;

  @ApiProperty({
    example: [
      {
        data: '30-10-2018',
        nome: 'Distribuição',
      },
    ],
  })
  movimentacoes: MovimentosResponse[];

  @ApiProperty({ example: ['Concessão'] })
  assuntos: string[];
}

export class MovimentosResponse {
  nome: string;
  data: string;
}
