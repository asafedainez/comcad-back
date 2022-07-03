'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
/*     await queryInterface.createTable('roles', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.ENUM,
        values: ['user', 'coordinator','admin'],
        allowNull: false,
      },
    }); */
  },

  async down (queryInterface, Sequelize) {
    /* await queryInterface.dropTable('roles'); */
  }
};
