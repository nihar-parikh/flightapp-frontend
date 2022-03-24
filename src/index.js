import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import reportWebVitals from "./reportWebVitals";
import App from "./app/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
