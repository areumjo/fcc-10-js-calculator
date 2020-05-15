import { createSlice } from '@reduxjs/toolkit';

export const calSlice = createSlice({
    name: 'cal',
    initialState: {
        value: 0,
        clicked: 0,
    },
    reducers: {
        operate: (state, action) => {
            // console.log('state:', state, 'action:', action)
            state.value = state.value + action.payload;
            state.clicked = '';
        },
        getNumber: (state, action) => {
            if (state.value === 0) {
                state.value = action.payload;
                state.clicked = action.payload;
            } else {
                state.value = state.value + action.payload;
                state.clicked = state.clicked + action.payload;
            }   
        },
        equalCal: (state) => {
            // console.log('equalCal state', state.value)
            let tempValue = +eval(state.value).toFixed(4);
            state.value = tempValue;
            state.clicked = tempValue;
        },
        ac: state => {
            state.value = 0;
            state.clicked = 0;
        },
        plusMinus: state => {
            state.value = -state.value;
            state.clicked = -state.clicked;
        },
        percentage: state => {
            state.value *= 0.01
            state.clicked *= 0.01
        }

    }
});

export const { equalCal, operate, getNumber, ac, plusMinus, percentage } = calSlice.actions;

export const selectValue = state => state.calcualtor.value;

export default calSlice.reducer;