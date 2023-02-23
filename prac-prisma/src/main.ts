import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await useNestLifeCycle(app);

  await app.listen(3032);
}

async function useNestLifeCycle(app: INestApplication): Promise<void> {
  // Nest.js 생명주기에 맞춰 PrismaClient를 종료시키기 위해 설정합니다.
  const prismaService = await app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
}

bootstrap();
