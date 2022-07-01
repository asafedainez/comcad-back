const httpStatus = require('../utils/http-status');

const errorMiddleware = (err, req, res, _next) => {
  res
    .status(err.status || httpStatus.INTERNAL_SERVER_ERROR)
    .send({ message: err.message } || 'Internal Server Error');
};

module.exports = errorMiddleware;
