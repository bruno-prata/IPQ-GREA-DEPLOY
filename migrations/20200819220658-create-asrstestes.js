'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('ASRStestes', {
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
      AQ3: {
        type: Sequelize.INTEGER
      },
      AQ4: {
        type: Sequelize.INTEGER
      },
      AQ5: {
        type: Sequelize.INTEGER
      },
      AQ6: {
        type: Sequelize.INTEGER
      },
      AQ7: {
        type: Sequelize.INTEGER
      },
      AQ8: {
        type: Sequelize.INTEGER
      },
      AQ9: {
        type: Sequelize.INTEGER
      },
      BQ1: {
        type: Sequelize.INTEGER
      },
      BQ2: {
        type: Sequelize.INTEGER
      },
      BQ3: {
        type: Sequelize.INTEGER
      },
      BQ4: {
        type: Sequelize.INTEGER
      },
      BQ5: {
        type: Sequelize.INTEGER
      },
      BQ6: {
        type: Sequelize.INTEGER
      },
      BQ7: {
        type: Sequelize.INTEGER
      },
      BQ8: {
        type: Sequelize.INTEGER
      },
      BQ9: {
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
    return queryInterface.dropTable('ASRStestes');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
