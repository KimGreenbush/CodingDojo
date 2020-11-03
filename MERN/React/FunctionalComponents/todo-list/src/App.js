import "./App.css";
import React, { useState } from "react";
import DoForm from "./components/DoForm";
import Todo from "./components/Todo";

function App() {
    const [doList, setDoList] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setDoList([...doList, [e.target[0].value, false]]);
        setInput("");
    }

    const handleComplete = i => {
        let item = [...doList];
        item[i][1] = !item[i][1];
        setDoList(item);
    }

    const handleDelete = i => {
        setDoList(doList.filter(item => item !== doList[i]));
    }

	return (
        <div className="App">
            <DoForm handleSubmit={handleSubmit} input={input} setInput={setInput}/>
            <Todo todo={doList} handleComplete={handleComplete} handleDelete={handleDelete}/>
		</div>
	);
}

export default App;