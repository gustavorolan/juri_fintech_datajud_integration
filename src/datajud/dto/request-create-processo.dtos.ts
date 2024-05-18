import { IsString, Length } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateProcessoDto {
  @ApiProperty({ example: '00008323520184013202' })
  @IsString()
  @Length(20, 20, {
    message: 'O número do processo deve ter exatamente 20 caracteres.',
  })
  processo: string;
}
