import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { Processo } from './dto/response-client-datajud-dtos';
import { ConfigService } from '@nestjs/config';
import { CustomHttpException } from './exceptions/exception.entity';
import { LogService } from './log.service';

@Injectable()
export class DatajudClient {
  constructor(
    private http: HttpService,
    private readonly configService: ConfigService,
    private readonly logService: LogService,
  ) {
    this.http.axiosRef.defaults.baseURL =
      configService.get<string>('DATAJUD_API_URL');
    this.http.axiosRef.defaults.headers.common['Content-Type'] =
      'application/json';
    this.http.axiosRef.defaults.headers.common['Authorization'] =
      configService.get<string>('DATAJUD_API_KEY');
  }

  private logger = new Logger('DatajudClient');

  async findByProcessCode(codigoProcesso: string): Promise<Processo> {
    try {
      this.logger.log(
        `Consultando api datajud. Código Processo:${codigoProcesso}`,
      );

      const res = this.http.request({
        url: '/_search',
        method: 'GET',
        data: {
          query: {
            match: {
              numeroProcesso: `${codigoProcesso}`,
            },
          },
        },
      });

      //it should return just one result, but its a list.
      return (await lastValueFrom(res)).data.hits.hits[0];
    } catch (e) {
      this.logService.errorAndThrow(
        this.logger,
        CustomHttpException.errorApiTerceiros,
      );
    }
  }
}
