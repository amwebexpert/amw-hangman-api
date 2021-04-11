import { Controller, Inject, Post } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { CustomToken, TokenService } from './token.service';

@Controller('/api/v1/token')
export class TokenController {

  constructor(
    @Inject(REQUEST) private readonly request: Request,
    private readonly tokenService: TokenService,
  ) {
  }

  @Post('/createCustomToken')
  async createCustomToken(): Promise<CustomToken> {
    return this.tokenService.createCustomToken(this.request);
  }

}
