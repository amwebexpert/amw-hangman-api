import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiCategory } from './categories-types';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {

    constructor(
        @InjectRepository(Category)
        private repository: Repository<Category>,
    ) { }

    findAll(): Promise<Category[]> {
        return this.repository.find();
    }

    findOne(uuid: string): Promise<Category> {
        return this.repository.findOne({ uuid });
    }

    create(category: Category): Promise<Category> {
        const createdElement = this.repository.create(category);
        return Promise.resolve(createdElement);
    }

    async update(category: Category): Promise<Category> {
        const originalCategory = await this.findOne(category.uuid);
        const updatedCategory = await this.repository.save({ ...originalCategory, ...category }); // TODO Revisit this approach, not sure it's the best way...
        return Promise.resolve(updatedCategory);
    }

    async remove(uuid: string): Promise<void> {
        await this.repository.delete({ uuid });
    }

}
