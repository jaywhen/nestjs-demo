import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  getFilename() {
    return '../../test';
  }
}
