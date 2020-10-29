import React, {useState} from  'react';

const UserForm = props => {
    const [valError, setValError] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpass: ""
    });
    const [state, setState] = useState({
        firstname: "",
		lastname: "",
		email: "",
		password: "",
		confirmpass: ""
    });

    const createUser = (e) => {
        e.preventDefault();
        setState({
            ...state, [e.target.name]: e.target.value
        });
        const { firstname, lastname, email, password } = state;
        const newUser = { firstname, lastname, email, password };
        console.log("Welcome", newUser);
    };

    const handleFirstName = e => {
        setState({
            ...state, [e.target.name]: e.target.value
        });
        if (state.firstname.length === 0) {
            setValError({
                ...valError, firstname: "",
            });
        } else if (state.firstname.length < 2) {
            setValError({
                ...valError, firstname: "First name must be at least 2 characters",
            });
        } else {
            setValError({
                ...valError, firstname: "",
            });
        }
    };

    const handleLastName = e => {
        setState({
            ...state, [e.target.name]: e.target.value
        });
        if (state.lastname.length === 0) {
            setValError({
                ...valError, firstname: "",
            });
        } else if (state.lastname.length < 2) {
			setValError({
				...valError, lastname: "Last name must be at least 2 characters",
			});
		} else {
            setValError({
                ...valError, lastname: "",
            });
        }
    };

    const handleEmail = e => {
        setState({
            ...state, [e.target.name]: e.target.value
        });
        if (state.email.length < 5) {
			setValError({
				...valError, email: "Email must be at least 5 characters",
			});
		} else {
            setValError({
                ...valError, email: "",
            });
        }
    };

    const handlePassword = e => {
        setState({
            ...state, [e.target.name]: e.target.value
        });
        if (state.password.length < 8) {
			setValError({
				...valError, password: "Password must be at least 8 characters",
			});
		} else {
            setValError({
                ...valError, password: "",
            });
        }
    };

    const handleConfirmPass = e => {
        setState({
            ...state, [e.target.name]: e.target.value
        });
        if (state.confirmpass !== state.password) {
			setValError({
				...valError, confirmpass: "Passwords must match",
			});
		} else {
            setValError({
                ...valError, confirmpass: "",
            });
        }
    };

    return (
		<form onsubmit={createUser}>
			<div>
				{valError.firstname ? <p style={{ color: "red" }}>{valError.firstname}</p> : ""}
				<label htmlFor="firstname"> First Name: </label>
				<input type="text" name="firstname" id="firstname" onChange={handleFirstName} />
			</div>
			<div>
				{valError.lastname ? <p style={{ color: "red" }}>{valError.lastname}</p> : ""}
				<label htmlFor="lastname"> Last Name: </label>
				<input type="text" name="lastname" id="lastname" onChange={handleLastName} />
			</div>
			<div>
				{valError.email ? <p style={{ color: "red" }}>{valError.email}</p> : ""}
				<label htmlFor="email">Email address: </label>
				<input type="email" name="email" id="email" onChange={handleEmail} />
			</div>
			<div>
				{valError.password ? <p style={{ color: "red" }}>{valError.password}</p> : ""}
				<label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={handlePassword} />
			</div>
			<div>
				{valError.confirmpass ? <p style={{ color: "red" }}>{valError.confirmpass}</p> : ""}
				<label htmlFor="confirmpass">Confirm Password: </label>
				<input type="password" name="confirmpass" id="confirmpass" onChange={handleConfirmPass} />
			</div>
			<button type="submit">Create User</button>
		</form>
	);
};

export default UserForm;