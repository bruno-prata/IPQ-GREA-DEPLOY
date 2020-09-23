'use strict';
module.exports = (sequelize, DataTypes) => {
  const URICAtestes = sequelize.define('URICAtestes', {
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
    Q22: DataTypes.INTEGER,
    Q23: DataTypes.INTEGER,
    Q24: DataTypes.INTEGER,
    Q25: DataTypes.INTEGER,
    Q26: DataTypes.INTEGER,
    Q27: DataTypes.INTEGER,
    Q28: DataTypes.INTEGER,
    Q29: DataTypes.INTEGER,
    Q30: DataTypes.INTEGER,
    Q31: DataTypes.INTEGER,
    Q32: DataTypes.INTEGER,
    NomeProfissionalAvaliacao:DataTypes.STRING,
    NumeroConselho: DataTypes.STRING,
    Profissao: DataTypes.STRING,
  }, {
      tablename: "URICAtestes",
  });
  URICAtestes.associate = function(models) {
    // associations can be defined here
  };
  return URICAtestes;
};