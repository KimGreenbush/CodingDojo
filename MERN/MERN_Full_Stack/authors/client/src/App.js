import "./App.css";
import React, { useState } from "react";
import { Router, navigate } from "@reach/router";
import axios from "axios"
import Main from "./views/Main";
import AddForm from "./views/AddForm";
import UpdateForm from "./views/UpdateForm";

function App() {
	const [authors, setAuthors] = useState([]);
	const [errors, setErrors] = useState([]);

    const createAuthor = author => {
        axios.post("http://localhost:8000/api/authors/new", author)
			.then((res) => {
				setAuthors([...authors, res.data]);
				setErrors([])
				navigate("/")
			})
			.catch((err) => {
				const errorRes = err.response.data.errors
				// console.log(errorRes)
				setErrors(Object.keys(errorRes).map((error) => errorRes[error].message))
			})
	}

	return (
		<div className="App">
			<h1>Favorite authors</h1>
			<Router>
				<Main path="/" authors={authors} setAuthors={setAuthors} />
				<AddForm path="/new" onSubmitProp={createAuthor} errors={errors} setErrors={setErrors} />
				<UpdateForm path="/edit/:id" errors={errors} setErrors={setErrors} />
			</Router>
		</div>
	);
}

export default App;
