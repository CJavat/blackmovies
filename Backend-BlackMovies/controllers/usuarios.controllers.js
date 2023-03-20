//! IMPORTAR DEPENDENCIAS --
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

//! IMPORTAR MODELO --
const Usuarios = require("../models/Usuarios.models");

const agregarUsuario = async (req, res) => {
  const { email } = req.body;
  const errors = validationResult(req);

  try {
    //* Comprobar errores de express-validator.
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    //* Comprobar que los password sean iguales.
    if (req.body.password !== req.body.repassword) {
      return res.status(400).json({ msg: "Los passwords no son iguales" });
    }

    //* Comprobar si existe un email registrado en la DB.
    const existeEmail = await Usuarios.find({ email });

    if (existeEmail.length >= 1) {
      return res.status(400).json({ msg: "El email ya ha sido registrado" });
    }

    const crearUsuario = await Usuarios.create(req.body);
    crearUsuario.save();

    res.json({ msg: "Usuario Creado Correctamente" });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: `Ocurrió un error en la consulta: ${error.message}` });
  }
};

//TODO: TERMINAR ESTE CONTROLLER.

module.exports = {
  agregarUsuario,
};
