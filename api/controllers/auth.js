const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticateUser(req, res) {
  const { username, password } = req.body;

  const token = jwt.sign({ username }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });

  res.json({ token });
}

module.exports = {
  authenticateUser,
};
