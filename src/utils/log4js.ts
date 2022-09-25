import * as Log4js from 'log4js'
import log4jsConfig from 'src/config/log4js.config';

Log4js.configure(log4jsConfig)

// const logger = Log4js.getLogger();

export class Logger {
  static info(args) {
    console.log('in info log')
    // 此处写入数据库
    const logger = Log4js.getLogger('info');
    logger.info(args);
  }

  static error(args) {
    console.log('in error log')
    const logger = Log4js.getLogger('error')
    // 此处写入数据库
    logger.error(args);
  }
}
