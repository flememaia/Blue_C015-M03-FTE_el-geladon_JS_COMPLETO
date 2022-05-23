import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Home from "./components/Home";
import "./index.css";

// ReactDOM.render(
//   <React.StrictMode>Hello World</React.StrictMode>,
//   document.getElementById("root")
// );

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
