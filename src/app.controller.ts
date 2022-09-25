import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from './shared/logger/logger.service';
import Log4js from './config/log4js.config'
import { Logger } from './utils/log4js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly logger: LoggerService) {}


  @Get()
  getHello(): string {
    Logger.info('shishishis')
    Logger.error('error log')
    return this.appService.getHello();
  }
}
