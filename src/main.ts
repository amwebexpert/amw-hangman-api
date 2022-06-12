import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import morganMiddleware from './utils/morgan.middleware';
import swaggerConfigs from './utils/swagger.configs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Swagger setup
  const document = SwaggerModule.createDocument(app, swaggerConfigs);
  SwaggerModule.setup('api', app, document);

  // HTTP loggin
  app.use(morganMiddleware);

  // Start the app
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
