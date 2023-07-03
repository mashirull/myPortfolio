import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../slider/messageSlider";
import resNavReducer from "../slider/responsiveNav"
import modalReducer from '../slider/modalSlice'

export const store = configureStore({
    reducer: {
        modal : modalReducer,
        succMessage : messageReducer,
        resNav : resNavReducer
    },
  })