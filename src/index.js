import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/tailwind.css";
import App from "./App";
import FeedContextProvider from "./providers/FeedContextProvider";
import ThemeContextProvider from "./providers/ThemeContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <FeedContextProvider>
        <App />
      </FeedContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
