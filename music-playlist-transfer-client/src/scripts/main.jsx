import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";
import { GlobalContextProvider } from "../context/GlobalContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  // <GlobalContextProvider>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  // </GlobalContextProvider>
);