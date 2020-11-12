import React, { useState, useEffect } from "react"
import axios from "axios"
import Form from "../components/Form"

const UpdateForm = ({ id }) => {
    const [author, setAuthor] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthor(res.data))
            .catch(err => console.log("Error: ", err))
    }, [])

    const updateAuthor = author => {
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
            .then(res => console.log(res))
    }

    return (
            <Form onSubmitProp={updateAuthor} initialName={author.name} />
    )
}

export default UpdateForm