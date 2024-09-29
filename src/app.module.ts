import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user_module/user.module';

@Module({
  imports: [UserModule], // 我这个模块需要引入的其他模块的服务
  controllers: [AppController], // 我提供那些路由服务
  providers: [AppService], // 我自己使用的那些服务
  exports: [] // 我要提供出去那些服务
})
export class AppModule {}
