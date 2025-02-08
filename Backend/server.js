import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { todo } from "./Model/schema.js";

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/todo')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.post('/add', (req, res) => {
    // console.log(req.body.task)
    const task = req.body.task
    todo.create({
        task: task
    }).then(result => res.json(result))
        .catch(err => res.json(err))
})

app.get('/get', (req, res) => {
    todo.find()
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    todo.findByIdAndUpdate(id)
        .then(todoItem => {
            todoItem.done = !todoItem.done; // Toggle the done state
            return todoItem.save();
        })
        .then(result => res.json(result))
        .catch(err => res.json(err));
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    todo.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err));
})

app.put('/edit', async (req, res) => {
    const { oldtask, Newtask } = req.body;

    if (!oldtask || !Newtask) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const updatedTodo = await todo.findOneAndUpdate(
        { task: oldtask },  // Find task by oldtask
        { task: Newtask },  // Update to new task
        { new: true }       // Return updated document
    );

    if (!updatedTodo) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.json(updatedTodo);
});


app.listen(3000, "0.0.0.0", () => {
    console.log('Server is Running on all network interfaces');
});
