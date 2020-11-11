import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "@reach/router";

const ProductDetails = ({ id, deleteProduct }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {setProduct(res.data)})
            .catch(err => console.log("Error: ", err))
    }, []);

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/${id}/edit`} ><button>Edit</button></Link>
            <button onClick={e => deleteProduct(product._id)}>Delete</button>
            <Link to="/products" ><button>Go Back</button></Link>
        </div>
    )
}

export default ProductDetails;