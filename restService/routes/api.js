const joi = require("joi");
const { loggers, error } = require("winston");
const logger = loggers.get("guzbeeLogger");

const c = require("./constants");

const model = require("./models/models");
const validator = require("../middleware/validator");


searchGame = async function (req, res) {
  try {
    const v = await validator.ValidateAPI(req, res, model.SearchGame);
    if (v != null) {
      logger.error(`validation error, ${req.path},  ${v.message}`);
      return res.json({
        msg: v.message,
      });
    }

    requestURL = generateURL(
      req.body.name,
      req.body.genre,
      req.body.platform,
      req.body.store
    );

    res.status(200);
    return res.json({
      msg: "sucesss",
      url: requestURL,
    });
  } catch (error) {
    console.log(error);
    logger.error(`error, ${req.path},  ${error.message}`);
    return res.json({
      msg: error.message,
    });
  }
};

function generateURL(name, genre, platform, store) {
  var url = c.URL + "?";
  if (name != "") {
    url = url + "search=" + name + "&";
  }
  if (platform != "") {
    url = url + "platform=";
    if (c.Platforms.has(platform)) {
      url = url + String(c.Platforms.get(platform));
    }
    url = url + "&";
  }
  if (store != "") {
    url = url + "store=";
    if (c.Store.has(store)) {
      url = url + String(c.Store.get(store));
    }
    url = url + "&";
  }

  if (genre != "") {
    url = url + "genre=";
    if (c.Genres.has(genre)) {
      url = url + String(c.Genres.get(genre));
    }
    url = url + "&";
  }

  return url;
}

module.exports = { SearchGame: searchGame };
