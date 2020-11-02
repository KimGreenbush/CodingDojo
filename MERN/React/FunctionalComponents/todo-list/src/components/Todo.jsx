import React from "react";

const Todo = ({data}) => {
    return (
        <ul>
            {/* needs a checkbox and delete function */}
            {data.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    );
}

export default Todo;