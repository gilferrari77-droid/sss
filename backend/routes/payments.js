const express = require("express");
const router = express.Router();

router.post("/subscribe", (req, res) => {
  // integrar Mercado Pago aqui
  res.json({ status: "assinatura criada" });
});

module.exports = router;