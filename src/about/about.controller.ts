import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {

    constructor(private readonly aboutService: AboutService) {
    }

    @Get()
    about(): AboutDto {
      return this.aboutService.getAboutInfo();
    }
  
}
