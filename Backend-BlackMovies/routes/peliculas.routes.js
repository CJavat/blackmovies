//! IMPORTAR DEPENDENCIAS --
const express = require("express");
const router = express.Router();

//! IMPORTAR CONTROLLERS --
const {
  subirArchivos,
  agregarPelicula,
} = require("../controllers/peliculas.controllers");

router.post("/agregar-pelicula", subirArchivos /* agregarPelicula */);

module.exports = router;

//TODO: TERMINAR ROUTES.
