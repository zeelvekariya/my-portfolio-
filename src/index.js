/*
Header.js
Zeel Rameshbhai Vekariya
301489564
29 january 2025
*/
import React from "react";
import ReactDOM from "react-dom/client"; // Use the new `react-dom/client` package
import "./index.css"; // Optional, for global styles
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create a root container
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: report web vitals
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
