import { createSlice } from '@reduxjs/toolkit';

export const calSlice = createSlice({
    name: 'cal',
    initialState: {
        value: 0,
    },
    reducers: {
        operate: (state, action) => {
            // console.log('state:', state, 'action:', action)
            state.value = state.value + action.payload;
        },
        getNumber: (state, action) => {
            if (state.value === 0) {
                state.value = action.payload;
            } else {
                state.value = state.value + action.payload;
            }   
        },
        equalCal: (state) => {
            state.value = eval(state.value);
        },
        ac: state => {
            state.value = 0;
        },
        plusMinus: state => {
            state.value = -state.value;
        },
        percentage: state => {
            state.value *= 0.01
        }

    }
});

export const { equalCal, operate, getNumber, ac, plusMinus, percentage } = calSlice.actions;

export const selectValue = state => state.calcualtor.value;

export default calSlice.reducer;