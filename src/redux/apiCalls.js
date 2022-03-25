import axios from "axios";
import {
  addFlightFailure,
  addFlightStart,
  addFlightSuccess,
  getFlightFailure,
  getFlightStart,
  getFlightSuccess,
  getPlacesFailure,
  getPlacesStart,
  getPlacesSuccess,
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
    );
    localStorage.setItem("role", res.data.user.role);
    localStorage.setItem("token", res.data.token);
    dispatch(loginSuccess(res.data.user));
  } catch (error) {
    dispatch(loginFailure());
  }
};

//Get all flight lists
export const getAllFlights = async (dispatch) => {
  dispatch(getFlightStart());

  try {
    const res = await axios.get("http://localhost:8000/api/v1/flights");
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

//Get all places

export const getAllPlaces = async (dispatch) => {
  dispatch(getPlacesStart());

  try {
    const { data } = await axios.get("http://localhost:8000/api/v1/flights");
    if (data) {
      const getPlaces = (flights) => {
        let placesArray = [];
        for (let i = 0; i < flights.length; i++) {
          placesArray.push(flights[i].from);
          placesArray.push(flights[i].to);
        }
        return [...new Set(placesArray)];
      };

      dispatch(getPlacesSuccess(getPlaces(data.flights)));
    } else {
      dispatch(getPlacesFailure());
    }
  } catch (error) {
    console.log("error:", error);
    dispatch(getPlacesFailure());
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

  try {
    const res = await axios.get(
      `http://localhost:8000/api/v1/flights?from=${from}&to=${to}&departureDate=${departureDate}&priceGte=${price}`
    );
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
  flightInfo.departureDate =
    flightInfo.departureDate + " " + flightInfo.departureTime;
  flightInfo.landingDate =
    flightInfo.landingDate + " " + flightInfo.landingTime;
  const { departureTime, landingTime, ...newFlightInfo } = flightInfo;
  const token = localStorage.getItem("token");
  try {
    const res = await axios.post(
      "http://localhost:8000/api/v1/flights/new",
      newFlightInfo,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (res.data) {
      dispatch(addFlightSuccess(res.data.flight));
    } else {
      dispatch(addFlightFailure());
    }
  } catch (error) {
    console.log("error:", error);
    dispatch(addFlightFailure());
  }
};
