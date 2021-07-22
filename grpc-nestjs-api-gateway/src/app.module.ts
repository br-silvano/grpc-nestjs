import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.registerAsync([
      {
        name: 'HELLO_WORLD_SERVICE',
        useFactory: () => ({
          transport: Transport.GRPC,
          options: {
            url: process.env.GRPC_HOST_HELLO_WORLD,
            package: 'hello',
            protoPath: join(__dirname, 'protos/hello-world.proto'),
          },
        }),
      },
      {
        name: 'CUSTOM_HELLO_SERVICE',
        useFactory: () => ({
          transport: Transport.GRPC,
          options: {
            url: process.env.GRPC_HOST_CUSTOM_HELLO,
            package: 'customHello',
            protoPath: join(__dirname, 'protos/custom-hello.proto'),
          },
        }),
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
