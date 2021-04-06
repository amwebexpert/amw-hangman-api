import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { CategoryDto } from './dto/category-dto';

@Controller('/api/v1/categories')
export class CategoriesController {

    constructor(private readonly categoriesServcie: CategoriesService) {
    }

    // const url = `${categoriesUrl}/${selectedCategoryUuid}/texts`;
    @Get()
    async findAll(): Promise<Category[]> {
        return this.categoriesServcie.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() category: CategoryDto): Promise<Category> {
        return this.categoriesServcie.create(category);
    }

    @Get(':uuid')
    async findOne(@Param('uuid') uuid: string): Promise<Category> {
        return this.categoriesServcie.findOne(uuid);
    }

    @Put(':uuid')
    @UsePipes(new ValidationPipe())
    update(@Param('uuid') uuid: string, @Body() category: CategoryDto): Promise<Category> {
        return this.categoriesServcie.update(uuid, category);
    }

    @Delete(':uuid')
    delete(@Param('uuid') uuid: string): Promise<void> {
        return this.categoriesServcie.remove(uuid);
    }

}
