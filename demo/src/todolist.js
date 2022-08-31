import React, { useState } from 'react';

const Todolist = () => {
    const [activity, setActivity] = useState("");
    const [todo, setTodo] = useState([]);

    const addlist = () => {
        let temp = [...todo]
        temp.push(activity);
        setTodo(temp);
        console.log(todo);
        console.log(temp);
        setActivity("");
    }
    const deletelist = () => {
        let temp = [...todo]
        temp.pop();
        setTodo(temp);
        console.log(todo);
        console.log(temp);
    }
    return (
        <div>
            <input type="text" value={activity} onChange={(e) => setActivity(e.target.value)} placeholder="Add a Todo List" /><br />
            <button type="button" onClick={() => addlist()}>Add Task</button>
            <button type="button" onClick={() => deletelist()}>Delete Task</button>
            <ul>
                {todo.map((items) =>
                    <li>{items}</li>
                )}
            </ul>
        </div>
    );
}

export default Todolist;