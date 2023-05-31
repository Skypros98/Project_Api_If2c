// Tahap ke (5) Buat folder Dosen
const express = require("express");
const router = express.Router();
const Dosen = require("../models/Dosen");

// Create api for Dosen
router.post("/", async (req, res) => {
  // Tampung dulu input Dosen
  const dosenPost = new Dosen({
    nidn: req.body.nidn,
    nama: req.body.nama,
    jenis_kelamin: req.body.jenis_kelamin,
    umur: req.body.umur,
  });

  // Simpan data dengan try catch
  try {
    // Simpan datanya
    const dosen = await dosenPost.save();
    // Beri response
    res.json(dosen);
  } catch (error) {
    res.json({ message: error });
  }
});

// Read
router.get("/", async (req, res) => {
  try {
    const dosen = await Dosen.find();
    res.json(dosen);
  } catch (error) {
    res.json({ message: error });
  }
});

router.put("/:dosenId", async (req, res) => {
  const data = {
    nidn: req.body.nidn,
    nama: req.body.nama,
    jenis_kelamin: req.body.jenis_kelamin,
    umur: req.body.umur,
  };

  try {
    const dosen = await Dosen.updateOne({ _id: req.params.dosenId }, data);
    res.json(dosen);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:dosenId", async (req, res) => {
  try {
    const dosen = await Dosen.deleteOne({
      _id: req.params.dosenId,
    });
    res.json(dosen);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
