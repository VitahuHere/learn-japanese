import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import Router from "./paths";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense>
      <Router />
    </React.Suspense>
  </React.StrictMode>
);
