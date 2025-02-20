import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./pages/blog/blog.reducer";

const store = configureStore({
    reducer: {
        blog: blogReducer
    }
})

export default store