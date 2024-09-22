import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('hello 收到请求')
    return this.appService.getHello();
  }

  @Get('/boy')
  getBoy():string{
    console.log('boy 收到消息');
    return this.appService.getBoy();
  }
}
