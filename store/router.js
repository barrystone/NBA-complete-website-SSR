import { createSlice } from "@reduxjs/toolkit";

const routerSlice = createSlice({
  name: "router",
  initialState: {
    routerLoading: false,
  },
  reducers: {
    loadingStart: (state, acion) => {
      state.routerLoading = true;
    },
    loadingEnd: (state, action) => {
      state.routerLoading = false;
    },
  },
});

export const { loadingStart, loadingEnd } = routerSlice.actions;

export default routerSlice.reducer;
