import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mobileNav :false
}

export const resNavSlice = createSlice({
    name : 'responsive',
    initialState,
    reducers : {
        ToggleResNav : (state , action) => {
            state.mobileNav = !state.mobileNav
        }
    }
})

export const {ToggleResNav}  = resNavSlice.actions;
export default resNavSlice.reducer;