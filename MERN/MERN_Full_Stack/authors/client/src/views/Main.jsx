import React, {useEffect} from "react"
import Authors from "./components/Authors"
import { Link } from "@reach/router"
import axios from "axios"

const Main = ({authors, setAuthors}) => {
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data))
            .catch(err => console.log("Error: ", err))
    }, [])

    return (
        <>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            <Authors authors={authors} setAuthors={setAuthors} />
        </>
    )
}

export default Main