import { Controller, Get, Param } from '@nestjs/common';
import { Text } from './text.entity';
import { TextsService } from './texts.service';

@Controller('/api/v1/categories')
export class TextsController {

    constructor(private readonly service: TextsService) {
    }

    @Get('/:uuid/texts')
    async findAll(@Param('uuid') uuid: string): Promise<Text[]> {
        return this.service.findByCategory(uuid);
    }

}
