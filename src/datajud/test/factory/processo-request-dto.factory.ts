import { CreateProcessoDto } from '../../dto/request-create-processo.dtos';

export class ProcessoRequestDtoFactory {
  static getRequest(): CreateProcessoDto {
    return {
      processo: '00008323520184013202',
    };
  }
}
