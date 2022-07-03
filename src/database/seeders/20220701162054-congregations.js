'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('congregations',
    [
      {
        id: 1,
        name: 'Catedral do Amor',
        address: 1,
        shepherd: 'Heder Pains',
        region: '2',
      },
      {
        id: 2,
        name: 'Monte Sião Quadra 303',
        address: 2,
        shepherd: 'Heder Pains',
        region: '2',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('congregations', null, {});
  }
};
