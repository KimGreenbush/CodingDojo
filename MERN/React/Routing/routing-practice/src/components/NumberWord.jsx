import React from "react";

const NumberWord = ({value}) => {
    return(
        <div>
            {
                isNaN(value) ? <p>The word is: {value}</p> : <p>The number is: {value}</p>
            }
        </div>
    );
}

export default NumberWord;