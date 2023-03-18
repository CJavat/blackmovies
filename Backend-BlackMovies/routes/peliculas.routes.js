//! IMPORTAR DEPENDENCIAS --
const express = require("express");
const router = express.Router();

//! IMPORTAR CONTROLLERS --
const { primero } = require("../controllers/peliculas.controllers");

router.get("/", primero);

module.exports = router;

//TODO: TERMINAR ROUTES.
