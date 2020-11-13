import React from "react"
import Form from "../components/Form"

const AddForm = ({ onSubmitProp, errors, setErrors }) => {

    return (
        <>
            <p>Add a new author: </p>
            <Form onSubmitProp={onSubmitProp} initialName="" errors={errors} setErrors={setErrors} />
        </>
    )
}

export default AddForm