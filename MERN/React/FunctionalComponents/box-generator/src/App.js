import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import Box from "./components/Box";

function App() {
    const [boxColor, setBoxColor] = useState([]);
    // const [inputValue, setInputValue] = useState("");

	const createBox = (e) => {
		e.preventDefault();
        let color = e.target[0].value;
        if (color.length > 0) {
            setBoxColor([...boxColor, color]);
        }
        // setInputValue("");
	};

	return (
		<div className="App">
            <Form createBox={createBox}/>
			<div>
				{boxColor.map((color, i) => (
					<div className="lego" key={i}>
						<Box color={color} />
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
