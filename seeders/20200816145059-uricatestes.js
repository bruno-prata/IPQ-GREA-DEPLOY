'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('URICAtestes', 
    [
      {
    idPaciente: 1,
    Q1: 1,
    Q2: 2,
    Q3: 3,
    Q4: 4,
    Q5: 5,
    Q6: 5,
    Q7: 4,
    Q8: 3,
    Q9: 2,
    Q10: 1,
    Q11: 1,
    Q12: 2,
    Q13: 3,
    Q14: 4,
    Q15: 5,
    Q16: 5,
    Q17: 4,
    Q18: 3,
    Q19: 2,
    Q20: 1,
    Q21: 1,
    Q22: 2,
    Q23: 3,
    Q24: 4,
    Q25: 5,
    Q26: 5,
    Q27: 4,
    Q28: 3,
    Q29: 2,
    Q30: 1,
    Q31: 1,
    Q32: 2,
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
    return queryInterface.bulkDelete('URICAtestes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
