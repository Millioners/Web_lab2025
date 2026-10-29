import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): any { return this.appService.getHello(); }
  @Get('node')
  getViaProxy(): any { return { service: 'Nest.js', via: '/node/', variant: 24 }; }
}
