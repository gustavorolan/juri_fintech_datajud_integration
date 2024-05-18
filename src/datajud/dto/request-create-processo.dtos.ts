import { IsString, Length } from 'class-validator';

export class CreateProcessoDto {
  @IsString()
  @Length(20, 20, {
    message: 'O número do processo deve ter exatamente 20 caracteres.',
  })
  processo: string;
}
