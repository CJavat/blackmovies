//! IMPORTAR DEPENDENCIAS --
const shortid = require("shortid");
const multer = require("multer");

const Peliculas = require("../models/Peliculas.models");
const { response } = require("express");

//! --------- CONFIGURACIÓN MULTER ---------
const configuracionMulter = {
  storage: (fileStorage = multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, __dirname + "/../public/uploads");
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split("/")[1];
      cb(null, `${shortid.generate()}.${extension}`);
    },
  })),
  fileFilter(req, file, cb) {
    if (
      file.mimetype === "image/jpeg" || //* JPG
      file.mimetype === "image/png" || //* PNG
      file.mimetype === "video/x-msvideo" || //* AVI
      file.mimetype === "video/quicktime" || //* MOV
      file.mimetype === "video/mp4" || //* MP4
      file.mimetype === "video/x-flv" //* FLV
    ) {
      cb(null, true);
    } else {
      cb(new Error("Formato No Válido. Sube un archivo JPG o PNG"));
    }
  },
};

const uploadArchivos = multer(configuracionMulter).fields([
  { name: "fotoPortada", maxCount: 1 },
  { name: "fotoFondo", maxCount: 1 },
  { name: "pelicula", maxCount: 1 },
]);

const subirArchivos = (req, res, next) => {
  uploadArchivos(req, res, function (error) {
    if (error) {
      return res.json({ msg: error });
    }

    next();
  });
};
//! ----------------------------------------

//! MOSTRAR PELÍCULAS --
const mostrarPeliculas = async (req, res, next) => {
  //* Asignación de página por default en 1.
  let pagina = 1;
  try {
    if (req.params.pagina) pagina = parseInt(req.params.pagina, 10);

    const peliculas = await Peliculas.paginate({}, { limit: 12, page: pagina });

    if (!peliculas) {
      res.status(404).json({ msg: "No se encontraron películas" });
    }
    res.json(peliculas);
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Hubo un error en la consulta: " + error.message });
  }
};

//! MOSTRAR PELÍCULA POR SU ID --
const mostrarPelicula = async (req, res, next) => {
  const { id } = req.params;

  try {
    const pelicula = await Peliculas.findById(id);
    if (!pelicula) {
      res.status(404).json({ msg: "No se encontró ninguna pelicula" });
    }

    res.json(pelicula);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "Ocurrió un error en la consulta: " + error.message });
  }
};

//! AGREGAR PELÍCULA --
const agregarPelicula = async (req, res, next) => {
  //TODO: FALTA ARREGLAR QUE LE LLEGUEN LOS DATOS DESDE MULTER.
  try {
    // console.log(req.files);
    if (!req.files.fotoPortada) {
      res.status(406).json({ msg: "La portada es obligatorio" });
    }
    if (!req.files.fotoFondo) {
      res.status(406).json({ msg: "La foto de fondo es obligatorio" });
    }
    if (!req.files.pelicula) {
      res.status(406).json({ msg: "La película es obligatoria" });
    }

    req.body.fotoPortada = req.files.fotoPortada[0].filename;
    req.body.fotoFondo = req.files.fotoFondo[0].filename;
    req.body.pelicula = req.files.pelicula[0].filename;

    const peliculaAgregada = await Peliculas.create(req.body);
    peliculaAgregada.save();

    res.json({ msg: "Película agregada correctamente" });
    return;
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Ha ocurrido un error en la consulta: " + error.message });
  }
};

//! ACTUALIZAR PELÍCULA --
const actualizarPelicula = async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;

  try {
    const existePelicula = await Peliculas.findById(id);
    if (!existePelicula) {
      res.status(404).json({ msg: "No existe una película" });
    }
    console.log(datosActualizados);
    //TODO: FALTA VALIDAR EL req.file -> HACER LO MISMO QUE EN EL PROYECTO ANTERIOR, SI ACTUALIZARON FOTO, ELIMINAR EL VIEJO Y AGREGAR EL NUEVO, SINO EXISTE, SIMPLEMENTE AGREGAR EL QUE YA TENIA A LA DB DE NUEVO.
    // if(req.files?.fotoPortada)
    // if(req.files?.fotoFondo)
    // if(req.files?.pelicula)
  } catch (error) {
    res
      .status(400)
      .json({ msg: `Hubo un error en la consulta: ${error.message}` });
  }
};

//! ELIMINAR PELÍCULA --
const eliminarPelicula = async (req, res) => {};

//! MOSTRAR PELÍCULAS POR GENERO --
//! MOSTRAR PELÍCULAS POR VALORACIÓN --

module.exports = {
  subirArchivos,
  mostrarPeliculas,
  mostrarPelicula,
  agregarPelicula,
  actualizarPelicula,
  eliminarPelicula,
};

//TODO: TERMINAR CONTROLLER.
