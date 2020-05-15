import React from "react";
import { useDispatch } from "react-redux";
import { equalCal, operate
} from '../calSlice';
const Operators = props => {
    const dispatch = useDispatch();
    // console.log('in Operators:', props)
    return (
        <div className="operator-group">
            <div 
                className="num-btn orange-operator" id="divide"
                onClick={() => dispatch(operate('/'))}>÷</div>
            <div 
                className="num-btn orange-operator" id="multiply"
                onClick={() => dispatch(operate('*'))}>x</div>
            <div 
                className="num-btn orange-operator" id="subract"
                onClick={() => dispatch(operate('-'))}>-</div>
            <div 
                className="num-btn orange-operator" id="add"
                onClick={() => dispatch(operate('+'))}>+</div>
            <div 
                className="num-btn orange-operator"
                onClick={() => dispatch(equalCal())}
                style={{borderBottomRightRadius: '10px'}}>=</div>
        </div>
    )
}

export default Operators;