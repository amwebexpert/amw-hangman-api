import { Injectable } from '@nestjs/common';
const pkginfo = require('pkginfo')(module, 'version', 'description', 'author');
const {version, description, author} = module.exports;

@Injectable()
export class AppService {

  home(): string {
    return `${description} v${version}, by ${author}`;
  }

}
