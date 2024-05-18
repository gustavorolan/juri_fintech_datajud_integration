import { CustomHttpException } from '../exceptions/exception.entity';

const SQL_INJECTION_REGEX =
  /(['";]|(--|\#|\/\*)|\/\*!?\d+(\.\d+){0,1}|(?:\n|\r|\t|%0[0-9a-fA-F]|%1[0-9a-fA-F]|%7[0-9a-eA-E])|(\b(select|update|delete|insert|create|alter|drop|truncate|rename|call|execute|desc|show|lock|unlock|grant|revoke|handler|references|on|use|kill|analyze|describe|help|use|admin|flush|logfile|sleep|benchmark|user|\*|from|where|limit|into|outfile|dumpfile|load_file)\b|\#\+|union(?:\s*\(.+\))?\s*(?:select|all|distinct|top\s*\d+\s*percent|\d+\s*table_name\s*from\s*information_schema\s*tables|schema_name|rand\(|\(\s*select)))/i;

export class ProcessoQueryParamsDto {
  page: number = 1;
  data: string;
  assunto: string;
  classe: string;

  constructor(page: number = 1, data: string, assunto: string, classe: string) {
    if (
      (classe && SQL_INJECTION_REGEX.test(classe)) ||
      (assunto && SQL_INJECTION_REGEX.test(assunto)) ||
      (data && SQL_INJECTION_REGEX.test(data)) ||
      isNaN(page)
    ) {
      throw CustomHttpException.filtroInvalido;
    }
    this.classe = classe;
    this.assunto = assunto;
    this.data = data;
    this.page = page;
  }
}
