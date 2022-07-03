'use strict';
const { MD5 } = require('crypto-js');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
    [
      {
        id: 1,
        name: 'Asafe Dainez',
        email: 'asafedainez@outlook.com',
        password: MD5('123456').toString(),
        phone: '61 9 9366-9292',
        congregation: 1,
        role: 'admin',
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Abner Soares',
        email: 'abnerssoares@hotmail.com',
        password: MD5('123456').toString(),
        phone: '61 9 9161-9452',
        congregation: 1,
        role: 'admin',
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
