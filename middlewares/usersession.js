const { Usuarios, Administradores } = require("../models");

const cookieLogin = (req, res, next) => {
    next();
};

function continuaLogado(req, res, next) {
    if (req.session.usuario) {
        return next();
      } else {
        res.redirect("/");
      }
};

  module.exports = { continuaLogado, cookieLogin };