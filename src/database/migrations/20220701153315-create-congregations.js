'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('congregations', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      addressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'addresses',
          key: 'id',
        },
      },
      shepherd: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      region: {
        type: Sequelize.ENUM,
        values: ['1', '2', '3', '4', '5', '6'],
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('congregations');
  }
};
