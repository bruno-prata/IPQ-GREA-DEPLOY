'use strict';
module.exports = (sequelize, DataTypes) => {
  const EVAtestes = sequelize.define('EVAtestes', {
    idPaciente: { 
      type: DataTypes.STRING,
      defaultValue: '' // or whatever you would like
},
    AQ1: DataTypes.INTEGER,
    AQ2: DataTypes.INTEGER,
    BQ1: DataTypes.INTEGER,
    BQ2: DataTypes.INTEGER,
    NomeProfissionalAvaliacao:DataTypes.STRING,
    NumeroConselho: DataTypes.STRING,
    Profissao: DataTypes.STRING,
  }, {
      tablename: "EVAtestes",
  });
  EVAtestes.associate = function(models) {
    // associations can be defined here
  };
  return EVAtestes;
};