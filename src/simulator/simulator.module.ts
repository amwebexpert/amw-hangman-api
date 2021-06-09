import { Module } from '@nestjs/common';
import { SimulatorController } from './simulator.controller';

@Module({
  providers: [],
  controllers: [SimulatorController]
})
export class SimulatorModule {}
