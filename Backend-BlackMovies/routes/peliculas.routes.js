//! IMPORTAR DEPENDENCIAS --
const express = require("express");
const router = express.Router();

//! IMPORTAR CONTROLLERS --
const {
  subirArchivos,
  mostrarPeliculas,
  mostrarPelicula,
  agregarPelicula,
  actualizarPelicula,
  eliminarPelicula,
  mostrarPorGenero,
  mostrarPorValoracion,
  buscarPeliculas,
  comentarPelicula,
} = require("../controllers/peliculas.controllers");

//! MOSTRAR PELICULAS - SEPARADOS POR PÁGINA --
router.get("/mostrar-peliculas/:pagina", mostrarPeliculas);

//! MOSTRAR UNA PELICULA POR SU ID --
router.get("/mostrar-pelicula/:id", mostrarPelicula);

//! AGREGAR UNA PELICULA --
router.post("/agregar-pelicula", subirArchivos, agregarPelicula);

//! ACTUALIZAR PELICULA MEDIANTE SU ID --
router.put("/actualizar-pelicula/:id", subirArchivos, actualizarPelicula);

//! ELIMINAR UNA PELICULA POR SU ID --
router.delete("/eliminar-pelicula/:id", eliminarPelicula);

//! MOSTRAR PELICULAS POR SU GENERO --
router.get("/mostrar-genero/:genero", mostrarPorGenero);

//! MOSTRAR PELICULAS POR LA VALORACION ==
router.get("/mostrar-valoracion/:valoracion", mostrarPorValoracion);

//! BUSCAR PELÍCULAS POR SU NOMBRE --
router.get("/buscar-peliculas", buscarPeliculas);

//! COMENTAR PELÍCULA --
router.post("/comentar-pelicula/:id", comentarPelicula);

module.exports = router;
