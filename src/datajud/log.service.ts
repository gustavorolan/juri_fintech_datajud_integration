import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LogService {
  errorAndThrow(logger: Logger, exception: Error) {
    logger.error(JSON.stringify(exception));
    throw exception;
  }
}
