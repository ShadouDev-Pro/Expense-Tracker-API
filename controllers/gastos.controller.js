let gastos = [];
let nextId = 1;

// Crear gasto
const crearGasto = (req, res) => {
  const { descripcion, monto, categoria } = req.body;

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
};

// Listar gastos
const listarGastos = (req, res) => {
  res.json(gastos);
};

// Obtener gasto
const obtenerGasto = (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      error: "El ID debe ser un número"
    });
  }

  const gasto = gastos.find(g => g.id === id);

  if (!gasto) {
    return res.status(404).json({
      error: "Gasto no encontrado"
    });
  }

  res.json(gasto);
};

// Actualizar gasto
const actualizarGasto = (req, res) => {
  const id = parseInt(req.params.id);
  const { descripcion, monto, categoria } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({
      error: "El ID debe ser un número"
    });
  }

  const gasto = gastos.find(g => g.id === id);

  if (!gasto) {
    return res.status(404).json({
      error: "Gasto no encontrado"
    });
  }

  gasto.descripcion = descripcion;
  gasto.monto = monto;
  gasto.categoria = categoria;

  res.json(gasto);
};

// Eliminar gasto
const eliminarGasto = (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      error: "El ID debe ser un número"
    });
  }

  const index = gastos.findIndex(g => g.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Gasto no encontrado"
    });
  }

  gastos.splice(index, 1);

  res.json({
    mensaje: "Gasto eliminado correctamente"
  });
};

module.exports = {
  crearGasto,
  listarGastos,
  obtenerGasto,
  actualizarGasto,
  eliminarGasto
};