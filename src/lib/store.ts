import { configureStore } from "@reduxjs/toolkit"

import { 
    counterSlice, 
    focusNavSlice, 
    focusSlideSlice, 
    focusBottomSlice, 
    activeSectionSlice 
} from "@/lib/slice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        focusNav: focusNavSlice.reducer,
        focusSlide: focusSlideSlice.reducer,
        focusBottom: focusBottomSlice.reducer,
        activeSection: activeSectionSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;