import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

require('pkginfo')(module, 'name', 'version', 'description', 'author');
const { name, version, description } = module.exports;

@Injectable({ scope: Scope.REQUEST })
export class AboutService {

    constructor(@Inject(REQUEST) private readonly request: Request) {
    }

    public getAboutInfo(): AboutDto {
        const user = this.request['user'];
        const currentUser = user ? user.email : 'NA - Unauthenticated';

        const aboutInfo: AboutDto = {
            name,
            version,
            description,
            currentUser
        };

        return aboutInfo;
    }

}
