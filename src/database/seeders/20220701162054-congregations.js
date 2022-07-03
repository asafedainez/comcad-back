'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('congregations',
    [
      {
        id: 1,
        name: 'Catedral do Amor',
        addressId: 1,
        shepherd: 'Heder Pains',
        region: '2',
      },
      {
        id: 2,
        name: 'Monte Sião Quadra 303',
        addressId: 2,
        shepherd: '',
        region: '2',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('congregations', null, {});
  }
};
