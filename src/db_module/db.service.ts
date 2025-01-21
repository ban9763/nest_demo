import { Injectable } from '@nestjs/common';
// 依赖注入
@Injectable()
export class DbService {
  getDb(): string {
    return '这里是db';
  }
}
