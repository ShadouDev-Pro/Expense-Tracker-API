# 💰 Expense Tracker API

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Prototype-lightgrey)

API RESTful ligera desarrollada en **Node.js** con **Express** para gestionar gastos en memoria (sin persistencia en base de datos).
Permite crear, listar, obtener, actualizar y eliminar gastos. Está pensada como una base simple para prototipado y aprendizaje.

---

## 🚀 Características

- CRUD completo de gastos (crear, leer, actualizar, eliminar)
- Almacenamiento en memoria (array) — datos volátiles, se pierden al reiniciar
- Validaciones básicas de entrada (descripción obligatoria, monto numérico > 0, categoría obligatoria)
- Estructura modular: controladores y rutas separadas

---

## 🛠️ Tecnologías Utilizadas

- Node.js
- JavaScript (ES6+)
- Express.js

Nota: No hay integración con base de datos, gestión de variables de entorno ni autenticación en la implementación actual.

---

## 📂 Estructura del Proyecto

```
Expense-Tracker-API/
├── controllers/
│   └── gastos.controller.js
├── routes/
│   └── gastos.routes.js
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/ShadouDev-Pro/Expense-Tracker-API.git
cd Expense-Tracker-API
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el servidor

```bash
node index.js
```

El servidor arranca por defecto en `http://localhost:3000`.

> Si prefieres usar `npm start`, añade un script `start` en `package.json` o ejecuta con `npx nodemon index.js` si instalas `nodemon`.

---

## 📌 Endpoints Principales

La API expone los siguientes endpoints en la ruta base `/gastos`:

- `GET /gastos` — Listar todos los gastos
- `GET /gastos/:id` — Obtener un gasto por su `id` (entero)
- `POST /gastos` — Crear un nuevo gasto
	- Body JSON esperado: `{ "descripcion": "string", "monto": number, "categoria": "string" }`
- `PUT /gastos/:id` — Actualizar un gasto existente
	- Body JSON: campos `descripcion`, `monto`, `categoria` (se sobrescriben)
- `DELETE /gastos/:id` — Eliminar un gasto

Ejemplo: crear un gasto

```bash
curl -X POST http://localhost:3000/gastos \
	-H "Content-Type: application/json" \
	-d '{ "descripcion": "Café", "monto": 2.5, "categoria": "Alimentación" }'
```

---

## 🧪 Testing

Actualmente no hay tests automatizados incluidos. El script `npm test` del `package.json` por defecto no ejecuta pruebas.

---

## 🔒 Seguridad y Validación

- Validación básica en cada endpoint (ver `controllers/gastos.controller.js`):
	- `descripcion` y `categoria` son obligatorios y no vacíos
	- `monto` debe ser un número mayor que 0
- No existe sanitización avanzada ni protección contra ataques específicos (p. ej. inyección) en la implementación actual.

Recomendaciones para producción:

- Añadir validación/sanitización con librerías como `Joi` o `express-validator`
- Añadir autenticación/autorización (JWT, OAuth)
- Persistir datos en una base de datos (Postgres, MongoDB, etc.)
- Configurar HTTPS, rate limiting y logging

---

## 📈 Buenas Prácticas Aplicadas

- Separación clara de responsabilidades (rutas / controladores)
- Código simple y fácil de entender, adecuado para prototipos

---

## 📦 Roadmap / Mejoras Futuras

- Integración con base de datos para persistencia
- Añadir manejo de variables de entorno (`dotenv`)
- Documentación de API con Swagger
- Tests automatizados
- Dockerización
- Autenticación y autorización

---

## 👨‍💻 Autor

**ShadouDev**

GitHub: https://github.com/ShadouDev-Pro

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usarlo, modificarlo y distribuirlo libremente.