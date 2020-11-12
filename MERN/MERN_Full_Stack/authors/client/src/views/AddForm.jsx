import React from "react"
import Form from "../components/Form"

const AddForm = ({ createAuthor }) => {

    return (
        <Form onSubmitProp={createAuthor}  initialName="" />
    )
}

export default AddForm