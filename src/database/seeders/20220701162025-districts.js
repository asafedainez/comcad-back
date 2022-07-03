'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('districts', 
    [
      {
        id: 1,
        name: 'Setor Tradicional',
        cityId: 11,
      },
      {
        id: 2,
        name: 'Centro',
        cityId: 11,
      },
      {
        id: 3,
        name: 'São Bartolomeu',
        cityId: 11,
      },
      {
        id: 4,
        name: 'Vila Nova',
        cityId: 11,
      },
      {
        id: 5,
        name: 'Vila do Boa',
        cityId: 11,
      },
      {
        id: 6,
        name: 'São José',
        cityId: 11,
      },
      {
        id: 7,
        name: 'Bela Vista',
        cityId: 11,
      },
      {
        id: 8,
        name: 'São Francisco',
        cityId: 11,
      },
      {
        id: 9,
        name: 'Bonsucesso',
        cityId: 11,
      },
      {
        id: 10,
        name: 'Residencial Oeste',
        cityId: 11,
      },
      {
        id: 11,
        name: 'Morro da Cruz',
        cityId: 11,
      },
      {
        id: 12,
        name: 'Residencial Vitória',
        cityId: 11,
      },
      {
        id: 13,
        name: 'Capão Comprido',
        cityId: 11,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('districts', null, {});
  }
};
