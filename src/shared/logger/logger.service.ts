import { Injectable, Optional } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Injectable()
export class LoggerService {
  constructor(private readonly config: ConfigService){}
  info(msg: string) {
    console.log(msg);
  }
}
