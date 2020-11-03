import React from "react"

const GetPoke = ({FetchPoke}) => {
    return(
        <button onClick={FetchPoke}>
            Fetch Pokémon
        </button>
    )
}

export default GetPoke