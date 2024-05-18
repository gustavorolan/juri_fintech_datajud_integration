import { ProcessoQueryParamsDto } from '../../dto/query-params-processo.dtos';

export class ProcessoQueryParamsDtoFactory {
  static get(): ProcessoQueryParamsDto {
    return {
      page: 1,
      data: '20-10-2022',
      assunto: 'Oi',
      classe: 'Oi',
    };
  }
}
