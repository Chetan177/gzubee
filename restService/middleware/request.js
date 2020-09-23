const request = require("request");

const logger = loggers.get("guzbeeLogger");

request("https://api.rawg.io/api/genres", function (error, response, body) {
  const obj = JSON.parse(body);

  logger.error(`request error`);
  genre = obj.results;
  genre.forEach((element) => console.log(element.name, ":", element.id, ","));
});

function GetRequest(url) {
  var obj;
  request(url, function (error, response, body) {
    obj = JSON.parse(body);

    logger.error(`GET request error ${error}, ${response}`);
  });
  return obj;
}

module.exports = { GetRequest: GetRequest };
