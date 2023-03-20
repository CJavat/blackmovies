//! IMPORTAR DEPENDENCIAS --
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

//! IMPORTAR CONTROLLER --
const { agregarUsuario } = require("../controllers/usuarios.controllers");

router.post(
  "/agregar-usuario",
  [
    check("nombre")
      .isString()
      .withMessage("NOMBRE: Solo se aceptan letras")
      .isLength({ min: 3 })
      .withMessage("NOMBRE: Mínimo deben ser 3 letras"),
    check("nickname")
      .isAlphanumeric()
      .withMessage("NICKNAME: Escribe un Nickname válido"),
    check("email").isEmail().withMessage("EMAIL: Escribe un email válido"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("PASSWORD: Debe tener mínimo 6 caracteres"),
  ],
  agregarUsuario
);

module.exports = router;

//TODO: TERMINAR ESTA RUTA
