// Tahap ke (4) buat schema Mahasiswa
const mongoose = require("mongoose");

const MahasiswaSchema = mongoose.Schema({
  npm: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Mahasiswa", MahasiswaSchema);
