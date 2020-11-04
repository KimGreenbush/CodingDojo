import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import NumberWord from "./components/NumberWord";
import Styled from "./components/Styled";

function App() {
	return (
		<div className="App">
			<Router>
				<Home path="/home" />
				<NumberWord path="/:value" />
				<Styled path="/:word/:tcolor/:bgcolor" />
			</Router>
		</div>
	);
}

export default App;