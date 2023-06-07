// Tahap ke (5) Buat folder mahasiswa
const express = require("express");
const router = express.Router();
const Mahasiswa = require("../models/Mahasiswa");

// Import verifyToken
const verifyToken = require("../config/verifyToken");

// Create api for mahasiswa
router.post("/", async (req, res) => {
  // Tampung dulu input mahasiswa
  const mahasiswaPost = new Mahasiswa({
    npm: req.body.npm,
    nama: req.body.nama,
    alamat: req.body.alamat,
  });

  // Simpan data dengan try catch
  try {
    // Simpan datanya
    const mahasiswa = await mahasiswaPost.save();
    // Beri response
    res.json(mahasiswa);
  } catch (error) {
    res.json({ message: error });
  }
});

// Read
router.get("/", async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.json(mahasiswa);
  } catch (error) {
    res.json({ message: error });
  }
});

router.put("/:mahasiswaId", async (req, res) => {
  const data = {
    npm: req.body.npm,
    nama: req.body.nama,
    alamat: req.body.alamat,
  };

  try {
    const mahasiswa = await Mahasiswa.updateOne(
      { _id: req.params.mahasiswaId },
      data
    );
    res.json(mahasiswa);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:mahasiswaId", async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.deleteOne({
      _id: req.params.mahasiswaId,
    });
    res.json(mahasiswa);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
