// Modules
// TODO Unified
var winston = require("winston");
const logFile = "../../log/guzbee.log"
var logger = winston.createLogger({
    format: winston.format.json(),
    defaultMeta: { service: 'rest-service' },
    transports: [
      new winston.transports.File({ filename: logFile }),
    ],
  });

error404 = function (req, res, next) {
  res.status(404);
  logger.info("Error in request ");
  res.json({
    error: "Not found",
  });
  return;
};

error500 = function (err, req, res, next) {
  res.status(err.status || 500);
  logger.error("%s %d %s", req.method, res.statusCode, err.message);
  res.json({
    error: err.message,
  });
  return;
};

module.exports = { err404: error404, err500: error500 };
