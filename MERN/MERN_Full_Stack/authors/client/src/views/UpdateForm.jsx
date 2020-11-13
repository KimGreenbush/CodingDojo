import React, { useState, useEffect } from "react"
import axios from "axios"
import {navigate} from "@reach/router"
import Form from "../components/Form"

const UpdateForm = ({ id, errors, setErrors }) => {
    const [author, setAuthor] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data)
                setLoaded(true)
            })
            .catch(err => console.log("Error: ", err))
    }, [])

    const updateAuthor = (name) => {
        axios.put(`http://localhost:8000/api/authors/${id}`, name)
            .then((res) => {
                console.log(res)
                navigate("/")
            })
            .catch((err) => {
				const errorRes = err.response.data.errors
				// console.log(errorRes)
				setErrors(Object.keys(errorRes).map((error) => errorRes[error].message))
			})
    }

    return (
        <>
            <p>Edit this author: </p>
            { loaded &&
                (<Form onSubmitProp={updateAuthor} initialName={author.name} errors={errors} setErrors={setErrors} />)
            }
        </>
    )
}

export default UpdateForm