import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthorizedUser, CustomToken, TokenService } from './token.service';

@Controller('/api/v1/token')
export class TokenController {

  constructor(private readonly tokenService: TokenService) {}

  @Post('/createCustomToken')
  async createCustomToken(@Req() request: Request): Promise<CustomToken> {
    const user: AuthorizedUser = request['user'];
    return this.tokenService.createCustomToken(user);
  }

}
