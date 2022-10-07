import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-card/cartSlice";
import cartUiSlice from "./shopping-card/cartUiSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer
    }
})

export default store;