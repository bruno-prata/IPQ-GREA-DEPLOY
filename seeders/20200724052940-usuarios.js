'use strict';

const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Usuarios', 
   [
     {
      nomeCompleto: 'Bruno de Oliveira Prata',
      numeroConselho: '10338990',
      profissao: 'Clínico Geral',
      email: 'email.prata@gmail.com',
      senha: bcrypt.hashSync("tr0ntr0n", 10),
      createdAt: new Date(),
      updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
