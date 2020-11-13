import React from "react"
import axios from "axios"

const DeleteButton = ({authorId, successCallback}) => {
    const deleteAuthor = e => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => successCallback())
    }

    return (
        <button onClick={deleteAuthor}>Delete</button>
    )
}

export default DeleteButton