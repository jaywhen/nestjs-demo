import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from './shared/logger/logger.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly logger: LoggerService) {}

  @Get()
  getHello(): string {
    this.logger.info('hihihi');
    return this.appService.getHello();
  }
}
