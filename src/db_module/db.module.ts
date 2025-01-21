import { Global, Module } from '@nestjs/common';
import { DbController } from './db.controller';
import { DbService } from './db.service';

@Global()
@Module({
  imports: [], // 我这个模块需要引入的其他模块的服务
  controllers: [DbController], // 我提供那些路由服务
  providers: [DbService], // 我自己使用的那些服务
  exports: [DbService], // 我要提供出去那些服务
})
export class DbModule {}
