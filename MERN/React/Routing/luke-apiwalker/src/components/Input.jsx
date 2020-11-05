import React from "react"

const Input = ({ id, setId, thing, setThing, updateSearch }) => {
    const style = {
        width: "50px"
    }

    return (
        <form onSubmit={updateSearch}>
            <label htmlFor="thing">Search for: </label>
            <select name="thing" id="thing" value={thing} onChange={e => setThing(e.target.value)} >
                <option value="" disabled>Please select an option</option>
                <option value="people">People</option>
                <option value="planets" >Planets</option>
                <option value="starships" >Starships</option>
            </select> | <label htmlFor="id">ID: </label>
            <input style={style} type="text" name="id" id="id" value={id} onChange={e => setId(e.target.value)}/>
            <button>Search</button>
        </form>
    );
}

export default Input;