// Tahap ke (4) buat schema Dosen
const mongoose = require("mongoose");

const DosenSchema = mongoose.Schema({
  nidn: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  jenis_kelamin: {
    type: String,
    required: true,
  },
  umur: {
    type: Number,
    required: false,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Dosen", DosenSchema);
