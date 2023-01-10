import { createSlice } from "@reduxjs/toolkit";

const addCarRowSlice=createSlice({
    name:"addCar",
    initialState:{visibleRow:false},
    reducers:{
        toggle(state){
            state.visibleRow=!state.visibleRow
        }
    }
});

export const addCarRowActions=addCarRowSlice.actions;
export default addCarRowSlice.reducer;