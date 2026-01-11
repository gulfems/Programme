import express from 'express';
import { Task } from './models.js';

const taskRouter = express.Router();

// Define your task routes here using taskSchema if needed

taskRouter.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
})

taskRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const task = await Task.findById(id);
    res.send(task);
})

taskRouter.post('/', async (req, res) => {
    const newTask = await Task.create(req.body);
    res.status(201).send(newTask);
});

taskRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.send(updatedTask);
});

taskRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    res.status(204).send();
});

export { taskRouter };