import "./App.css";
import React, { useState, useEffect } from "react";
import GetPoke from "./components/GetPoke";
import DisplayPoke from "./components/DisplayPoke";

function App() {
    const [pokémon, setPokémon] = useState([]);

    useEffect( () => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050")
			.then((res) => console.log("RESPONSE", res))
			.then((res) => res.json())
			.catch((err) => console.log(err))
    }, [])

    // const FetchPoke = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050")
	// 		.then((res) => console.log("RESPONSE", res))
	// 		.then((res) => res.json())
	// 		.catch((err) => console.log(err));
    // }

	return (
		<div className="App">
            <GetPoke FetchPoke={useEffect}/>
            {/* <GetPoke FetchPoke={FetchPoke}/> */}
            <DisplayPoke pokemon={pokémon}/>
		</div>
	);
}

export default App;