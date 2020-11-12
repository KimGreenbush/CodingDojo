import React from "react"
import {Link} from "@reach/router"

const Authors = ({ authors }) => {
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
                        <td><button>Delete</button></td>
                    </tr>)}
            </tbody>
        </table>
    )
}

export default Authors