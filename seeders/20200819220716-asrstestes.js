'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ASRStestes', 
    [
      {
    idPaciente: 1,
    AQ1: 1,
    AQ2: 1,
    AQ3: 1,
    AQ4: 1,
    AQ5: 1,
    AQ6: 1,
    AQ7: 1,
    AQ8: 1,
    AQ9: 1,
    BQ1: 1,
    BQ2: 1,
    BQ3: 1,
    BQ4: 1,
    BQ5: 1,
    BQ6: 1,
    BQ7: 1,
    BQ8: 1,
    BQ9: 1,
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
    return queryInterface.bulkDelete('ASRStestes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
