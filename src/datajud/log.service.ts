import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LogService {
  errorAndThrow(logger: Logger, e: Error) {
    logger.error(JSON.stringify(e));
    throw e;
  }
}
