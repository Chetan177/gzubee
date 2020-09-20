const winston = require('winston');

const logFile = "E:\\Project2020\\gzubee\\log\\guzbee.log"

var logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'rest-service' },
  transports: [
    new winston.transports.File({ filename: logFile }),
  ],
});

logger.info('Logger Initaited');

module.export =  logger