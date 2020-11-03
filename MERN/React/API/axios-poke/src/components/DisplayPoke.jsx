import React from "react"

const DisplayPoke = ({ pokemon }) => {
    return(
        <ol>
            {
                pokemon.map((poke, i) => <li key={i}>{poke.name}</li>)
            }
        </ol>
    )
}

export default DisplayPoke