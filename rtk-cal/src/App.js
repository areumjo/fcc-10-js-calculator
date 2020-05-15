import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectValue } from './calSlice';

import Display from './components/Display';
import Numbers from './components/Numbers';
import Operators from './components/Operators';

import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const displayValue = useSelector(state => state.calculator.value);
  console.log(displayValue)

  return (
    <div className="App">
      <h3>React-Redux Calculator</h3>
      <Display displayValue={displayValue}/>
      <div className="btn-pannel">
        <Numbers />
        <Operators />
      </div>
      <br />
      <br />
      <Counter />
    </div>
  );
}

export default App;
