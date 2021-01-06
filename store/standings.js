import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

import standingsData from "../_data/standings.json";

const standingsSlice = createSlice({
  name: "standings",
  initialState: {
    loading: false,
    standings: [],
  },
  reducers: {
    standingRequest: (state) => {
      state.loading = true;
    },
    standingSuccess: (state, action) => {
      state.loading = false;
      state.standings = action.payload;
    },
    standingFailed: (state, action) => {
      state.loading = false;
      state.standings = action.payload;
    },
  },
});

export const {
  standingRequest,
  standingSuccess,
  standingFailed,
} = standingsSlice.actions;

export default standingsSlice.reducer;

export const getStandings = () => async (dispatch) => {
  try {
    dispatch({ type: standingRequest });

    // const { data } = await axios.get(
    //   `https://api.sportsdata.io/v3/nba/scores/json/Standings/2021?key=bc5009f7498a4e8cac246d6fbdd34692`
    // );
    // const data = [{ 1: 1 }, { 2: 2 }];
    // console.log(JSON.parse("standingsData", standingsData));
    // const data = JSON.parse(standingsData);
    const data = standingsData;
    // const data = [];
    // console.log("standingsData", standingsData);

    dispatch({ type: standingSuccess, payload: data });
  } catch (err) {
    dispatch({
      type: standingFailed,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
