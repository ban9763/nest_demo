import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log('中间件 logger之前');
    next(); // 逻辑部分的处理
    // 一般使用控制response的 http status
    // 给浏览器setCookie
    res.status(500);
    // console.log('中间件 logger之后', res.statusCode);
  }
}
