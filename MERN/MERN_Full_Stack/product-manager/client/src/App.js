import "./App.css";
import { useState } from "react";
import { Router, navigate } from "@reach/router";
import Main from "./views/Main";
import ProductDetails from "./views/ProductDetails";
import Update from "./views/Update";
import axios from "axios";

function App() {
    const [products, setProducts] = useState([]);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then((res) => removeProduct(id))
            .catch((err) => console.log(err));
        navigate("/products");
    };

	const removeProduct = (id) => {
		setProducts(products.filter(product => product._id !== id));
	};

	return (
		<div className="App">
			<Router>
                <Main path="/products" products={products} setProducts={setProducts}  deleteProduct={deleteProduct} />
				<ProductDetails path="/products/:id" deleteProduct={deleteProduct} />
				<Update path="/products/:id/edit" />
			</Router>
		</div>
	);
}

export default App;
