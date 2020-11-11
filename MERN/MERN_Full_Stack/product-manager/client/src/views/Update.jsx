import React, {useState, useEffect} from "react";
import axios from "axios";
import {navigate, Link} from "@reach/router"

const Update = ({ id }) => {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log("Error: ", err))
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title, price, description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        navigate("/products")
    }

    return (
        <>
            <form onSubmit={updateProduct}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" id="price" value={price} onChange={e => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="desc">Description: </label>
                    <input type="text" name="description" id="desc" value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            <Link to="/products" ><button>Go Back</button></Link>
            </>
    )
}

export default Update;