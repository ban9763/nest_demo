import { Controller, Get, Req } from '@nestjs/common';

@Controller('/api')
export class UserController {
  constructor() {}

  @Get('/user')
  getHello(@Req() req): string {
    console.log('hello 收到请求',req.params)
    return '获取用户11'
  }

}
