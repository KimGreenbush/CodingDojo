import React from "react";

const Products = ({products}) => {
    return (
        <div>
            {console.log(products)}
            {products.map((product, idx) =>
                <ul key={idx}>
                    <li>{product.title}</li>
                    <li>{product.price}</li>
                    <li>{product.description}</li>
                </ul>)
            }
        </div>
    )
}

export default Products;