import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:0,
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1;
        },
        decrement:(state)=>{
            state.value -=1;
        },
        reset:(state)=>{
            state.value =0;
        }
    }
});

console.log(counterSlice);

export const {increment}=counterSlice.actions;
export const {decrement}=counterSlice.actions;
export const {reset}=counterSlice.actions;
export default counterSlice.reducer;