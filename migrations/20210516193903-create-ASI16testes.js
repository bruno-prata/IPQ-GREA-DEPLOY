'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('ASI16testes', {
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

      D1: {
        type: Sequelize.INTEGER
      }
        ,
      D2:  {
        type: Sequelize.INTEGER
      },
      D3:  {
        type: Sequelize.INTEGER
      },
      D4a:  {
        type: Sequelize.INTEGER
      },
      D4b:  {
        type: Sequelize.INTEGER
      },
      D5a:  {
        type: Sequelize.INTEGER
      },
      D5b:  {
        type: Sequelize.INTEGER
      },
      D6a:  {
        type: Sequelize.INTEGER
      },
      D6b:  {
        type: Sequelize.INTEGER
      },
      D7a:  {
        type: Sequelize.INTEGER
      },
      D7b:  {
        type: Sequelize.INTEGER
      },
      D8:  {
        type: Sequelize.INTEGER
      },
      D9:  {
        type: Sequelize.INTEGER
      },
      D10:  {
        type: Sequelize.INTEGER
      },
      D11:  {
        type: Sequelize.STRING
      },
      D12:  {
        type: Sequelize.INTEGER
      },
      D13:  {
        type: Sequelize.INTEGER
      },
      D14:  {
        type: Sequelize.INTEGER
      },
      D15:  {
        type: Sequelize.INTEGER
      },
      D16:  {
        type: Sequelize.INTEGER
      },
      D17:  {
        type: Sequelize.INTEGER
      },
      D18:  {
        type: Sequelize.INTEGER
      },
      D19:  {
        type: Sequelize.INTEGER
      },
      D20:  {
        type: Sequelize.INTEGER
      },
      D21:  {
        type: Sequelize.INTEGER
      },
      D22:  {
        type: Sequelize.INTEGER
      },
      D23:  {
        type: Sequelize.INTEGER
      },
      D24:  {
        type: Sequelize.INTEGER
      },
      comentarios1:  {
        type: Sequelize.STRING
      },
      D25a:  {
        type: Sequelize.STRING
      },
      D25b:  {
        type: Sequelize.STRING
      },
      D25c:  {
        type: Sequelize.INTEGER
      },
      D25d:  {
        type: Sequelize.INTEGER
      },
      D26a:  {
        type: Sequelize.STRING
      },
      D26b:  {
        type: Sequelize.INTEGER
      },
      D26c:  {
        type: Sequelize.INTEGER
      },
      D26d:  {
        type: Sequelize.INTEGER
      },
      D26e:  {
        type: Sequelize.INTEGER
      },
      D27a:  {
        type: Sequelize.STRING
      },
      D27b:  {
        type: Sequelize.INTEGER
      },
      D27c:  {
        type: Sequelize.INTEGER
      },
      D27d:  {
        type: Sequelize.INTEGER
      },
      D28a:  {
        type: Sequelize.STRING
      },
      D28b:  {
        type: Sequelize.INTEGER
      },
      D28c:  {
        type: Sequelize.INTEGER
      },
      D28d:  {
        type: Sequelize.INTEGER
      },
      D28e:  {
        type: Sequelize.INTEGER
      },
      D29a:  {
        type: Sequelize.STRING
      },
      D29b:  {
        type: Sequelize.INTEGER
      },
      D29c:  {
        type: Sequelize.INTEGER
      },
      D29d:  {
        type: Sequelize.INTEGER
      },
      D30a:  {
        type: Sequelize.STRING
      },
      D30b:  {
        type: Sequelize.INTEGER
      },
      D30c:  {
        type: Sequelize.INTEGER
      },
      D30d:  {
        type: Sequelize.INTEGER
      },
      D31a:  {
        type: Sequelize.STRING
      },
      D31b:  {
        type: Sequelize.INTEGER
      },
      D31c:  {
        type: Sequelize.INTEGER
      },
      D31d:  {
        type: Sequelize.INTEGER
      },
      D31e:  {
        type: Sequelize.INTEGER
      },
      D32a:  {
        type: Sequelize.STRING
      },
      D32b:  {
        type: Sequelize.INTEGER
      },
      D32c:  {
        type: Sequelize.INTEGER
      },
      D32d:  {
        type: Sequelize.INTEGER
      },
      D32e:  {
        type: Sequelize.INTEGER
      },
      D33a:  {
        type: Sequelize.STRING
      },
      D33b:  {
        type: Sequelize.INTEGER
      },
      D33c:  {
        type: Sequelize.INTEGER
      },
      D33d:  {
        type: Sequelize.INTEGER
      },
      D33e:  {
        type: Sequelize.INTEGER
      },
      comentarios2:  {
        type: Sequelize.STRING
      },
      D34:  {
        type: Sequelize.STRING
      },
      D34a:  {
        type: Sequelize.STRING
      },
      D34b1:  {
        type: Sequelize.STRING
      },
      D34b2:  {
        type: Sequelize.STRING
      },
      D34b3:  {
        type: Sequelize.STRING
      },
      D34b4:  {
        type: Sequelize.STRING
      },
      D34b5:  {
        type: Sequelize.STRING
      },
      D34c1:  {
        type: Sequelize.STRING
      },
      D34c2:  {
        type: Sequelize.STRING
      },
      D34c3:  {
        type: Sequelize.STRING
      },
      D34c4:  {
        type: Sequelize.STRING
      },
      D34c5:  {
        type: Sequelize.STRING
      },
      D34c6:  {
        type: Sequelize.STRING
      },
      D35:  {
        type: Sequelize.STRING
      },
      D35a:  {
        type: Sequelize.STRING
      },
      D35b1:  {
        type: Sequelize.STRING
      },
      D35b2:  {
        type: Sequelize.STRING
      },
      D35b3:  {
        type: Sequelize.STRING
      },
      D35b4:  {
        type: Sequelize.STRING
      },
      D35b5:  {
        type: Sequelize.STRING
      },
      D35c1:  {
        type: Sequelize.STRING
      },
      D35c2:  {
        type: Sequelize.STRING
      },
      D35c3:  {
        type: Sequelize.STRING
      },
      D35c4:  {
        type: Sequelize.STRING
      },
      D35c5:  {
        type: Sequelize.STRING
      },
      D35c6:  {
        type: Sequelize.STRING
      },
      D36:  {
        type: Sequelize.STRING
      },
      D36a:  {
        type: Sequelize.STRING
      },
      D36b1:  {
        type: Sequelize.STRING
      },
      D36b2:  {
        type: Sequelize.STRING
      },
      D36b3:  {
        type: Sequelize.STRING
      },
      D36b4:  {
        type: Sequelize.STRING
      },
      D36b5:  {
        type: Sequelize.STRING
      },
      D36c1:  {
        type: Sequelize.STRING
      },
      D36c2:  {
        type: Sequelize.STRING
      },
      D36c3:  {
        type: Sequelize.STRING
      },
      D36c4:  {
        type: Sequelize.STRING
      },
      D36c5:  {
        type: Sequelize.STRING
      },
      D36c6:  {
        type: Sequelize.STRING
      },
      comentarios3:  {
        type: Sequelize.STRING
      },
      D37:  {
        type: Sequelize.INTEGER
      },
      D38:  {
        type: Sequelize.INTEGER
      },
      D39:  {
        type: Sequelize.INTEGER
      },
      D40:  {
        type: Sequelize.INTEGER
      },
      D41:  {
        type: Sequelize.INTEGER
      },
      D42:  {
        type: Sequelize.INTEGER
      },
      D43:  {
        type: Sequelize.INTEGER
      },
      D44:  {
        type: Sequelize.INTEGER
      },
      D45:  {
        type: Sequelize.INTEGER
      },
      D46:  {
        type: Sequelize.INTEGER
      },
      D47:  {
        type: Sequelize.INTEGER
      },
      D48:  {
        type: Sequelize.INTEGER
      },
      D49:  {
        type: Sequelize.INTEGER
      },
      D50:  {
        type: Sequelize.INTEGER
      },
      D51a:  {
        type: Sequelize.INTEGER
      },
      D51b:  {
        type: Sequelize.INTEGER
      },
      D52:  {
        type: Sequelize.INTEGER
      },
      D53a:  {
        type: Sequelize.STRING
      },
      D53b:  {
        type: Sequelize.STRING
      },
      D54:  {
        type: Sequelize.INTEGER
      },
      D55a:  {
        type: Sequelize.STRING
      },
      D55b:  {
        type: Sequelize.STRING
      },
      D56:  {
        type: Sequelize.STRING
      },
      D57:  {
        type: Sequelize.INTEGER
      },
      D58:  {
        type: Sequelize.INTEGER
      },
      D59:  {
        type: Sequelize.STRING
      },
      D60:  {
        type: Sequelize.INTEGER
      },
      comentarios4:  {
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
    return queryInterface.dropTable('ASI16testes');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
