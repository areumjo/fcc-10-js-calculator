import React from "react";

const Operators = () => {
    return (
        <div className="operator-group">
            <div className="num-btn orange-operator">÷</div>
            <div className="num-btn orange-operator">x</div>
            <div className="num-btn orange-operator">-</div>
            <div className="num-btn orange-operator">+</div>
            <div className="num-btn orange-operator"
                style={{borderBottomRightRadius: '10px'}}>=</div>
            
        </div>
    )
}

export default Operators;