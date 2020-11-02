import "./App.css";
import React, { useState } from "react";
import Tab from "./components/Tab";
import Display from "./components/Display";

function App() {
    const [tab1, setTab1] = useState(["Tab1", ""]);
    const [tab2, setTab2] = useState(["Tab2", ""]);
    const [tab3, setTab3] = useState(["Tab3", ""]);

    const clicked = e => {
        if (e.target.innerHTML === "Tab1") {
            setTab1(["Tab1", "Tab1 content"]);
            setTab2(["Tab2", ""]);
            setTab3(["Tab3", ""]);
        }
        if (e.target.innerHTML === "Tab2") {
            setTab2(["Tab2", "Tab2 content"]);
            setTab1(["Tab1", ""]);
            setTab3(["Tab3", ""]);
        }
        if (e.target.innerHTML === "Tab3") {
            setTab3(["Tab3", "Tab3 content"]);
            setTab1(["Tab1", ""]);
            setTab2(["Tab2", ""]);
        }
    };

	return (
		<div className="App">
			<Tab tab={tab1[0]} switchTab={clicked} />
			<Tab tab={tab2[0]} switchTab={clicked} />
			<Tab tab={tab3[0]} switchTab={clicked} />
			<Display data={tab1[1]} />
			<Display data={tab2[1]} />
            <Display data={tab3[1]} />
		</div>
	);
}

export default App;