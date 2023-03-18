//! IMPORTAR DEPENDENCIAS --
const express = require("express");
const router = express.Router();

//! IMPORTAR CONTROLLERS --
const {
  subirArchivos,
  mostrarPeliculas,
  agregarPelicula,
} = require("../controllers/peliculas.controllers");

router.get("/mostrar-peliculas/:pagina", mostrarPeliculas);

router.post("/agregar-pelicula", subirArchivos, agregarPelicula);

module.exports = router;

//TODO: TERMINAR ROUTES.
