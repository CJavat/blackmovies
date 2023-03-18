const mongoose = require("mongoose");
const { Schema } = mongoose;

const peliculasSchema = new Schema({
  nombrePelicula: {
    type: "String",
    trim: true,
    required: true,
  },
  yearPelicula: {
    type: number,
    required: true,
  },
  portada: {
    type: "String",
    trim: true,
    required: true,
  },
  generos: [String],
  sinopsis: {
    type: "String",
    trim: true,
    required: true,
  },
  video: {
    type: "String",
    trim: true,
  },
  valoracion: number,
});

module.exports = mongoose.model("Peliculas", peliculasSchema);
