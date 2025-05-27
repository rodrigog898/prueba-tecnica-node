require('dotenv').config();
const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

// Rutas
app.use('/api', taskRoutes);
app.use(express.static('public'));


// Middleware de manejo de errores
app.use(errorHandler);

module.exports = app;