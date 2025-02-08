import mongoose from "mongoose"
const todoschema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

export const todo = mongoose.model('todo', todoschema)