import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): any {
    return { service: 'Nest.js Variant 24', status: 'works on 8002' };
  }
}
