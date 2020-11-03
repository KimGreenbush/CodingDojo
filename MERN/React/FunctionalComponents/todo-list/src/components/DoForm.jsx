import React from "react";

const DoForm = ({handleSubmit, input, setInput}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Add Todo: </label>
            <input type="text" name="todo" id="todo" value={input} onChange={e => setInput(e.target.value)}/>
            <button>Add</button>
        </form>
    );
}

export default DoForm;