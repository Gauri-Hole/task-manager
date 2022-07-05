const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (e) {
        res.status(500).json({ msg: e });
    }
}


const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (e) {
        res.status(500).json({ msg: e });
    }
}

const getSingleTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findOne({ _id: taskId });
        if (!task) {
            return res.status(404).json({ msg: 'No task with id: ${taskID}' });
        }
        res.status(200).json(task);
    } catch (e) {
        res.status(500).json({ msg: e });
    }
}

const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const name = req.body.name;
        const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {new:true, runValidators: true} );
        if (!task) {
            return res.status(404).json({ msg: 'No task with id: ${taskID}' });
        }
        res.status(200).json({id: taskId, data: task});
    } catch (e) {
        res.status(500).json({ msg: e });
    }
}

const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findOneAndDelete({ _id: taskId });
        if (!task) {
            return res.status(404).json({ msg: 'No task with id: ${taskID}' });
        }
        res.status(200).json(task);
    } catch (e) {
        res.status(500).json({ msg: e });
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}