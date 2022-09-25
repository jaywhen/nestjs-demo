import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Optional } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from './shared/config/config.service';
import { LoggerService } from './shared/logger/logger.service';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  private readonly config = new ConfigService();
  private readonly logger = new LoggerService(this.config);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.logger.info('in intercepter')
    return next.handle();
  }
}
