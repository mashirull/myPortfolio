import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showMessage : false
}

export const messageSlice = createSlice({
    name : "msg",
    initialState ,
    reducers : {
        setMessage : (state , action) => {
            state.showMessage = action.payload
        }
    }
});

export const {setMessage}  = messageSlice.actions;
export default messageSlice.reducer;