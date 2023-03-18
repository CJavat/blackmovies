//! IMPORTAR DEPENDENCIAS --
const shortid = require("shortid");
const multer = require("multer");

const Peliculas = require("../models/Peliculas.models");

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
    // console.log(req);
    if (error) {
      return res.json({ msg: error });
    }

    next();
  });
};
//! ----------------------------------------

//! MOSTRAR PELÍCULAS --

//! MOSTRAR PELÍCULA POR SU ID --

//! AGREGAR PELÍCULA --
const agregarPelicula = async (req, res, next) => {
  try {
    const peliculaAgregada = Peliculas.create(req.body);

    res.json(peliculaAgregada);
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Ha ocurrido un error en la consulta: " + error.message });
  }
};

//! ACTUALIZAR PELÍCULA --

//! MODIFICAR PELÍCULA --

//! ELIMINAR PELÍCULA --

//! MOSTRAR PELÍCULAS POR GENERO --
//! MOSTRAR PELÍCULAS POR VALORACIÓN --

module.exports = {
  subirArchivos,
  agregarPelicula,
};

//TODO: TERMINAR CONTROLLER.
