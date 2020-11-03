import React from "react";

const Todo = ({todo, handleComplete, handleDelete}) => {
    const style = {
        listStyle: "none",
    }

    const style2 = {
        listStyle: "none",
        textDecoration: "line-through",
    }

    return (
        <ul>

            {todo.map((item, i) =>
                item[1] ?
                <li key={i} style={style2}>
                    <input type="checkbox" checked={item[1]} onChange={e => handleComplete(i)}/>
                    {item} |
                    <button>Delete</button>
                </li> :
                <li key={i} style={style}>
                        <input type="checkbox" checked={item[1]} onChange={e => handleComplete(i)}/>
                    {item} |
                    <button onClick={e => handleDelete(i)} >Delete</button>
                </li>
            )}
        </ul>
    );
}

export default Todo;