'use strict';
module.exports = (sequelize, DataTypes) => {
  const ASRStestes = sequelize.define('ASRStestes', {
    idPaciente: { 
      type: DataTypes.STRING,
      defaultValue: '' // or whatever you would like
},
    AQ1: DataTypes.INTEGER,
    AQ2: DataTypes.INTEGER,
    AQ3: DataTypes.INTEGER,
    AQ4: DataTypes.INTEGER,
    AQ5: DataTypes.INTEGER,
    AQ6: DataTypes.INTEGER,
    AQ7: DataTypes.INTEGER,
    AQ8: DataTypes.INTEGER,
    AQ9: DataTypes.INTEGER,
    BQ1: DataTypes.INTEGER,
    BQ2: DataTypes.INTEGER,
    BQ3: DataTypes.INTEGER,
    BQ4: DataTypes.INTEGER,
    BQ5: DataTypes.INTEGER,
    BQ6: DataTypes.INTEGER,
    BQ7: DataTypes.INTEGER,
    BQ8: DataTypes.INTEGER,
    BQ9: DataTypes.INTEGER,
    NomeProfissionalAvaliacao:DataTypes.STRING,
    NumeroConselho: DataTypes.STRING,
    Profissao: DataTypes.STRING,
  }, {
      tablename: "ASRStestes",
  });
  ASRStestes.associate = function(models) {
    // associations can be defined here
  };
  return ASRStestes;
};