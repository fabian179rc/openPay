const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticateUser(req, res) {
  const { username, password } = req.body;
  // Aquí debe implementar la lógica de autenticación para verificar las credenciales del usuario

  // Si las credenciales son válidas, generamos un token
  const token = jwt.sign({ username }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });

  // Devolvemos el token en la respuesta
  res.json({ token });
}

module.exports = {
  authenticateUser,
};
