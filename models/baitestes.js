'use strict';
module.exports = (sequelize, DataTypes) => {
  const BAItestes = sequelize.define('BAItestes', {
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
    Q11: DataTypes.INTEGER,
    Q12: DataTypes.INTEGER,
    Q13: DataTypes.INTEGER,
    Q14: DataTypes.INTEGER,
    Q15: DataTypes.INTEGER,
    Q16: DataTypes.INTEGER,
    Q17: DataTypes.INTEGER,
    Q18: DataTypes.INTEGER,
    Q19: DataTypes.INTEGER,
    Q20: DataTypes.INTEGER,
    Q21: DataTypes.INTEGER,
    NomeProfissionalAvaliacao:DataTypes.STRING,
    NumeroConselho: DataTypes.STRING,
    Profissao: DataTypes.STRING,
  }, {
      tablename: "BAItestes",
  });
  BAItestes.associate = function(models) {
    // associations can be defined here
  };
  return BAItestes;
};