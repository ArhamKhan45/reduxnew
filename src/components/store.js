import { configureStore } from "@reduxjs/toolkit";
import MyOwnReducer from "./reducers";

const store = configureStore({
  reducer: {
    y: MyOwnReducer,
  },
});

export default store;
