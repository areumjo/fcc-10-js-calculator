import userReducer from './userReducer';
import calReducer from './calReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  calculation: calReducer
});

export default rootReducer