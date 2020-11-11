import React, { useState } from "react";
import axios from "axios";

const ProductForm = ({addProduct}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const submitHandler = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/product/new", {
        title, price, description
    })
        .then(res => addProduct(res.data))
        .catch(err => console.log(err));
        setTitle("");
        setPrice(0);
        setDescription("");
    }

    return (
        <>
            <h2>Product Manager</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" step="0.01" name="price" id="price" value={price} onChange={e => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="desc">Description: </label>
                    <input type="text" name="description" id="desc" value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
                <input type="submit" />
            </form>
        </>
    )
}

export default ProductForm;