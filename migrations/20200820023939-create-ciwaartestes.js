'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('CIWAARtestes', {
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
        type: Sequelize.INTEGER
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
      Q8: {
        type: Sequelize.INTEGER
      },
      Q9: {
        type: Sequelize.INTEGER
      },
      Q10: {
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

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CIWAARtestes');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
