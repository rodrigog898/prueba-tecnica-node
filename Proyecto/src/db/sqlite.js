require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbFile = process.env.DB_PATH || 'tasks.db';
const DBSOURCE = path.join(__dirname, '..', dbFile);

const db = new sqlite3.Database(DBSOURCE, err => {
  if (err) {
    console.error('Error al conectar SQLite:', err.message);
    process.exit(1);
  }
  console.log('Conectado a SQLite:', DBSOURCE);
});

const createTable = `
CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL CHECK(length(titulo) <= 100),
  descripcion TEXT CHECK(length(descripcion) <= 500),
  status TEXT NOT NULL DEFAULT 'pendiente',
  fechaCreacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fechaActualizacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`;

db.run(createTable, err => {
  if (err) console.error('Error creando tabla tasks:', err.message);
  else console.log('Tabla tasks lista');
});

module.exports = db;