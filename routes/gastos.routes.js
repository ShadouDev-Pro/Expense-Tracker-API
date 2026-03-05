const express = require("express");
const router = express.Router();

const gastosController = require("../controllers/gastos.controller");

router.post("/", gastosController.crearGasto);
router.get("/", gastosController.listarGastos);
router.get("/:id", gastosController.obtenerGasto);
router.put("/:id", gastosController.actualizarGasto);
router.delete("/:id", gastosController.eliminarGasto);

module.exports = router;