'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      chat_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lang: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      settings: {
        type: Sequelize.JSONB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};