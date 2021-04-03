import { Injectable } from '@nestjs/common';

require('pkginfo')(module, 'name', 'version', 'description', 'author');
const { name, version, description, author } = module.exports;

@Injectable()
export class AboutService {

    public getAboutInfo(): AboutDto {
        const aboutInfo: AboutDto = {
            name,
            version,
            description,
            author
        };

        return aboutInfo;
    }

}
