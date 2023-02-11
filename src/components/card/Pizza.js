import React from "react";
import "./Pizza.css";
import PizzaCard from "./PizzaCard";
import Filter from "../filter/Filter";

const Pizza = () => {
  return (
    <div className="main">
      <Filter />
      <PizzaCard />
    </div>
  );
};

export default Pizza;
