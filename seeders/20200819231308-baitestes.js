'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BAItestes', 
    [
      {
    idPaciente: 1,
    Q1: 1,
    Q2: 1,
    Q3: 1,
    Q4: 1,
    Q5: 1,
    Q6: 1,
    Q7: 1,
    Q8: 1,
    Q9: 1,
    Q10: 1,
    Q11: 1,
    Q12: 1,
    Q13: 1,
    Q14: 1,
    Q15: 1,
    Q16: 1,
    Q17: 1,
    Q18: 1,
    Q19: 1,
    Q20: 1,
    Q21: 1,
    NomeProfissionalAvaliacao: 'Bruno de Oliveira Prata',
    NumeroConselho: '10338990',
    Profissao: 'Clínico Geral',
    createdAt: new Date(),
    updatedAt: new Date(),
    }
  ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BAItestes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
