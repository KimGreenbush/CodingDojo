import React, { useState } from "react"
import {Link} from "@reach/router"

const Form = ({initialName, onSubmitProp, errors, setErrors}) => {
    const [name, setName] = useState(initialName)

    const submitHandler = e => {
        e.preventDefault()
        onSubmitProp({ name })
    }

    const clearForm = () => {
        setErrors([])
    }

    return (
        <>
            {errors.map((error, idx) => <p key={idx}>{error}</p>)}
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Author Name: </label>
                <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
                <button>Submit</button>
                <Link to="/" onClick={clearForm}><button>Cancel</button></Link>
            </form>
        </>
    )
}

export default Form