import React from "react";
import { Link } from "@reach/router";

const Products = ({products}) => {
    return (
        <div>
            {console.log(products)}
            {products.map((product, idx) =>
                <p key={idx}><Link to={`/product/${product._id}`}>{product.title}</Link></p>)
            }
        </div>
    )
}

export default Products;