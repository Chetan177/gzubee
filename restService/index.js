
const logFile = "../log/guzbee.log";
const errorLogFile = "../log/error.log"
const winston = require("winston");
const { loggers } = require('winston')


loggers.add('guzbeeLogger', {
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "rest-service" },
  transports: [
    new winston.transports.File({ filename: errorLogFile, level: 'error' }),
    new winston.transports.File({ filename: logFile })],
});

const logger = loggers.get('guzbeeLogger')


// Modules
const express = require("express");
const bodyParser = require("body-parser");
const customMiddleware = require("./middleware/errorHandler");



// Config Constants
const defualtRoute = "/v01/";

// Variables
var app = express();

// Routes paths
const token = require("./routes/token");
const health = require("./routes/health");
const api = require("./routes/api")


// Middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// * Routes * //
app.get(defualtRoute + "health", health);
app.post(defualtRoute + "getAuthToken", token.getToken);
app.get(defualtRoute + "checkToken",token.authenticateToken,token.checkToken);

app.post(defualtRoute + "search/game", token.authenticateToken, api.SearchGame );


// Error handlers
app.use(customMiddleware.err404);
app.use(customMiddleware.err500);

// * Start * //
const PORT = process.env.PORT || 3000;
var paths = []

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
  app._router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
      paths.push(r.route.path);
    }
  });

  logger.info(`API paths loaded ${paths}`)
  console.info(paths)
});
