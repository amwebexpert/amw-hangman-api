import { Injectable } from '@nestjs/common';
import { version, description, author } from '../package.json';

@Injectable()
export class AppService {

  home(): string {
    return `${description} v${version}, by ${author}`;
  }

}
