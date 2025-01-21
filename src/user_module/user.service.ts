import { Injectable } from '@nestjs/common';
// 依赖注入
@Injectable()
export class UserService {
  getUser(): string {
    return 'User获取james';
  }
}
