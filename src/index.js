import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Content from "./comp/Content";
import Navbar from "./comp/Navbar";
import Impressum from "./comp/Impresum";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container text-center">
      <Navbar />

      <Content />
    </div>
    <Impressum />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
