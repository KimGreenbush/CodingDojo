import React from 'react';

const UserForm = props => {
    const { inputs, setInputs } = props;

    const handleInput = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    return (
		<form>
			<div>
				<label htmlFor="firstname"> First Name: </label>
				<input type="text" name="firstname" id="firstname" onChange={handleInput} />
			</div>
			<div>
				<label htmlFor="lastname"> Last Name: </label>
				<input type="text" name="firstname" id="firstname" onChange={handleInput} />
			</div>
			<div>
				<label htmlFor="email">Email address: </label>
				<input type="email" name="email" id="email" onChange={handleInput} />
			</div>
			<div>
				<label htmlFor="password">Password: </label>
				<input type="password" name="password" id="password" onChange={handleInput} />
			</div>
			<div>
				<label htmlFor="confirmpass">Confirm Password: </label>
				<input type="password" name="confirmpass" id="confirmpass" onChange={handleInput} />
			</div>
			<button type="submit">Create User</button>
		</form>
	);
}

export default UserForm;