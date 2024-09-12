import React from "react";
import Header from "../components/Header";
import "../app/style/globals.css";
import PlansMain from "../components/plansMain"; // Correct import and component name

function Plans() {
  return (
    <div>
      <Header />
      <PlansMain /> {/* Correct component name usage */}
    </div>
  );
}

export default Plans;
