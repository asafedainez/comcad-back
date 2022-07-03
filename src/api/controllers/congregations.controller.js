const httpStatus = require('../../utils/httpStatus');
const service = require('../services/congregations.service');

const getAllCongregations = async (req, res) => {
  const congregations = await service.getAllCongregations();

  return res.status(httpStatus.OK).json(congregations);
};

const getCongregationById = async (req, res) => {
  const congregation = await service.getCongregationById(req.params.id);

  return res.status(httpStatus.OK).json(congregation);
};

const createCongregation = async (req, res) => {
  const {
    name, address, shepherd, region,
  } = req.body;

  const congregationDataWithToken = await service.createCongregation({
    name, address, shepherd, region,
  });

  return res.status(httpStatus.OK).json(congregationDataWithToken);
};

const updateCongregation = async (req, res) => {
  const {
    name, address, shepherd, region,
  } = req.body;

  const congregationUpdated = await service.update(req.params.id, {
    name, address, shepherd, region,
  });

  return res.status(httpStatus.OK).json(congregationUpdated);
};

const deleteCongregation = async (req, res) => {
  const congregationDeleted = await service.delete(req.params.id);

  return res.status(httpStatus.NO_CONTENT).json(congregationDeleted);
};

module.exports = {
  getAllCongregations,
  getCongregationById,
  createCongregation,
  updateCongregation,
  deleteCongregation,
};
