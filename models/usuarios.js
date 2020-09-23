'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    nomeCompleto: DataTypes.STRING,
    numeroConselho: DataTypes.INTEGER,
    profissao: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    tablename: "Usuarios",
  });
  Usuarios.associate = function(models) {
    // associations can be defined here
  };
  return Usuarios;
};