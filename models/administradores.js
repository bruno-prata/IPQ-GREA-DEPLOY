'use strict';
module.exports = (sequelize, DataTypes) => {
  const Administradores = sequelize.define('Administradores', {
    nomeCompleto: DataTypes.STRING,
    numeroConselho: DataTypes.INTEGER,
    profissao: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    tablename: "Administradores",
  });
  Administradores.associate = function(models) {
    // associations can be defined here
  };
  return Administradores;
};