import React, {useEffect} from "react";
import ProductForm from "../components/ProductForm";
import Products from "../components/Products";
import axios from "axios";

const Main = ({products, setProducts, deleteProduct}) => {
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setProducts(res.data))
            .catch(err => console.log("Error: ", err))
    }, []);

    const addProduct = product => {
        setProducts([...products, product]);
    }

    return (
        <div>
            <ProductForm addProduct={addProduct} />
            <Products products={products} deleteProduct={deleteProduct} />
        </div>
    )
}

export default Main;