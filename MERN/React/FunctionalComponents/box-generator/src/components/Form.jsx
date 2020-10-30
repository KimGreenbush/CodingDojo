import React  from "react";

const Form = props => {

    return (
        <div>
            <form onSubmit={props.createBox}>
                <label htmlFor="color">Color </label>
                <input type="text" name="color" id="color"/>
                <button>Add</button>
            </form>
        </div>
    );

}

export default Form;