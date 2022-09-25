import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './shared/logger/logger.module';
import { ConfigModule } from './shared/config/config.module';

@Module({
  imports: [LoggerModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
