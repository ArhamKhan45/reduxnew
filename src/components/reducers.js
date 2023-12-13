import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  c: 0,
};

const customReducer = createReducer(initialState, {
  increment: (state) => {
    state.c += 1;
  },

  incrementBy20: (state, action) => {
    state.c += action.payload;
  },

  decrement: (state) => {
    state.c -= 1;
  },
  decrementBy20: (state, action) => {
    state.c = state.c - action.payload;
  },
});

export default customReducer;
