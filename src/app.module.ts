import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [AboutModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService, CategoriesService],
})
export class AppModule {}
