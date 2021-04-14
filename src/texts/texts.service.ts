import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/category.entity';
import { Repository } from 'typeorm';
import { Text } from './text.entity';

@Injectable()
export class TextsService {

    constructor(
        @InjectRepository(Category) private categoriesRepo: Repository<Category>,
        @InjectRepository(Text) private repository: Repository<Text>,
    ) { }

    async findByCategory(uuid: string): Promise<Text[]> {
        const category = await this.categoriesRepo.findOne({ uuid });
        return this.repository.find({ categoryid: category.id });
    }

}
