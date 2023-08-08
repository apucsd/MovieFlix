import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import MainLayout from "./layout/MainLayout";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <MainLayout></MainLayout>
    </RouterProvider>
  </React.StrictMode>
);
