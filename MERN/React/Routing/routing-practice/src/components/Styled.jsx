import React from "react";

const Styled = ({ word, tcolor, bgcolor }) => {

    const style = {
        color: tcolor,
        backgroundColor: bgcolor
    }

    return(
        <>
            <p style={style}>{word}</p>
        </>
    );
}

export default Styled;