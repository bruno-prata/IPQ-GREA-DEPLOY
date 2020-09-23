'use strict';
module.exports = (sequelize, DataTypes) => {
  const COWStestes = sequelize.define('COWStestes', {
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
    AQ10: DataTypes.INTEGER,
    AQ11: DataTypes.INTEGER,
    BloodPressure: DataTypes.STRING,
    DoseGiven: DataTypes.STRING,
    NomeProfissionalAvaliacao:DataTypes.STRING,
    NumeroConselho: DataTypes.STRING,
    Profissao: DataTypes.STRING,
  }, {
      tablename: "COWStestes",
  });
  COWStestes.associate = function(models) {
    // associations can be defined here
  };
  return COWStestes;
};