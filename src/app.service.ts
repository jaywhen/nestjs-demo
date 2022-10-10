import { Injectable } from '@nestjs/common';
import * as chalk from 'chalk';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(chalk.blue.bgGray('this is red string'))
    return 'Hello World!';
  }
}
