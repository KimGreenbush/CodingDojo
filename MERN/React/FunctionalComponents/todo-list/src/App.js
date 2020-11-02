import "./App.css";
import React, { useState } from "react";
import DoForm from "./components/DoForm";
import Todo from "./components/Todo";

function App() {
    const [doItem, setDoitem] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        setDoitem(...doItem, [e.target.value, false]);
    }

	return (
		<div className="App">
            <DoForm handleSubmit={handleSubmit}/>
            {doItem.map( item => <Todo data={item} />)}
		</div>
	);
}

export default App;
