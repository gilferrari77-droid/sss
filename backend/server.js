const express = require("express");
const cors = require("cors");

const uploadRoute = require("./routes/upload");
const paymentRoute = require("./routes/payment");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/upload", uploadRoute);
app.use("/payment", paymentRoute);

app.listen(3001, () => console.log("Servidor rodando"));