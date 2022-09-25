import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { LoggerService } from './logger.service';

@Global()
@Module({
  providers: [LoggerService],
  exports: [LoggerService],
  imports: [ConfigModule],
})
export class LoggerModule {}
