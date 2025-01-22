import { Injectable } from '@nestjs/common';
// 依赖注入
@Injectable()
export class AppService {
    getHello(): string {
        return 'App Hello World!';
    }
    getBoy(): string {
        return 'Hello boy!';
    }
}
