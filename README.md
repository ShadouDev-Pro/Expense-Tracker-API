# 💰 Expense Tracker API

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow)

API RESTful desarrollada en **JavaScript (Node.js)** para la gestión de gastos personales.  
Permite a los usuarios registrar, consultar, actualizar y eliminar transacciones financieras, así como organizar sus gastos por categorías.

Este proyecto está diseñado siguiendo buenas prácticas de arquitectura backend, principios REST y una estructura modular escalable.

---

## 🚀 Características

- ✅ CRUD completo de gastos
- ✅ Gestión de categorías
- ✅ Arquitectura modular
- ✅ Validación de datos
- ✅ Manejo centralizado de errores
- ✅ Configuración mediante variables de entorno
- ✅ Preparado para autenticación con JWT (opcional)
- ✅ Base lista para escalar

---

## 🛠️ Tecnologías Utilizadas

- **Node.js**
- **JavaScript (ES6+)**
- **Express.js**
- **Base de datos** (MongoDB / PostgreSQL / MySQL)
- **dotenv**
- **JWT** (opcional)
- **Jest / Mocha** (testing)

---

## 📂 Estructura del Proyecto

```
expense-tracker-api/
│
├── index.js
├── package-lock.json
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Instalación y Configuración

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/ShadouDev-Pro/Expense-Tracker-API.git
cd Expense-Tracker-API
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto basado en `.env.example`:

```env
PORT=3000
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### 4️⃣ Ejecutar el servidor

Modo desarrollo:

```bash
npm run dev
```

Modo producción:

```bash
npm start
```

Servidor disponible por defecto en:

```
http://localhost:3000
```

---

## 📌 Endpoints Principales

| Método | Endpoint            | Descripción                  |
|--------|--------------------|------------------------------|
| GET    | /api/gastos      | Obtener todos los gastos     |
| GET    | /api/gastos/:id  | Obtener un gasto por ID      |
| POST   | /api/gastos      | Crear un nuevo gasto         |
| PUT    | /api/gastos/:id  | Actualizar un gasto          |
| DELETE | /api/gastos/:id  | Eliminar un gasto            |

---

## 🧪 Testing

Para ejecutar las pruebas:

```bash
npm test
```

---

## 🔒 Seguridad

- Validación de datos en cada endpoint
- Sanitización de inputs
- Manejo centralizado de errores
- Uso de variables de entorno
- Preparado para autenticación con JWT
- Separación clara de responsabilidades

---

## 📈 Buenas Prácticas Aplicadas

- Arquitectura modular
- Separación Controller / Service / Model
- Código limpio y mantenible
- Uso de async/await
- Manejo consistente de errores
- Configuración desacoplada del entorno
- Preparado para escalar horizontalmente

---

## 📦 Roadmap / Mejoras Futuras

- 📘 Documentación con Swagger
- 🐳 Dockerización
- 📊 Logging estructurado
- 🔐 Implementación completa de autenticación
- 🚦 Rate limiting
- 🔁 CI/CD pipeline
- 📱 Integración con frontend

---

## 👨‍💻 Autor

**ShadouDev**

GitHub: https://github.com/ShadouDev-Pro  

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.  
Puedes usarlo, modificarlo y distribuirlo libremente.