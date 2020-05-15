import React from "react";

// button for 0-9 and `.` // 0 will take 2x space

const Numbers = () => {
    return (
        <div className="num-group">
            <div className="num-btn num-operator">AC</div>
            <div className="num-btn num-operator">+/-</div>
            <div className="num-btn num-operator">%</div>
            <div className="num-btn">7</div>
            <div className="num-btn">8</div>
            <div className="num-btn">9</div>
            <div className="num-btn">4</div>
            <div className="num-btn">5</div>
            <div className="num-btn">6</div>
            <div className="num-btn">1</div>
            <div className="num-btn">2</div>
            <div className="num-btn">3</div>
            <div className="num-btn num-zero">0</div>
            <div className="num-btn">.</div>
        </div>
    )
}

export default Numbers;