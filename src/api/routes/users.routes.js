const Router = require('express').Router();
const jwt = require('../../utils/jwt');

Router.get('/login', (req, res) => {
  // const { email, password } = req.body;

  // verificar se o usuario existe e se a senha esta correta
  // se sim, retornar id, nome de usuário, email dentro do payload do token

  const token = jwt.generateToken();

  res.status(200).json({ token });
});

Router.get('/', (req, res) => {
  res.send('Hello Users!');
});

module.exports = Router;
