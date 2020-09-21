const winston = require('winston');

// Modules
const express = require("express");
const bodyParser = require("body-parser");
const customMiddleware = require("./middleware/errorHandler")
// const logger = require("./middleware/log")

// Config Constants
const defualtRoute = "/v01/";
const logFile = "../log/guzbee.log"

// TODO Unified
var logger = winston.createLogger({
    format: winston.format.json(),
    defaultMeta: { service: 'rest-service' },
    transports: [
      new winston.transports.File({ filename: logFile }),
    ],
  });
  
// Variables
var app = express();

// Routes paths
const token = require("./routes/token");
const health = require("./routes/health")


// Middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// * Routes * //
app.get(defualtRoute+"health",health)
app.post("/getAuthToken/", token.getToken);


// Error handlers
app.use(customMiddleware.err404);
app.use(customMiddleware.err500);

// * Start * //
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running at port ${PORT}`);
  console.log(`Server running at port ${PORT}`);
  app._router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
      console.log(r.route.path);
    }
  });
});
