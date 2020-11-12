import React from "react"
import DeleteButton from "../components/DeleteButton"
import {Link} from "@reach/router"

const Authors = ({ authors, setAuthors}) => {
    const removeAuthor = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {authors.map((author, idx) =>
                    <tr key={idx}>
                        <td>{author.name}</td>
                        <td><Link to={`/edit/${author._id}`}><button>Edit</button></Link></td>
                        <td><DeleteButton authorId={author._id} successCallback={() => removeAuthor(author._id)} /></td>
                    </tr>)}
            </tbody>
        </table>
    )
}

export default Authors