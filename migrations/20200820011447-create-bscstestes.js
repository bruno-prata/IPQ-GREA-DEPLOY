'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('BSCStestes', {
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
      A1: {
        type: Sequelize.INTEGER
      },
      Atext: {
        type: Sequelize.STRING
      },
      Q1: {
        type: Sequelize.INTEGER
      },
      Q2: {
        type: Sequelize.INTEGER
      },
      Q3: {
        type: Sequelize.INTEGER
      },
      Q4: {
        type: Sequelize.STRING
      },
      B1: {
        type: Sequelize.INTEGER
      },
      Btext: {
        type: Sequelize.STRING
      },
      Q5: {
        type: Sequelize.INTEGER
      },
      Q6: {
        type: Sequelize.INTEGER
      },
      Q7: {
        type: Sequelize.INTEGER
      },
      Q8text: {
        type: Sequelize.STRING
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

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BSCStestes');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
