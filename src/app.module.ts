import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AboutModule } from './about/about.module';
import { databaseConfigs } from './app.configurations';
import { CategoriesModule } from './categories/categories.module';
import { TokenController } from './token/token.controller';
import { TokenMiddleware } from './token/token.moddleware';
import { TokenService } from './token/token.service';


@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
    TypeOrmModule.forRoot(databaseConfigs),
    AboutModule,
    CategoriesModule,
  ],
  controllers: [TokenController],
  providers: [TokenService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware).forRoutes({
      path: '*', method: RequestMethod.ALL
    });
  }

}
