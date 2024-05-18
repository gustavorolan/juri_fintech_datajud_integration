import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomHttpException extends HttpException {
  constructor(message: string[], statusCode: HttpStatus, error: string) {
    super(
      {
        message: message,
        error: error,
        statusCode: statusCode,
      },
      statusCode,
    );
  }

  static BAD_REQUEST_ERROR = 'Bad Request';

  static NOT_FOUND_ERROR = 'Not Found';

  static INTERNAL_SERVER_ERROR = 'Internal Server Error';

  static formatoInvalidoParaData: Error = new CustomHttpException(
    ['Formato da data deve ser o seguinte dd-MM-yyyy'],
    HttpStatus.BAD_REQUEST,
    this.BAD_REQUEST_ERROR,
  );

  static processoNaoEncotrado: Error = new CustomHttpException(
    ['Processo não foi encontrado!'],
    HttpStatus.NOT_FOUND,
    this.NOT_FOUND_ERROR,
  );

  static filtroInvalido: Error = new CustomHttpException(
    ['Filtro inválido'],
    HttpStatus.BAD_REQUEST,
    this.BAD_REQUEST_ERROR,
  );

  static errorApiTerceiros: Error = new CustomHttpException(
    ['Erro ao se conectar com api externa.'],
    HttpStatus.INTERNAL_SERVER_ERROR,
    this.INTERNAL_SERVER_ERROR,
  );
}
