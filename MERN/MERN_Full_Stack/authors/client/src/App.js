import "./App.css";
import React, { useState } from "react";
import { Router } from "@reach/router";
import axios from "axios"
import Main from "./views/Main";
import AddForm from "./views/AddForm";
import UpdateForm from "./views/UpdateForm";

function App() {
        const [authors, setAuthors] = useState([]);

    const createAuthor = author => {
        axios.post("http://localhost:8000/api/authors/new", author)
            .then(res => {setAuthors([...authors, res.data])})
    }

	return (
		<div className="App">
			<h1>Favorite authors</h1>
			<Router>
				<Main path="/" authors={authors} setAuthors={setAuthors} />
				<AddForm path="/new" onSubmitProp={createAuthor} />
				<UpdateForm path="/edit/:id" />
			</Router>
		</div>
	);
}

export default App;
