import "./App.css";
import React, { useState } from "react";
import GetPoke from "./components/GetPoke";
import DisplayPoke from "./components/DisplayPoke";

function App() {
    const [pokémon, setPokémon] = useState([]);

    const FetchPoke = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050")
            .then(res => res.json())
            .then(res => setPokémon(res.results))
            .catch(err => console.log(err));
    }

	return (
		<div className="App">
            <GetPoke FetchPoke={FetchPoke}/>
            <DisplayPoke pokemon={pokémon}/>
		</div>
	);
}

export default App;