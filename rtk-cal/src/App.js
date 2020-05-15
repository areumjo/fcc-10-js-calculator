import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Display from './components/Display';
import Numbers from './components/Numbers';
import Operators from './components/Operators';
import Footer from './components/Footer';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const displayValue = useSelector(state => state.calculator.value);
  const clickedValue = useSelector(state => state.calculator.clicked)
  // console.log(displayValue, 'click:', clickedValue)
  // when operator is clicked, clear clickedValue (use setClickedVale)
  return (
    <div className="App">
      <h2 className="title">Redux-Toolkit Calculator</h2>
      <div className="box">
        <Display displayValue={displayValue} clickedValue={clickedValue} />
        <div className="btn-pannel">
          <Numbers />
          <Operators clickedValue={clickedValue}  />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
