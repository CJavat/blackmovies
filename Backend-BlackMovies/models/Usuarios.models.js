const mongoose = require("mongoose");
const { Schema } = mongoose;

const usuariosSchema = new Schema({
  nombre: {
    type: String,
    trim: true,
    required: true,
  },
  nickname: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  peliculasFavoritas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Peliculas",
    },
  ],
  rol: {
    type: String,
    default: "usuario",
  },
});

module.exports = mongoose.model("Usuarios", usuariosSchema);
