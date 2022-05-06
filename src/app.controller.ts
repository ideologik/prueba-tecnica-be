import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('simulators')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSimulators(): any[] {
    return this.appService.getSimulators();
  }
}
