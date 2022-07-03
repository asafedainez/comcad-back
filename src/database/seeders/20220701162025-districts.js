'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('districts', 
    [
      {
        id: 1,
        name: 'Setor Tradicional',
        city: 11,
      },
      {
        id: 2,
        name: 'Centro',
        city: 11,
      },
      {
        id: 3,
        name: 'São Bartolomeu',
        city: 11,
      },
      {
        id: 4,
        name: 'Vila Nova',
        city: 11,
      },
      {
        id: 5,
        name: 'Vila do Boa',
        city: 11,
      },
      {
        id: 6,
        name: 'São José',
        city: 11,
      },
      {
        id: 7,
        name: 'Bela Vista',
        city: 11,
      },
      {
        id: 8,
        name: 'São Francisco',
        city: 11,
      },
      {
        id: 9,
        name: 'Bonsucesso',
        city: 11,
      },
      {
        id: 10,
        name: 'Residencial Oeste',
        city: 11,
      },
      {
        id: 11,
        name: 'Morro da Cruz',
        city: 11,
      },
      {
        id: 12,
        name: 'Residencial Vitória',
        city: 11,
      },
      {
        id: 13,
        name: 'Capão Comprido',
        city: 11,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('districts', null, {});
  }
};
