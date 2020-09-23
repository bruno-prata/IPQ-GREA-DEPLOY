'use strict';
module.exports = (sequelize, DataTypes) => {
  const CIWAARtestes = sequelize.define('CIWAARtestes', {
    idPaciente: { 
      type: DataTypes.STRING,
      defaultValue: '' // or whatever you would like
},
    Q1: DataTypes.INTEGER,
    Q2: DataTypes.INTEGER,
    Q3: DataTypes.INTEGER,
    Q4: DataTypes.INTEGER,
    Q5: DataTypes.INTEGER,
    Q6: DataTypes.INTEGER,
    Q7: DataTypes.INTEGER,
    Q8: DataTypes.INTEGER,
    Q9: DataTypes.INTEGER,
    Q10: DataTypes.INTEGER,
    NomeProfissionalAvaliacao:DataTypes.STRING,
    NumeroConselho: DataTypes.STRING,
    Profissao: DataTypes.STRING,
  }, {
      tablename: "CIWAARtestes",
  });
  CIWAARtestes.associate = function(models) {
    // associations can be defined here
  };
  return CIWAARtestes;
};