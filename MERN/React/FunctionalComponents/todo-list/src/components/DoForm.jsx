import React from "react";

const DoForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="todo">Add Todo: </label>
            <input type="text" name="todo" id="todo"/>
            <button>Add</button>
        </form>
    );
}

export default DoForm;