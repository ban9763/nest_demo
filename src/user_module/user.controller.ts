import { Controller, Get, Ip, Req } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('/api')
export class UserController {
  constructor(private readonly app_service: AppService) {}

  @Get('/user/:id')
  getHello(@Req() req, @Ip() ip): string {
    console.log('收到请求header', req.headers);
    console.log('收到请求params', req.params);
    console.log('收到请求body', req.body);
    console.log('收到请求ip', ip);
    return '获取用户11';
  }

  // 路由路径 'ab*cd' 将匹配 abcd 、ab_cd 、abecd 等。字符 ? 、+ 、 * 以及 () 是它们的正则表达式对应项的子集。
  // 连字符（-） 和点（.）
  @Get('ab*cd')
  findAll() {
    return 'This route uses a wildcard';
  }

  @Get('/appData')
  getAppData() {
    return this.app_service.getHello();
  }
}
