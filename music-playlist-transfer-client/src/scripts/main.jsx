import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";
// import { GlobalContextProvider } from "../context/GlobalContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import '../styles.css'

const queryClient = new QueryClient()

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
<QueryClientProvider client={queryClient}>
  <ThemeProvider theme={darkTheme}>
    <Router />
    <CssBaseline />
    <ReactQueryDevtools />
  </ThemeProvider>
</QueryClientProvider>
);