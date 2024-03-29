import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SidebarProvider } from "./context/sidebarContext";
import { MealProvider } from "./context/mealContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <MealProvider>
        <App />
      </MealProvider>
    </SidebarProvider>
  </React.StrictMode>
);
