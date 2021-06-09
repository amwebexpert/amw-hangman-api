import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';

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
  
}
