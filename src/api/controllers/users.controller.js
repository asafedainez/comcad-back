const httpStatus = require('../../utils/httpStatus');
const service = require('../services/users.service');

const getAllUsers = async (req, res) => {
  const users = await service.getAll();

  return res.status(httpStatus.OK).json(users);
};

const getUserById = async (req, res) => {
  const user = await service.getById(req.params.id);

  return res.status(httpStatus.OK).json(user);
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userDataWithToken = await service.create({ name, email, password });

  return res.status(httpStatus.OK).json(userDataWithToken);
};

const updateUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userUpdated = await service.update(req.params.id, { name, email, password });

  return res.status(httpStatus.OK).json(userUpdated);
};

const deleteUser = async (req, res) => {
  const userDeleted = await service.delete(req.params.id);

  return res.status(httpStatus.NO_CONTENT).json(userDeleted);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
