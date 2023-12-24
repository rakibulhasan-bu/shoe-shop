import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppProvider } from "./context/context";
import router from "./routes/indexRoute";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <RouterProvider router={router} />
    <Toaster position="top-right" reverseOrder={false} />
  </AppProvider>
);
