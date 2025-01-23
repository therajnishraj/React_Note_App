import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "react-toastify/dist/ReactToastify.css"; 

import App from "./App";
import store from "./redux/stores/Store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
