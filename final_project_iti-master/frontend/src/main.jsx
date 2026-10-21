
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import App from "./App.jsx";

const path = window.location.search.startsWith("?/")
  ? window.location.search.slice(2).split("&")[0]
  : window.location.pathname.replace("/movie-list-app", "") || "/";

window.history.replaceState(
  null,
  "",
  "/movie-list-app/" + path.replace(/^\//, "")
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/movie-list-app">
      <App />
    </BrowserRouter>
  </StrictMode>
);
