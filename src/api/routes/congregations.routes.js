const Router = require('express').Router();

const controller = require('../controllers/congregations.controller');

Router.get('/', controller.getAllCongregations);
Router.get('/:id', controller.getCongregationById);
Router.post('/', controller.createCongregation);
Router.put('/:id', controller.updateCongregation);
Router.delete('/:id', controller.deleteCongregation);

module.exports = Router;
