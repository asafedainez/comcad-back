require('express-async-errors');
const express = require('express');

const middleware = require('./middleware');
const routes = require('./routes');

const api = express();
api.use(express.json());

api.use('/users', routes.users);
api.use('/congregations', middleware.authMiddleware, routes.congregations);

api.use(middleware.errorMiddleware);

module.exports = api;
