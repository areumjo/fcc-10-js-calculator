import React from "react";
import { getNumber, ac, plusMinus, percentage } from '../calSlice';
import { useDispatch } from "react-redux";
// button for 0-9 and `.` // 0 will take 2x space

const Numbers = () => {
    const dispatch = useDispatch();
    return (
        <div className="num-group">
            <div className="num-btn num-operator"
                onClick={() => dispatch(ac())}>AC</div>
            <div className="num-btn num-operator"
                onClick={() => dispatch(plusMinus())}>+/-</div>
            <div className="num-btn num-operator"
                onClick={() => dispatch(percentage())}>%</div>
            <div className="num-btn"
                onClick={() => dispatch(getNumber('7'))}>7</div>
            <div className="num-btn"
                onClick={() => dispatch(getNumber('8'))}>8</div>
            <div className="num-btn"
                onClick={() => dispatch(getNumber('9'))}>9</div>
            <div className="num-btn"
                onClick={() => dispatch(getNumber('4'))}>4</div>
            <div className="num-btn"
                onClick={() => dispatch(getNumber('5'))}>5</div>
            <div className="num-btn"
                onClick={() => dispatch(getNumber('6'))}>6</div>
            <div className="num-btn"
                onClick={() => dispatch(getNumber('1'))}>1</div>
            <div className="num-btn"
                onClick={() => dispatch(getNumber('2'))}>2</div>
            <div className="num-btn"
                onClick={() => dispatch(getNumber('3'))}>3</div>
            <div className="num-btn num-zero"
                onClick={() => dispatch(getNumber('0'))}>0</div>
            <div className="num-btn"
                onClick={() => dispatch(getNumber('.'))}>.</div>
        </div>
    )
}

export default Numbers;