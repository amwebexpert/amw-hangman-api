import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
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

    async create(category: Partial<Category>): Promise<Category> {
        category.id = null;
        category.uuid = uuidv4();

        await this.repository.insert(category);
        return Promise.resolve(this.findOne(category.uuid));
    }

    async update(uuid: string, category: Partial<Category>): Promise<Category> {
        const originalCategory = await this.findOne(uuid);
        const updatedCategory = await this.repository.save({ 
            id: originalCategory.id,
            uuid,
            langcode: category.langcode,
            name: category.name,
            iconName: category.iconName,
         });
        return Promise.resolve(updatedCategory);
    }

    async remove(uuid: string): Promise<void> {
        await this.repository.delete({ uuid });
    }

}
