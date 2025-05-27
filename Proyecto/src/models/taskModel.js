const db = require('../db/sqlite');


function createTask(titulo, descripcion) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO tasks (titulo, descripcion) VALUES (?, ?)`;
    db.run(sql, [titulo, descripcion || null], function(err) {
      if (err) return reject(err);
      db.get(`SELECT * FROM tasks WHERE id = ?`, [this.lastID], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  });
}


function getTasks() {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM tasks`;
    db.all(sql, [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function updateTask(id, titulo, descripcion, status) {
  return new Promise((resolve, reject) => {
    const sql = `
      UPDATE tasks
      SET
        titulo = COALESCE(?, titulo),
        descripcion = COALESCE(?, descripcion),
        status = COALESCE(?, status),
        fechaActualizacion = CURRENT_TIMESTAMP
      WHERE id = ?
    `;
    db.run(sql, [titulo, descripcion, status, id], function(err) {
      if (err) return reject(err);
      if (this.changes === 0) return reject(new Error('No se encontró la tarea con el ID proporcionado'));
      db.get(`SELECT * FROM tasks WHERE id = ?`, [id], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  });
}


function deleteTask(id) {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM tasks WHERE id = ?`;
    db.run(sql, [id], function(err) {
      if (err) return reject(err);
      if (this.changes === 0) return reject(new Error('No se encontró la tarea con el ID proporcionado'));
      resolve({ message: 'Tarea eliminada correctamente' });
    });
  });
}


module.exports = { createTask , getTasks , updateTask , deleteTask };