import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";
import { GlobalContextProvider } from "../context/GlobalContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <Router />
  </GlobalContextProvider>
);