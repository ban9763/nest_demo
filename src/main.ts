import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FuncMiddleware } from './middleware/func.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(FuncMiddleware);
  await app.listen(3000);
}
bootstrap();
