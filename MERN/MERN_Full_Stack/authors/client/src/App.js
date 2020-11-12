import "./App.css";
import { Router } from "@reach/router";
import Main from "./views/Main";
import Form from "./views/Form";

function App() {
	return (
		<div className="App">
			<h1>Favorite authors</h1>
			<Router>
				<Main path="/" />
				<Form path="/new" />
				<Form path="/edit/:id" />
			</Router>
		</div>
	);
}

export default App;
