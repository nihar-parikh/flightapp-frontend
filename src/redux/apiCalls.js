import axios from "axios";
import {
  addFlightFailure,
  addFlightStart,
  addFlightSuccess,
  getFlightFailure,
  getFlightStart,
  getFlightSuccess,
} from "./flightRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

//login
export const login = async (dispatch, userInfo) => {
  console.log("userInfo: ", userInfo);
  dispatch(loginStart());

  try {
    const res = await axios.post(
      "http://localhost:8000/api/v1/users/login",
      userInfo
    ); //don't use {userInfo:userInfo} bcoz already userInfo is an object
    console.log("response: ", res.data);
    // console.log(res.data.token);
    // localStorage.setItem("token", res.data.token);
    dispatch(loginSuccess(res.data.user));
    // console.log(res.data);
  } catch (error) {
    //console.log("error:", error);
    dispatch(loginFailure());
  }
};

//Get all flight lists
export const getAllFlights = async (dispatch) => {
  dispatch(getFlightStart());

  try {
    const res = await axios.get("http://localhost:8000/api/v1/flights");
    // console.log("response: ", res.data.flights);
    if (res.data) {
      dispatch(getFlightSuccess(res.data.flights));
    } else {
      dispatch(getFlightFailure());
    }
  } catch (error) {
    console.log("error:", error);
    dispatch(getFlightFailure());
  }
};

//Get search flights
export const getSearchFlights = async (
  from,
  to,
  departureDate,
  price,
  dispatch
) => {
  dispatch(getFlightStart());
  console.log(from, to, departureDate, price);

  try {
    const res = await axios.get(
      `http://localhost:8000/api/v1/flights?from=${from}&to=${to}&departureDate=${departureDate}&priceGte=${price}`
    );
    console.log("response: ", res.data.flights);
    if (res.data) {
      dispatch(getFlightSuccess(res.data.flights));
    } else {
      dispatch(getFlightFailure());
    }
  } catch (error) {
    console.log("error:", error);
    dispatch(getFlightFailure());
  }
};

//add a flight
export const addFlight = async (flightInfo, dispatch) => {
  dispatch(addFlightStart());
  console.log(flightInfo);
  

  // try {
  //   const res = await axios.post("http://localhost:8000/api/v1/flights/new");
  //   // console.log("response: ", res.data.flights);
  //   if (res.data) {
  //     dispatch(addFlightSuccess(res.data.flights));
  //   } else {
  //     dispatch(addFlightFailure());
  //   }
  // } catch (error) {
  //   console.log("error:", error);
  //   dispatch(addFlightFailure());
  // }
};