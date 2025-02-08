import React from 'react'
import { useState, useEffect } from 'react'
import '../Style/Data.css'
import axios from 'axios'

const Data = () => {
    const [todos, setTodos] = useState([]) // Initialize todos state


    useEffect(() => {
        axios.get('http://localhost:3000/get')
            .then(result => setTodos(result.data)) // Update todos state
            .catch(err => console.log(err))
    }, [])

    const handleClick = (id) => {
        axios.put(`http://localhost:3000/update/${id}`) // Use template literal
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleEdit = (task) => {
        const oldtask = task;
        const Newtask = prompt("Enter Todo"); // Prompt default to old task

        if (Newtask.trim() === "") {
            alert("Task cannot be empty");
            return;
        }

        axios.put("http://localhost:3000/edit", { oldtask, Newtask })
            .then(result => {
                location.reload();
            })
            .catch(err => console.log("Error updating task:", err));
    };


    const handleDelete = (id) => {
        if (window.confirm("Delete This Todo ?")) {
            axios.delete(`http://localhost:3000/delete/${id}`)
                .then(result => {
                    location.reload()
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='data'>
            {todos.length === 0
                ?
                <div><p className='para'>No Todos ...</p></div>
                :
                <div className='Todos'>
                    {todos.map(todo => (
                        <div className='section' key={todo._id}> {/* Changed key from todo to todo._id */}
                            <div className='todo'>
                                <div className='todo-data'>
                                    <span onClick={() => handleClick(todo._id)}><input type="checkbox" /></span>
                                    <span className={todo.done ? "line_through" : ""}>{todo.task}</span>
                                </div>
                                <div className='svg'>
                                    <span className="material-symbols-outlined" onClick={() => handleEdit(todo.task)}> edit </span>
                                    <span className="material-symbols-outlined" onClick={() => handleDelete(todo._id)}> delete </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Data
