import { Controller, Get, Inject, Optional, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './http/exception.filter';
import { ForbiddenException } from './http/forbiddenException';
import { UserService } from './user_module/user.service';

@Controller('/api')
@UseFilters(new HttpExceptionFilter()) // 第二种：指定controller生效异常过滤器
export class AppController {
    // 1. 第一种注入方式
    constructor(
        private readonly appService: AppService,
        // optional: 服务要使用，但是不确定是否注入时，使用 optional修饰
        // 可以保障业务的正常进行
        @Optional()
        @Inject('userService')
        private readonly userService: UserService,
        @Inject('config') private readonly config: any,
        @Inject('app_config') private readonly app_config: any,
    ) {}

    // 2. 第一种注入方式
    // private readonly appService: AppService;
    // constructor(appService: AppService) {
    //   this.appService = appService;
    // }

    @Get()
    @UseFilters(new HttpExceptionFilter()) // 第一种：指定接口位置生效异常过滤器
    getHello(): string {
        const Random = Math.random();
        if (Random > 0.5) {
            return '大于0.5';
        } else {
            throw new ForbiddenException('禁止访问');
        }
        // console.log('路由逻辑');
        // const a: any = {};
        // return a.a.a.a;
    }

    @Get('/objectUser')
    getUserService(): string {
        const service = this.userService
            ? this.userService
            : { getUser: () => '读取失败' };

        console.log('config', this.config);
        console.log('app_config', this.app_config);
        return service.getUser();
    }

    // @Get(':id')
    // getHello(@Param('id'))
}
