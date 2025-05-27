const express = require('express');
const router = express.Router();
const { handleCreateTask, handleGetTasks, handleUpdateTask, handleDeleteTask } = require('../controllers/taskController');

// POST /tasks
router.post('/tasks', handleCreateTask);

router.get('/tasks', handleGetTasks);

router.put('/tasks/:id', handleUpdateTask);

router.delete('/tasks/:id', handleDeleteTask);

module.exports = router;