import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db_module/db.module';
import { UserModule } from './user_module/user.module';
import { UserService } from './user_module/user.service';

@Module({
  imports: [UserModule, DbModule], // 我这个模块需要引入的其他模块的服务
  controllers: [AppController], // 我提供那些路由服务
  providers: [
    AppService,
    // {
    //   provide: 'userService',
    //   useClass: UserService,
    // },
    {
      provide: 'config',
      useValue: {
        port: 3000,
        password: '123456',
        secret: '4567890qwrewr',
        aaa: '567890-s',
      },
    },
    {
      provide: 'app_config',
      useFactory: function () {
        // 工厂函数，根据不同情况可以返回不同的配置选项
        // 动态配置
        return {
          port: 3000,
          password: '1234ffff',
        };
      },
    },
  ], // 我自己使用的那些服务
  exports: [], // 我要提供出去那些服务
})
export class AppModule {}
