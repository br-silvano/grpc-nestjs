/* eslint-disable */
export const protobufPackage = "customHello";

export interface CustomHelloReq {
  data: string;
}

export interface CustomHello {
  reply: string;
}

export interface CustomHelloService {
  GetCustomHello(request: CustomHelloReq): Promise<CustomHello>;
}
