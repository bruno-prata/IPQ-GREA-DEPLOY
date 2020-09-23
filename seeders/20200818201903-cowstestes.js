'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('COWStestes', 
    [
      {
    idPaciente: 1,
    AQ1: 0,
    AQ2: 0,
    AQ3: 0,
    AQ4: 0,
    AQ5: 0,
    AQ6: 0,
    AQ7: 0,
    AQ8: 0,
    AQ9: 0,
    AQ10: 0,
    AQ11: 0,
    BloodPressure: "100",
    DoseGiven: "200mg",
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
    return queryInterface.bulkDelete('COWStestes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
