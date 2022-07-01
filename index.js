require('dotenv').config();
const app = require('./src/api');

const { API_PORT } = process.env;

app.get('/', (req, res) => {
  res.send('Estamos ON!');
});

app.listen(API_PORT, () => {
  console.log(`Server rodando na porta ${API_PORT}`);
});
