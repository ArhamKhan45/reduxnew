import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  num: 0,
};

const myOwnReducer = createReducer(initialState, {
  incrementByOne: (state) => {
    state.count += 1;
  },
  decrementByOne: (state) => {
    state.count -= 1;
  },
  table: (state, action) => {
    state.num += action.payload;
  },
  reset: (state) => {
    state.count = state.num = 0;
  },
});

export default myOwnReducer;
