import { Get, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { response } from 'express';

type CustomTokenResponse = { customToken: string };

@Controller('/simulator/service-espace-client')
export class SimulatorController {
    @Get('/auth/api/external-secured/2fa')
    simulationSecretQuestion(): any {
        return {
            lockStatus: 'OK',
            remainingTriesNumber: 3,
            question: {
                textEn: 'Simulation - What is your favorite colour?',
                textFr: 'Simulation - Quelle est votre couleur préférée?',
                questionId: 1,
            },
        };
    }

    @Post('/api/v1/portal/custom-token')
    simulationCustomToken(): CustomTokenResponse {
      const response: CustomTokenResponse = {
        customToken: 'Simulated BE response for [/api/v1/portal/custom-token] call',
      }

      return response;
    }
}
