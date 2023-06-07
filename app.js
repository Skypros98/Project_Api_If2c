// Tahap ke (1) definisi module/middleware
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");

app.use(cors());
// Tahap ke (6) middleware body-parser
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Tahap ke (7) Import routes
const mahasiswaRoutes = require("./routes/mahasiswa");
const dosenRoutes = require("./routes/dosen");
const authRoutes = require("./routes/auth");

// Tahap ke (8) app.use (mendaftarkan middleware baru ke Express)
app.use("/mahasiswa", mahasiswaRoutes);
app.use("/dosen", dosenRoutes);
app.use("/auth", authRoutes);

// Tahap ke (3) koneksi ke database mongodb
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;
// handle error : jika user/password mongoDB salah
db.on("error", console.error.bind(console, "Koneksi ke MongoDB error"));

// handle success : user/password mongoDB benar
db.once("open", () => {
  console.log("Terhubung ke Database MongoDB");
});

// Tahap ke (2) listen port
app.listen(process.env.PORT, () => {
  console.log(`Server berjalan pada port ${process.env.PORT}`);
});
