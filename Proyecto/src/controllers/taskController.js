const { createTask , getTasks, updateTask, deleteTask} = require('../models/taskModel');

async function handleCreateTask(req, res, next) {
  try {
    const { titulo, descripcion } = req.body;
    if (!titulo) return res.status(400).json({ error: 'Campo titulo es obligatorio' });

    const task = await createTask(titulo, descripcion);
    res.status(201).json(task);

    const io = req.app.get('io');
     io.emit('newTask', task);
  } catch (err) {
    next(err);
  }
}


async function handleGetTasks(req, res, next) {
  try {
    const tasks = await getTasks();
    res.status(200).json(tasks);
    const io = req.app.get('io');
    io.emit('tasksFetched', tasks);
  } catch (err) {
    next(err);
  }
}


async function handleUpdateTask(req, res, next) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (status === undefined) {
      return res
        .status(400)
        .json({ error: 'Debe enviar el campo "status" en el body' });
    }

    // actualiza sólo el status
    const task = await updateTask(id, undefined, undefined, status);

    // responde con la tarea completa (opcional)
    res.status(200).json(task);

    // ¡EMIT modificado para enviar sólo id y status!
    const io = req.app.get('io');
    io.emit('taskUpdated', { id: task.id, status: task.status });
  } catch (err) {
    next(err);
  }
}



async function handleDeleteTask(req, res, next) {
  try {
    const { id } = req.params;
    const result = await deleteTask(id);
    res.status(200).json(result);

    const io = req.app.get('io');
    io.emit('taskDeleted', { id });
  } catch (err) {
    next(err);
  }
}

module.exports = { handleCreateTask, handleGetTasks , handleUpdateTask, handleDeleteTask};