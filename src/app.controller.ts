import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user_module/user.service';

@Controller('/api')
export class AppController {
  // 1. 第一种注入方式
  constructor(
    private readonly appService: AppService,
    @Inject('userService') private readonly userService: UserService,
    @Inject('config') private readonly config: any,
    @Inject('app_config') private readonly app_config: any,
  ) {}

  // 2. 第一种注入方式
  // private readonly appService: AppService;
  // constructor(appService: AppService) {
  //   this.appService = appService;
  // }

  @Get()
  getHello(): string {
    return 'app的服务123';
  }

  @Get('/objectUser')
  getUserService(): string {
    console.log('config', this.config);
    console.log('app_config', this.app_config);
    return this.userService.getUser();
  }
}
