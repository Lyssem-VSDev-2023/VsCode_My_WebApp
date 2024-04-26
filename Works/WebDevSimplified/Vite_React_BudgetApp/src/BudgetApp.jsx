import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BudgetProvider } from "./Contexts/BudgetContext";

import React from "react";

function BudgetApp() {
  return (
    <BudgetProvider>
      <App />
    </BudgetProvider>
  );
}

export default BudgetApp;
