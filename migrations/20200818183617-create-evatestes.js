'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('EVAtestes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPaciente: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      AQ1: {
        type: Sequelize.INTEGER
      },
      AQ2: {
        type: Sequelize.INTEGER
      },
      BQ1: {
        type: Sequelize.INTEGER
      },
      BQ2: {
        type: Sequelize.INTEGER
      },
      NomeProfissionalAvaliacao: {
        type: Sequelize.STRING
      },
      NumeroConselho: {
        type: Sequelize.STRING
      },
      Profissao: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('EVAtestes');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
