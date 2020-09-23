'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BDItestes', 
    [
      {
    idPaciente: 1,
    Q1a: 'S',
    Q1b: 'S',
    Q1c: 'S',
    Q1d: 'S',
    Q2a: 'S',
    Q2b: 'S',
    Q2c: 'S',
    Q2d: 'S',
    Q3a: 'S',
    Q3b: 'S',
    Q3c: 'S',
    Q3d: 'S',
    Q4a: 'S',
    Q4b: 'S',
    Q4c: 'S',
    Q4d: 'S',
    Q5a: 'S',
    Q5b: 'S',
    Q5c: 'S',
    Q5d: 'S',
    Q6a: 'S',
    Q6b: 'S',
    Q6c: 'S',
    Q6d: 'S',
    Q7a: 'S',
    Q7b: 'S',
    Q7c: 'S',
    Q7d: 'S',
    Q8a: 'S',
    Q8b: 'S',
    Q8c: 'S',
    Q8d: 'S',
    Q9a: 'S',
    Q9b: 'S',
    Q9c: 'S',
    Q9d: 'S',
    Q10a: 'S',
    Q10b: 'S',
    Q10c: 'S',
    Q10d: 'S',
    Q11a: 'S',
    Q11b: 'S',
    Q11c: 'S',
    Q11d: 'S',
    Q12a: 'S',
    Q12b: 'S',
    Q12c: 'S',
    Q12d: 'S',
    Q13a: 'S',
    Q13b: 'S',
    Q13c: 'S',
    Q13d: 'S',
    Q14a: 'S',
    Q14b: 'S',
    Q14c: 'S',
    Q14d: 'S',
    Q15a: 'S',
    Q15b: 'S',
    Q15c: 'S',
    Q15d: 'S',
    Q16a: 'S',
    Q16b: 'S',
    Q16c: 'S',
    Q16d: 'S',
    Q17a: 'S',
    Q17b: 'S',
    Q17c: 'S',
    Q17d: 'S',
    Q18a: 'S',
    Q18b: 'S',
    Q18c: 'S',
    Q18d: 'S',
    Q19a: 'S',
    Q19b: 'S',
    Q19c: 'S',
    Q19d: 'S',
    Q19: 'S',
    Q20a: 'S',
    Q20b: 'S',
    Q20c: 'S',
    Q20d: 'S',
    Q21a: 'S',
    Q21b: 'S',
    Q21c: 'S',
    Q21d: 'S',
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
    return queryInterface.bulkDelete('BDItestes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
