import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showModal : false
}

export const modalSlice = createSlice({
    name : "modal",
    initialState ,
    reducers : {
        setModal : (state , action) => {
            state.showModal = action.payload
        }
    }
});

export const {setModal}  = modalSlice.actions;
export default modalSlice.reducer;