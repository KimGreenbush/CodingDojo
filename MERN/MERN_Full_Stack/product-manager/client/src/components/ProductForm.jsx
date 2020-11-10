import React, { useState } from "react";
import axios from "axios";

const ProductForm = props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/new", {
            title, price, description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="price">Price: </label>
                <input type="text" name="price" id="price" onChange={e => setPrice(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="desc">Description: </label>
                <input type="text" name="description" id="desc" onChange={e => setDescription(e.target.value)}/>
            </div>
            <input type="submit" />
        </form>
    )
}

export default ProductForm;