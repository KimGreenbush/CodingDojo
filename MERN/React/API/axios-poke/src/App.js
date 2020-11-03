import "./App.css";
import React, { useState } from "react";
import GetPoke from "./components/GetPoke";
import DisplayPoke from "./components/DisplayPoke";
import axios from "axios";

function App() {
	const [pokémon, setPokémon] = useState([]);

	const FetchPoke = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050")
            .then((res) => setPokémon(res.data.results));
	};

	return (
		<div className="App">
			<GetPoke FetchPoke={FetchPoke} />
			<DisplayPoke pokemon={pokémon} />
		</div>
	);
}

export default App;
