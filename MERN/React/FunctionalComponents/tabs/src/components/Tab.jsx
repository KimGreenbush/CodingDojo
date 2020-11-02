import React from "react";

const Tab = props => {

    return (
            <h2 className="tab" onClick={props.switchTab}>{props.tab}</h2>
    );
}

export default Tab;