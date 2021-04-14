import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/categories/category.entity';
import { Text } from './text.entity';
import { TextsController } from './texts.controller';
import { TextsService } from './texts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Text])],
  controllers: [TextsController],
  providers: [TextsService]
})
export class TextsModule {}
