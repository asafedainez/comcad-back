'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cities', 
    [
      {
        id: 1,
        name: 'Ceilândia',
      },
      {
        id: 2,
        name: 'Samambaia',
      },
      {
        id: 3,
        name: 'Plano Piloto',
      },
      {
        id: 4,
        name: 'Taguatinga',
      },
      {
        id: 5,
        name: 'Planaltina',
      },
      {
        id: 6,
        name: 'Guará',
      },
      {
        id: 7,
        name: 'Gama',
      },
      {
        id: 8,
        name: 'Recanto das Emas',
      },
      {
        id: 9,
        name: 'Santa Maria',
      },
      {
        id: 10,
        name: 'Águas Claras',
      },
      {
        id: 11,
        name: 'São Sebastião',
      },
      {
        id: 12,
        name: 'Riacho Fundo II',
      },
      {
        id: 13,
        name: 'Sol Nascente',
      },
      {
        id: 14,
        name: 'Sobradinho II',
      },
      {
        id: 15,
        name: 'Sobradinho I',
      },
      {
        id: 16,
        name: 'Vicente Pires',
      },
      {
        id: 17,
        name: 'Paranoá',
      },
      {
        id: 18,
        name: 'Itapoã',
      },
      {
        id: 19,
        name: 'Sudeste/Octogonal',
      },
      {
        id: 20,
        name: 'Brazlândia',
      },
      {
        id: 21,
        name: 'Jardim Botânico',
      },
      {
        id: 22,
        name: 'Riacho Fundo I',
      },
      {
        id: 23,
        name: 'Arniqueira',
      },
      {
        id: 24,
        name: 'Lago Norte',
      },
      {
        id: 25,
        name: 'SIA',
      },
      {
        id: 26,
        name: 'Cruzeiro',
      },
      {
        id: 27,
        name: 'Lago Sul',
      },
      {
        id: 28,
        name: 'Núcleo Bandeirante',
      },
      {
        id: 29,
        name: 'Parque Way',
      },
      {
        id: 30,
        name: 'Candangolândia',
      },
      {
        id: 31,
        name: 'Varjão',
      },
      {
        id: 32,
        name: 'Fercal',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cities', null, {});
  }
};
