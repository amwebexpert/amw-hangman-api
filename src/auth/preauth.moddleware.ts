import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as firebase from 'firebase-admin';
import firebase_params from './firebaseServiceAccount';

@Injectable()
export class PreauthMiddleware implements NestMiddleware {

    private defaultApp: any;

    constructor() {
        this.defaultApp = firebase.initializeApp({
            credential: firebase.credential.cert(firebase_params),
        });
    }

    use(req: Request, res: Response, next: Function) {
        const token = req.headers.authorization;

        if (!token || token.trim().length === 0) {
            next();
            return;
        }

        const tokenToVerify = token.replace('Bearer ', '');
        this.defaultApp.auth().verifyIdToken(tokenToVerify)
            .then(decodedToken => {
                console.log('Token utilisateur OK', decodedToken);
                const user = {
                    email: decodedToken.email
                }
                req['user'] = user;
                next();
            }).catch(error => {
                console.error(error);
                this.accessDenied(req.url, res);
            });
    }

    private accessDenied(url: string, res: Response) {
        res.status(403).json({
            statusCode: 403,
            timestamp: new Date().toISOString(),
            path: url,
            message: 'Access Denied'
        });
    }
}
