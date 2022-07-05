const express = require('express');
const router = express.Router();
const controllerTask = require('../controller/tasks');;

router.route('/').get(controllerTask.getAllTasks);
router.route('/').post(controllerTask.createTask);
router.route('/:id').get(controllerTask.getSingleTask);
router.route('/:id').patch(controllerTask.updateTask); // patch work for partial update
router.route('/:id').delete(controllerTask.deleteTask);




module.exports = router;