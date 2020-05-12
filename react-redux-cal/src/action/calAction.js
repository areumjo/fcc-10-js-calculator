export const doCalculation = cal => {
    return (dispatch, getState) => {
        // asyn call to database
        dispatch({ type: 'DO_CAL', cal });
    }
};