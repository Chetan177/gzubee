const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const { loggers } = require('winston')

const logger = loggers.get('guzbeeLogger')

dotenv.config();

const secret = process.env.TOKEN_SECRET;

function generateAccessToken(username) {
  var signOptions = {
    expiresIn:  "30m"
   };
  
  newToken = jwt.sign(username, secret, signOptions)
  logger.info(`New token generated for user: ${username.username} token: ${newToken}`)
  return newToken;
}

authenticateToken = function (req, res, next) {
  
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401) 

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    logger.error(`Token verification error: ${err}`)
    if (err) return res.sendStatus(403)
    req.user = user
    next() 
  })
}

getToken = function (req, res) {
  res.status(200);
  user = {username : req.body.username}
  token = generateAccessToken(user);
  res.json({
    msg: "Access Token Generated",
    token: token,
    user: user.username,
  });
};

module.exports = {getToken: getToken, authenticateToken: authenticateToken}
