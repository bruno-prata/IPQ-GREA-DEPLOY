'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('COWStestes', {
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
      AQ10: {
        type: Sequelize.INTEGER
      },
      AQ11: {
        type: Sequelize.INTEGER
      },
      BloodPressure: {
        type: Sequelize.STRING
      },
      DoseGiven: {
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
    return queryInterface.dropTable('COWStestes');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

