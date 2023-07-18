import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";
import LoginPage from "./pages/LoginPage";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#345",
//     },
//     background: {
//       default: "linear-gradient(to bottom, #333333, #cccccc)", // Replace with your desired colors
//     },
//   },
// });

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginPage />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ThemeProvider theme={theme}>
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
  // </ThemeProvider>
);
