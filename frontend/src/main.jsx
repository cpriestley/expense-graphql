import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import  GridBackground from "./components/ui/GridBackground"
import "./input.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <GridBackground>
      <App />
      </GridBackground>
  </React.StrictMode>
);
