import { Controller, Get, Ip, Req } from '@nestjs/common';

@Controller('/api')
export class UserController {
  constructor() {}

  @Get('/user/:id')
  getHello(@Req() req, @Ip() ip): string {
    console.log('收到请求header', req.headers);
    console.log('收到请求params', req.params);
    console.log('收到请求body', req.body);
    console.log('收到请求ip', ip);
    return '获取用户11';
  }

  @Get('ab*cd')
  findAll() {
    return 'This route uses a wildcard';
  }
}
