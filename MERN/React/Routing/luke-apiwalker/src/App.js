import "./App.css";
import Profile from "./components/Profile";
import Input from "./components/Input";
import { Router, navigate } from "@reach/router";
import React, { useState } from "react";

function App() {

    const [id, setId] = useState("");
    const [thing, setThing] = useState("");

    const updateSearch = e => {
        e.preventDefault();
        navigate(`/${thing}/${id}`);
        setId("");
    }

    return <div className="App">
        <Input id={id} setId={setId} thing={thing} setThing={setThing} updateSearch={updateSearch}/>
        <Router>
            <Profile path="/:thing/:id" />
        </Router>
    </div>;
}

export default App;