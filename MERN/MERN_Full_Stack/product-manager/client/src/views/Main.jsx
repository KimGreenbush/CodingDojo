import React, {useState, useEffect} from "react";
import ProductForm from "../components/ProductForm";
import Products from "../components/Products";
import axios from "axios";

const Main = props => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => { setProducts(res.data)})
            .catch(err => console.log("Error: ", err))
    }, []);

    return (
        <div>
            <ProductForm />
            <Products products={products} />
        </div>
    )
}

export default Main;