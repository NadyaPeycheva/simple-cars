import { configureStore } from "@reduxjs/toolkit";
import addCarRowSlice from "./addCarRow-slice";

const store=configureStore({
    reducer:{addCar:addCarRowSlice}
});

export default store;