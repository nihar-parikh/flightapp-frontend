import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./flightRedux";
import userReducer from "./userRedux";

const store = configureStore({
  reducer: {
    flight: flightReducer,
    user: userReducer,
  },
});
export { store };
