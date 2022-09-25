import { resolve } from "path";

const baseLogPath=resolve(__dirname,'../../logs');//日志要写入哪个目录

const log4jsConfig = {
  appenders: {
    console:{
      type:'console',//打印到控制台
    },
    infoFile: {
      type: 'dateFile',

      // logs/info/info.2022-09-26-00-55.log
      filename: `${baseLogPath}/info/info.log`,
      alwaysIncludePattern: true,

      // 内容
      layout: {
        type: 'pattern',
        // log file 里面的内容 data 为外部传入数据 log message 可以在此处打印
        pattern: '{"date":"%d","level":"%p","category":"%c","host":"%h","data":\'%m\'}',
      },

      // 日志文件按分钟切割
      pattern: 'yyyy-MM-dd-hh-mm',

      daysToKeep: 60,
      // maxLogSize: 10485760,
      numBackups: 3,
      keepFileExt: true,
    },
    errorFile: {
      type: 'dateFile',

      // logs/error/error.2022-09-26-00-55.log
      filename: `${baseLogPath}/error/error.log`,
      alwaysIncludePattern: true,

      // 内容
      layout: {
        type: 'pattern',
        // log file 里面的内容 data 为外部传入数据 log message 可以在此处打印
        pattern: '{"date":"%d","level":"%p","category":"%c","host":"%h","data":\'%m\'}',
      },

      // 日志文件按分钟切割
      pattern: 'yyyy-MM-dd-hh-mm',

      daysToKeep: 60,
      // maxLogSize: 10485760,
      numBackups: 3,
      keepFileExt: true,
    },
    errors: {
      type: 'logLevelFilter',
      level: 'ERROR',
      appender: 'errorFile',
    },
    infos: {
      type: 'logLevelFilter',
      level: 'INFO',
      appender: 'infoFile',
    },
  },
  categories: {
    default: {
      appenders: ['console'],
      level: 'DEBUG',
    },
    info: { appenders: ['console', 'infos'], level: 'info' },
    error: { appenders: ['console', 'errors'], level: 'error' },
  },
}

export default log4jsConfig;