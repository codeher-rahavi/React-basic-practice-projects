const express = require('express');
const taskRouter = express.Router();

const {addNewTask, getAllTasks,deleteTask, updateTask} = require('../controllers/task-controller');


taskRouter.post('/add-new-task',addNewTask);
taskRouter.get('/get-all-tasks-by-user-id/:id',getAllTasks);
taskRouter.delete('/delete-task/:id',deleteTask);
taskRouter.put('/update-task',updateTask);




module.exports = taskRouter;