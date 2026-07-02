const User = require("../../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.TOKEN_KEY || "supersecret_dev_token_key";

module.exports.userVerification = (req, res) => {
  const token = req.cookies?.token ||
    req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.json({ status: false });
  }

  jwt.verify(token, JWT_SECRET, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
};