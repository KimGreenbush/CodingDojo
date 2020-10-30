import React from "react";

const FormData = ({ data }) => { //destructured from param! {data} = props;
    const {firstname, lastname, email, password, confirmpass} = data;

    return (
        <div>
            <h3>Your Form Data</h3>
            <p>First Name {firstname}</p>
            <p>Last Name {lastname}</p>
            <p>Email {email}</p>
            <p>Password {password}</p>
            <p>Confirm Password {confirmpass}</p>
        </div>
    );
}

export default FormData;