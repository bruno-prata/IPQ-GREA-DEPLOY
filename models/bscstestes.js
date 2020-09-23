'use strict';
module.exports = (sequelize, DataTypes) => {
  const BSCStestes = sequelize.define('BSCStestes', {
    idPaciente: { 
      type: DataTypes.STRING,
      defaultValue: '' // or whatever you would like
},
    A1: DataTypes.INTEGER,
    Atext: DataTypes.STRING,
    Q1: DataTypes.INTEGER,
    Q2: DataTypes.INTEGER,
    Q3: DataTypes.INTEGER,
    Q4: DataTypes.STRING,
    B1: DataTypes.INTEGER,
    Btext: DataTypes.STRING,
    Q5: DataTypes.INTEGER,
    Q6: DataTypes.INTEGER,
    Q7: DataTypes.INTEGER,
    Q8text: DataTypes.STRING,
    NomeProfissionalAvaliacao:DataTypes.STRING,
    NumeroConselho: DataTypes.STRING,
    Profissao: DataTypes.STRING,
  }, {
      tablename: "BSCStestes",
  });
  BSCStestes.associate = function(models) {
    // associations can be defined here
  };
  return BSCStestes;
};