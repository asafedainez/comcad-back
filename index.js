require('dotenv').config();
const api = require('./src/api');

const { API_PORT } = process.env;

api.get('/', (req, res) => {
  res.send('Estamos ON!');
});

api.listen(API_PORT, () => {
  console.log(`Server rodando na porta ${API_PORT}`);
});
