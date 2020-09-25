const joi = require("joi");

const ModelSearchGame = joi.object({
  name: joi.string().alphanum().min(3).max(30).required(),

  store: joi.string().alphanum().min(3).max(20),

  platform: joi.string().alphanum().min(2).max(20),

  genre: joi.string().alphanum().min(2).max(20)
});


module.exports = {SearchGame : ModelSearchGame}

// SearchGame.validate({ name: 'GTA', store: "Steam" });

// console.log(SearchGame.validate({ name: '', store: "Steam" }));
