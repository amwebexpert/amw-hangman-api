import { HttpStatus, Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { TokenService } from './token.service';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
    private readonly logger = new Logger(TokenMiddleware.name);

    constructor(private readonly tokenService: TokenService) {
    }

    use(req: Request, res: Response, next: Function) {
        const token = req.headers.authorization;

        if (!token || token.trim().length === 0 || token.indexOf('Bearer ') !== 0) {
            next();
            return; // No bearer token, nothing to verify
        }

        const tokenToVerify = token.replace('Bearer ', '');

        this.tokenService.verifyIdToken(tokenToVerify)
            .then(user => {
                req['user'] = user;
                next();
            })
            .catch(error => this.accessDenied(req.url, res, error));
    }

    private accessDenied(requestUrl: string, response: Response, error: any) {
        this.logger.error('Token verification failed', error);

        response.status(HttpStatus.FORBIDDEN).json({
            statusCode: HttpStatus.FORBIDDEN,
            timestamp: new Date().toISOString(),
            path: requestUrl,
            message: 'Access Denied'
        });
    }
}
