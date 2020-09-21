const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");


dotenv.config();

const secret = process.env.TOKEN_SECRET;

function generateAccessToken(username) {
  var signOptions = {
    expiresIn:  "30m"
   };

  newToken = jwt.sign(username, secret, signOptions)
  return newToken;
}

authenticateToken = function (req, res, next) {
  // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401) 

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next() // pass the execution off to whatever request the client intended
  })
}

getToken = function (req, res) {
  res.status(200);
  user = {username : req.body.username}
  const token = generateAccessToken(user);
  res.json({
    msg: "Access Token Generated",
    token: token,
    user: user.username,
  });
};

module.exports = {getToken: getToken, authenticateToken: authenticateToken}
