import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'hello',
        url: '0.0.0.0:50052',
        protoPath: join(__dirname, 'infrastructure/grpc/protofile/hello-world.proto'),
      },
    },
  );

  await app.listen().then(() => {
    logger.log('Hello World service is listening...')
  });
}
bootstrap();
