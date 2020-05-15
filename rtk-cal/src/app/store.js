import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import calReducer from '../calSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    calculator: calReducer,
  },
});
