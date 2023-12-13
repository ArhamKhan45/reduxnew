import { configureStore } from "@reduxjs/toolkit";
import CustomReducer from "./reducers";

const store = configureStore({
  reducer: {
    custom: CustomReducer,
  },
});

export default store;
