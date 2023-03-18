const mongoose = require("mongoose");
const { Schema } = mongoose;

const peliculasSchema = new Schema({
  nombrePelicula: {
    type: String,
    trim: true,
    required: true,
  },
  fechaPelicula: {
    type: Date,
    required: true,
  },
  generos: [String],
  sinopsis: {
    type: String,
    trim: true,
    required: true,
  },
  fotoPortada: {
    type: String,
    trim: true,
    required: true,
  },
  fotoFondo: {
    type: String,
    trim: true,
  },
  película: {
    type: String,
    trim: true,
  },
  valoracion: Number,
});

module.exports = mongoose.model("Peliculas", peliculasSchema);
