const httpStatus = require('../../utils/httpStatus');
const jwt = require('../../utils/jwt');

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.split('Bearer ')[1];

  if (!token) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      status: httpStatus.UNAUTHORIZED,
      message: 'Token not found',
    });
  }

  jwt.verifyToken(token);

  next();
};

module.exports = authMiddleware;
