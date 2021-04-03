import { Controller, Get } from '@nestjs/common';
import { ApiCategory } from './categories-types';
import { CategoriesService } from './categories.service';

@Controller('/api/v1/categories')
export class CategoriesController {

    constructor(private readonly categoriesServcie: CategoriesService) {
    }

    // const url = `${categoriesUrl}/${selectedCategoryUuid}/texts`;
    @Get()
    public listCategories(): ApiCategory[] {
        return this.categoriesServcie.listCategories();
    }

}
