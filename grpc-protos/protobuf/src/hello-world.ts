/* eslint-disable */
export const protobufPackage = "hello";

export interface HelloWorldReq {}

export interface HelloWorld {
  reply: string;
}

export interface HelloWorldService {
  GetHelloWorld(request: HelloWorldReq): Promise<HelloWorld>;
}
