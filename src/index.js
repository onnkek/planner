import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/App";
import store from "./components/redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);