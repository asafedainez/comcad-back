'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('addresses',
    [
      {
        id: 1,
        address: 'Av. Comercial',
        districtId: 1,
        number: '123',
        complement: null,
      },
      {
        id: 2,
        address: 'Quadra 303 Conjunto 06 Lote 06',
        districtId: 10,
        number: '06',
        complement: null,
      },
    ], {});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('addresses', null, {});
  }
};
