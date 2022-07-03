'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
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
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      congregation: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'congregations',
          key: 'id',
        },
      },
      role: {
        type: Sequelize.ENUM,
        values: ['user', 'coordinator','admin'],
        allowNull: false,
        defaultValue: 'user',
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
