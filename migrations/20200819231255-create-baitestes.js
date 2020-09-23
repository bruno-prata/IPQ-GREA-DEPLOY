'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('BAItestes', {
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
      Q11: {
        type: Sequelize.INTEGER
      },
      Q12: {
        type: Sequelize.INTEGER
      },
      Q13: {
        type: Sequelize.INTEGER
      },
      Q14: {
        type: Sequelize.INTEGER
      },
      Q15: {
        type: Sequelize.INTEGER
      },
      Q16: {
        type: Sequelize.INTEGER
      },
      Q17: {
        type: Sequelize.INTEGER
      },
      Q18: {
        type: Sequelize.INTEGER
      },
      Q19: {
        type: Sequelize.INTEGER
      },
      Q20: {
        type: Sequelize.INTEGER
      },
      Q21: {
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
    return queryInterface.dropTable('BAItestes');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
