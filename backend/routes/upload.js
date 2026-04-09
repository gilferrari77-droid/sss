const express = require("express");
const multer = require("multer");
const aiReader = require("../services/aiReader");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), async (req, res) => {
  const respostas = await aiReader(req.file.path);

  const resultado = {
    acertos: 8,
    nota: 8.0
  };

  res.json(resultado);
});

module.exports = router;