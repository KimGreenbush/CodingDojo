import "./App.css";
import { Router } from "@reach/router";
import Main from "./views/Main";
import ProductDetails from "./views/ProductDetails";

function App() {
	return (
		<div className="App">
			<Router>
				<Main path="/products" />
				<ProductDetails path="/product/:id" />
			</Router>
		</div>
	);
}

export default App;
