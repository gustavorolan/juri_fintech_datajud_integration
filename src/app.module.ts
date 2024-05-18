import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessoModule } from './datajud/processo.module';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
      useValue: {
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      },
    },
  ],
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProcessoModule,
  ],
})
export class AppModule {}
