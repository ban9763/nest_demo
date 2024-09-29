import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';


@Module({
  imports: [], // 我这个模块需要引入的其他模块的服务
  controllers: [UserController], // 我提供那些路由服务
  providers: [UserService], // 我自己使用的那些服务
  exports: [] // 我要提供出去那些服务
})
export class UserModule {}