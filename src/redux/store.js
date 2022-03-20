import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./flightRedux";
import userReducer from "./userRedux";

//for more than one reducer, use combineReducers
// const rootReducer = combineReducers({
//   user: userReducer,
//   flight: flightReducer,
// });

const store = configureStore({
  reducer: {
    flight: flightReducer,
    user: userReducer,
  },
});
export { store };
