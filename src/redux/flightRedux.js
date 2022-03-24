import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
  name: "flight",
  initialState: {
    places: [],
    flights: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getFlightStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getFlightSuccess: (state, action) => {
      state.isFetching = false;
      state.flights = action.payload;
    },
    getFlightFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getPlacesStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPlacesSuccess: (state, action) => {
      state.isFetching = false;
      state.places = action.payload;
    },
    getPlacesFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    addFlightStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addFlightSuccess: (state, action) => {
      state.isFetching = false;
      state.flights.push(action.payload);
    },
    addFlightFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getFlightStart,
  getFlightSuccess,
  getFlightFailure,
  getPlacesStart,
  getPlacesSuccess,
  getPlacesFailure,
  addFlightStart,
  addFlightSuccess,
  addFlightFailure,
} = flightSlice.actions;

const flightReducer = flightSlice.reducer;
export default flightReducer;
