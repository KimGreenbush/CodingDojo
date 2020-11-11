import React from "react";
import { Link } from "@reach/router";

const Products = ({ products, deleteProduct }) => {
    return (
        <div>
            {console.log(products)}
            <h1>Products</h1>
            {products.map((product, idx) =>
                <p key={idx}><Link to={`/products/${product._id}`}>{product.title}</Link> | <button onClick={e => deleteProduct(product._id)}>Delete</button></p>
            )}
        </div>
    )
}

export default Products;