import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AboutModule } from './about/about.module';
import { databaseConfigs } from './app.configurations';
import { CategoriesModule } from './categories/categories.module';
import { TextsModule } from './texts/texts.module';
import { GlobalExceptionFilter } from './utils/global-exception.filter';


@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
    TypeOrmModule.forRoot(databaseConfigs),
    AboutModule,
    CategoriesModule,
    TextsModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    }
  ],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
  }

}
