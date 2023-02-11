import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="filterMainContainer">
      <div className="Mainheader">
        <h3>Filters</h3>
      </div>
      <div>
        <form className="formOuter">
          <label>
            Search Here:
            <input type="text" name="search" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Filter;
