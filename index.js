const express = require("express");
const app = express();

const gastosRoutes = require("./routes/gastos.routes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de gastos funcionando 🚀");
});

app.use("/gastos", gastosRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});