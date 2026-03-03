const express = require("express");
const app = express();

app.use(express.json()); // Permite recibir JSON

// Datos en memoria
let gastos = [];
let nextId = 1;

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
  const { descripcion, monto, categoria } = req.body;

  // Validaciones
  if (!descripcion || descripcion.trim() === "") {
    return res.status(400).json({
      error: "La descripción es obligatoria"
    });
  }

  if (monto === undefined || typeof monto !== "number") {
    return res.status(400).json({
      error: "El monto debe ser un número"
    });
  }

  if (monto <= 0) {
    return res.status(400).json({
      error: "El monto debe ser mayor a 0"
    });
  }

  if (!categoria || categoria.trim() === "") {
  return res.status(400).json({
    error: "La categoría es obligatoria"
    });
  }

  const nuevoGasto = {
    id: nextId++,
    descripcion,
    monto,
    categoria,
    fecha: new Date()
  };

  gastos.push(nuevoGasto);

  res.status(201).json(nuevoGasto);
});

// Listar gastos
app.get("/gastos", (req, res) => {
  res.json(gastos);
});

// Eliminar gasto
app.delete("/gastos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Validar ID
  if (isNaN(id)) {
    return res.status(400).json({
      error: "El ID debe ser un número"
    });
  }

  // Buscar gasto
  const index = gastos.findIndex(gasto => gasto.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Gasto no encontrado"
    });
  }

  // Eliminar gasto
  gastos.splice(index, 1);

  res.json({
    mensaje: "Gasto eliminado correctamente"
  });
});

// Actualizar gasto
app.put("/gastos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { descripcion, monto, categoria } = req.body;

  // Validar ID
  if (isNaN(id)) {
    return res.status(400).json({
      error: "El ID debe ser un número"
    });
  }

  // Buscar gasto
  const gasto = gastos.find(g => g.id === id);

  if (!gasto) {
    return res.status(404).json({
      error: "Gasto no encontrado"
    });
  }

  // Validar descripción
  if (!descripcion || descripcion.trim() === "") {
    return res.status(400).json({
      error: "La descripción es obligatoria"
    });
  }

  // Validar monto
  if (monto === undefined || typeof monto !== "number") {
    return res.status(400).json({
      error: "El monto debe ser un número"
    });
  }

  if (monto <= 0) {
    return res.status(400).json({
      error: "El monto debe ser mayor a 0"
    });
  }

  // Validar categoría
  if (!categoria || categoria.trim() === "") {
    return res.status(400).json({
      error: "La categoría es obligatoria"
    });
  }

  // Actualizar valores
  gasto.descripcion = descripcion;
  gasto.monto = monto;
  gasto.categoria = categoria;

  res.json(gasto);
});