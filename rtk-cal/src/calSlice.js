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
        equalCal: (state) => {
            console.log(state)
            console.log(state, state.value)

        }
    }
});

export const { equalCal, operate } = calSlice.actions;

export const selectValue = state => state.calcualtor.value;

export default calSlice.reducer;