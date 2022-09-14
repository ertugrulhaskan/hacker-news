import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/tailwind.css";
import App from "./App";
import FeedContextProvider from "./providers/FeedContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FeedContextProvider>
      <App />
    </FeedContextProvider>
  </React.StrictMode>
);
