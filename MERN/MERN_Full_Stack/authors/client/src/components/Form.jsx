import React, { useState } from "react"
import {Link} from "@reach/router"

const Form = ({initialName, onSubmitProp}) => {
    const [name, setName] = useState("")

    const submitHandler = e => {
        e.preventDefault()
        onSubmitProp({name})
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Author Name: </label>
            <input type="text" name="name" id="name" value={initialName} onChange={e => setName(e.target.value)} />
            <button>Submit</button>
            <Link to="/"><button>Cancel</button></Link>
        </form>
    )
}

export default Form