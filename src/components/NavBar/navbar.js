import { useState } from "react";
import SearchBar from "../SearchBar";
import FilterButton from "../SearchButton";
import './NavBar.css'; // Import the CSS file for styling

export default function NavBar({ setFilterType }) {
  const handleFilterButtonClick = (type) => {
    // Call setFilterType to update the filter type in the parent component (App)
    setFilterType(type);
  };

  return (
    <div className="navbar-container">
      <SearchBar />
      <div className="button-container">
        <FilterButton type={"Interests"} onFilterButtonClick={handleFilterButtonClick} />
        <FilterButton type={"Experiences"} onFilterButtonClick={handleFilterButtonClick} />
        <FilterButton type={"Pages"} onFilterButtonClick={handleFilterButtonClick} />
      </div>
    </div>
  );
}
