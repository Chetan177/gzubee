// Modules
const { loggers } = require('winston')

const logger = loggers.get('guzbeeLogger')

error404 = function (req, res, next) {
  res.status(404);
  logger.error(`Error in request method: ${req.method} path: ${req.originalUrl}`);
  res.json({
    error: "Not found",
  });
  return;
};

error500 = function (err, req, res, next) {
  res.status(err.status || 500);
  logger.error( `Error in request method: ${req.method} path: ${req.originalUrl} status: ${res.statusCode} error: ${err.message}`);
  res.json({
    error: err.message,
  });
  return;
};

module.exports = { err404: error404, err500: error500 };
