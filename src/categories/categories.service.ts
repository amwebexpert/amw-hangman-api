import { Injectable } from '@nestjs/common';
import { ApiCategory } from './categories-types';

@Injectable()
export class CategoriesService {

    listCategories(): ApiCategory[] {
        return [];
    }

}
