import React from "react";

const Box = ({color}) => {

    const boxStyle = {
        height: "100px",
        width: "100px",
        backgroundColor: color,
        margin: "10px",
        display: "inline-block"
    }

    return (
        <div style={boxStyle}></div>
    );

}

export default Box;