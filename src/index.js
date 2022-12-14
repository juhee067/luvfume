import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./css/reset.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
