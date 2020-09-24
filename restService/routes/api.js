const joi = require("joi")
const { loggers } = require('winston')
const logger = loggers.get('guzbeeLogger')

const model = require("./models/models")



searchGame = async function (req, res) {

  try {
    const i = await model.SearchGame.validateAsync(req.body);
    
}
catch (error) {
  console.log(error);
  logger.error(`validation error, ${req.path},  ${error}`);
  res.status(400)
  return res.json({
    msg: error.message,
  });
 }

  
}





module.exports = {SearchGame: searchGame}