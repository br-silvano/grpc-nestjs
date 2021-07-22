import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CustomHelloReq } from './infrastructure/grpc/protofile/custom-hello';

@Controller()
export class AppController {
  @GrpcMethod('CustomHelloService', 'GetCustomHello')
  getCustomHello(data: CustomHelloReq) {
    return { reply: `Hello ${data.data}!` };
  }
}
