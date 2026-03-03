const express = require("express");
const app = express();

app.use(express.json()); // Permite recibir JSON

// Array donde guardaremos los gastos
let gastos = [];

// Ruta principal
app.get("/", (req, res) => {
  res.send("API de gastos funcionando 🚀");
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

// Crear gasto
app.post("/gastos", (req, res) => {
  const { descripcion, monto } = req.body;

  const nuevoGasto = {
    id: gastos.length + 1,
    descripcion,
    monto,
    fecha: new Date()
  };

  gastos.push(nuevoGasto);

  res.status(201).json(nuevoGasto);
});

// Listar gastos
app.get("/gastos", (req, res) => {
  res.json(gastos);
});