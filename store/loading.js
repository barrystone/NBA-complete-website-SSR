import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  reducers: {
    loadingStart: (state, acion) => {
      state.loading = true;
    },
    loadingEnd: (state, action) => {
      state.loading = false;
    },
  },
});

export const { loadingStart, loadingEnd } = loadingSlice.actions;

export default loadingSlice.reducer;
