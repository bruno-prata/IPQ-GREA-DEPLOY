'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('BDItestes', {
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
      Q1a: {
        type: Sequelize.STRING(1)
      },
      Q1b: {
        type: Sequelize.STRING(1)
      },
      Q1c: {
        type: Sequelize.STRING(1)
      },
      Q1d: {
        type: Sequelize.STRING(1)
      },
      Q2a: {
        type: Sequelize.STRING(1)
      },
      Q2b: {
        type: Sequelize.STRING(1)
      },
      Q2c: {
        type: Sequelize.STRING(1)
      },
      Q2d: {
        type: Sequelize.STRING(1)
      },
      Q3a: {
        type: Sequelize.STRING(1)
      },
      Q3b: {
        type: Sequelize.STRING(1)
      },
      Q3c: {
        type: Sequelize.STRING(1)
      },
      Q3d: {
        type: Sequelize.STRING(1)
      },
      Q4a: {
        type: Sequelize.STRING(1)
      },
      Q4b: {
        type: Sequelize.STRING(1)
      },
      Q4c: {
        type: Sequelize.STRING(1)
      },
      Q4d: {
        type: Sequelize.STRING(1)
      },
      Q5a: {
        type: Sequelize.STRING(1)
      },
      Q5b: {
        type: Sequelize.STRING(1)
      },
      Q5c: {
        type: Sequelize.STRING(1)
      },
      Q5d: {
        type: Sequelize.STRING(1)
      },
      Q6a: {
        type: Sequelize.STRING(1)
      },
      Q6b: {
        type: Sequelize.STRING(1)
      },
      Q6c: {
        type: Sequelize.STRING(1)
      },
      Q6d: {
        type: Sequelize.STRING(1)
      },
      Q7a: {
        type: Sequelize.STRING(1)
      },
      Q7b: {
        type: Sequelize.STRING(1)
      },
      Q7c: {
        type: Sequelize.STRING(1)
      },
      Q7d: {
        type: Sequelize.STRING(1)
      },
      Q8a: {
        type: Sequelize.STRING(1)
      },
      Q8b: {
        type: Sequelize.STRING(1)
      },
      Q8c: {
        type: Sequelize.STRING(1)
      },
      Q8d: {
        type: Sequelize.STRING(1)
      },
      Q9a: {
        type: Sequelize.STRING(1)
      },
      Q9b: {
        type: Sequelize.STRING(1)
      },
      Q9c: {
        type: Sequelize.STRING(1)
      },
      Q9d: {
        type: Sequelize.STRING(1)
      },
      Q10a: {
        type: Sequelize.STRING(1)
      },
      Q10b: {
        type: Sequelize.STRING(1)
      },
      Q10c: {
        type: Sequelize.STRING(1)
      },
      Q10d: {
        type: Sequelize.STRING(1)
      },
      Q11a: {
        type: Sequelize.STRING(1)
      },
      Q11b: {
        type: Sequelize.STRING(1)
      },
      Q11c: {
        type: Sequelize.STRING(1)
      },
      Q11d: {
        type: Sequelize.STRING(1)
      },
      Q12a: {
        type: Sequelize.STRING(1)
      },
      Q12b: {
        type: Sequelize.STRING(1)
      },
      Q12c: {
        type: Sequelize.STRING(1)
      },
      Q12d: {
        type: Sequelize.STRING(1)
      },
      Q13a: {
        type: Sequelize.STRING(1)
      },
      Q13b: {
        type: Sequelize.STRING(1)
      },
      Q13c: {
        type: Sequelize.STRING(1)
      },
      Q13d: {
        type: Sequelize.STRING(1)
      },
      Q14a: {
        type: Sequelize.STRING(1)
      },
      Q14b: {
        type: Sequelize.STRING(1)
      },
      Q14c: {
        type: Sequelize.STRING(1)
      },
      Q14d: {
        type: Sequelize.STRING(1)
      },
      Q15a: {
        type: Sequelize.STRING(1)
      },
      Q15b: {
        type: Sequelize.STRING(1)
      },
      Q15c: {
        type: Sequelize.STRING(1)
      },
      Q15d: {
        type: Sequelize.STRING(1)
      },
      Q16a: {
        type: Sequelize.STRING(1)
      },
      Q16b: {
        type: Sequelize.STRING(1)
      },
      Q16c: {
        type: Sequelize.STRING(1)
      },
      Q16d: {
        type: Sequelize.STRING(1)
      },
      Q17a: {
        type: Sequelize.STRING(1)
      },
      Q17b: {
        type: Sequelize.STRING(1)
      },
      Q17c: {
        type: Sequelize.STRING(1)
      },
      Q17d: {
        type: Sequelize.STRING(1)
      },
      Q18a: {
        type: Sequelize.STRING(1)
      },
      Q18b: {
        type: Sequelize.STRING(1)
      },
      Q18c: {
        type: Sequelize.STRING(1)
      },
      Q18d: {
        type: Sequelize.STRING(1)
      },
      Q19a: {
        type: Sequelize.STRING(1)
      },
      Q19b: {
        type: Sequelize.STRING(1)
      },
      Q19c: {
        type: Sequelize.STRING(1)
      },
      Q19d: {
        type: Sequelize.STRING(1)
      },
      Q19: {
        type: Sequelize.STRING(1)
      },
      Q20a: {
        type: Sequelize.STRING(1)
      },
      Q20b: {
        type: Sequelize.STRING(1)
      },
      Q20c: {
        type: Sequelize.STRING(1)
      },
      Q20d: {
        type: Sequelize.STRING(1)
      },
      Q21a: {
        type: Sequelize.STRING(1)
      },
      Q21b: {
        type: Sequelize.STRING(1)
      },
      Q21c: {
        type: Sequelize.STRING(1)
      },
      Q21d: {
        type: Sequelize.STRING(1)
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
    return queryInterface.dropTable('BDItestes');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
