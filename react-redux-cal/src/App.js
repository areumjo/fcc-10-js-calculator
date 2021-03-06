import React from 'react';
import './App.css';
import Display from './component/Display';
import Numbers from './component/Numbers';
import Operators from './component/Operators';

import { connect } from 'react-redux';
import { doCalculation } from './action/calAction';

function App(props) {
  // console.log(props) // props from `mapStateToProps`
  const initNumb = props.initNumb;
  console.log(initNumb);

  return (
    <div className="App">
      <h3>React-Redux Calculator</h3>
      <Display initNumb={initNumb}/>
      <div className="btn-pannel">
        <Numbers />
        <Operators />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log('mapState', state)
  return {
    initNumb: state.calculation.initNumb
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doCalculation: cal => dispatch(doCalculation(cal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
