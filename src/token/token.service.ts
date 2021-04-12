import { Injectable, Logger } from "@nestjs/common";
import * as firebase from 'firebase-admin';
import serviceAccount from './firebaseServiceAccount';

export interface AuthorizedUser {
    uid: string;
    iss: string;
    sub: string;
    email?: string;
}

export interface CustomToken {
    customToken?: string;
}

@Injectable()
export class TokenService {
    private readonly logger = new Logger(TokenService.name);

    private readonly firebaseApp: firebase.app.App;

    constructor() {
        this.firebaseApp = firebase.initializeApp({
            credential: firebase.credential.cert(serviceAccount),
        });
    }

    async verifyIdToken(tokenToVerify: string): Promise<AuthorizedUser> {
        const decodedToken = await this.firebaseApp.auth().verifyIdToken(tokenToVerify);

        const user: AuthorizedUser = {
            uid: decodedToken.uid,
            iss: decodedToken.iss,
            sub: decodedToken.sub,
            email: decodedToken.email,
        };
        this.logger.log(`Token verified: ${JSON.stringify(user)}`);

        return user;
    }

    async createCustomToken(user?: AuthorizedUser): Promise<CustomToken> {
        if (!user) {
            // throw new UnauthorizedException();
            return {};
        }

        this.logger.log(`Creating custom token for ${JSON.stringify(user)}`);

        const customToken = await this.firebaseApp.auth().createCustomToken(user.uid);
        return { customToken };
    }

}
