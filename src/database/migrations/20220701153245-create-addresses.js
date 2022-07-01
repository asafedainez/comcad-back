'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      district: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'districts',
          key: 'id',
        },
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true,
      },      
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('addresses');
  }
};
