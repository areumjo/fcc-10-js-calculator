import React from 'react';
import './App.css';
import Display from './component/Display';
import Numbers from './component/Numbers';
import Operators from './component/Operators';

import { connect } from 'react-redux';

function App(props) {
  // console.log(props) // props from `mapStateToProps`
  return (
    <div className="App">
      <h3>React-Redux Calculator</h3>
      <Display />
      <Numbers />
      <Operators />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    calculation: state.calculation
  }
}

export default connect(mapStateToProps)(App);
