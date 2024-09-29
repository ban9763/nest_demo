import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user/:id')
  getHello(@Req() req): string {
    console.log('hello 收到请求',req.params)
    return this.appService.getHello();
  }

  @Get('/boy/*/name/*')
  getBoy(@Req() req):string{
    console.log('boy 收到消息',req.params);
    return this.appService.getBoy();
  }
}
