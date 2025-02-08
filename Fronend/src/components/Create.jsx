import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../Style/Create.css'

const create = () => {
    const [task, setTask] = useState()

    const HandleClick = () => {
        axios.post('http://localhost:3000/add', { task: task })
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            HandleClick();
        }
    };



    return (
        <div className='create'>
            <input type="text" name="text" id="" placeholder='Enter Todo...'
                onChange={(e) => setTask(e.target.value)} onKeyPress={handleKeyPress} />
            <button onClick={HandleClick}>Add</button>
        </div>
    )
}

export default create
