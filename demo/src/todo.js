import React, { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = React.useState([]);
    const [value, setValue] = React.useState("");
    const [edit, setEdit] = useState(false);
    const [editValue, setEditValue] = useState('');


    const handleClick = () => {
        let temp = [...todo, {
            id: Math.floor(Math.random() * 1000),
            value: value,
        }
        ];
        setTodo(temp);
        setValue("");
    }

    const handleDelete = (id) => {

        let temp = [...todo];
        temp = temp.filter(item => id !== item.id)
        setTodo(temp);
    }


    return (
        <>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => handleClick()}>Add</button>
            <ul>
                {/* {todo.map(item => <li key={item.id}>{item.value}
                    {edit ? <h1>edit</h1> : <button onClick={() => handleEdit(item.id)}>Edit</button>}<button onClick={() => handleDelete(item.id)}>Delete</button></li>
                )} */}

                {todo.map(item => <li key={item.id}>
                    {edit ?
                        <>
                            {setEditValue(item.value)}
                            <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                        </>
                        :
                        <h1>{item.value}</h1>}
                    <button onClick={() => { edit ? setEdit(false) : <> {setEdit(true)} </> }}>Edit</button>
                    <button onClick={() => { handleDelete(item.id) }}>Delete</button>
                </li>
                )}
            </ul>
            <br />
            <ul>
                {todo.map(item => <li key={item.id}>{edit ? <> <input type="text" /></> : <><h2>{item.value}</h2><button>Edit</button> </>}</li>)}
            </ul>
        </>
    );
}

export default Todo;