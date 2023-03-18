require("dotenv").config(); //* CONFIGURAR .ENV

//! IMPORTAR DEPENDENCIAS --
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

//! IMPORTAR DB --
const db = require("./config/db");

//! IMPORTAR RUTAS --
const rutaPeliculas = require("./routes/peliculas.routes");

const app = express(); //* Crear servidor.

//* Habilitar carpetas estaticas.
app.use(express.static(path.join("./public/movies")));
app.use(express.static(path.join("./public/pictures")));

//* Configuraciones.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//* Habilitar CORS.
app.use(cors());

//* Habilitar rutas.
app.use("/api/peliculas", rutaPeliculas);

//* Iniciar Servidor.
app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Servidor conectado en el puerto: ${process.env.BACKEND_PORT}`);
});
