const dotenv = require("dotenv");
dotenv.config();

const secret = process.env.TOKEN_SECRET;

function generateAccessToken(username) {
  return jwt.sign(username, secret, { expiresIn: "1800s" });
}

module.exports = function (req, res) {
  const token = generateAccessToken({ username: req.body.username });
  res.json({
    msg: "Access Token Generated",
    token: token,
    user: username,
  });
};
