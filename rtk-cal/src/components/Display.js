import React from "react";

const Display = props => {
    return (
        <div>
            <div id="display" className="display">
                <p>{props.displayValue}</p>
                <p className="display-main">{props.displayValue}</p>
            </div>
            {/* <div>Cal history</div> */}
        </div>
    )
}

export default Display;