import { HttpStatus, Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { TokenService } from './token.service';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
    private readonly logger = new Logger(TokenMiddleware.name);

    constructor(private readonly tokenService: TokenService) {
    }

    use(request: Request, response: Response, next: Function) {
        const token = request.headers.authorization;

        if (!token || token.indexOf(' ') === -1) {
            next();
            return; // No bearer token, nothing to verify
        }

        // "Bearer xyz" ===> "xyz"
        const tokenToVerify = token.split(' ')[1];

        this.logger.log(`Token verification of incoming request ${request.socket.remoteAddress}`);
        this.tokenService.verifyIdToken(tokenToVerify)
            .then(user => {
                request['user'] = user;
                next();
            })
            .catch(error => this.accessDenied(request.url, response, error));
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
