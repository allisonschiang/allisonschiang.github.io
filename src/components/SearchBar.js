import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = ({ type, onFilterButtonClick }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Manage state within SearchBar

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterButtonClick(type); // Pass the search query to the Filter function
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="What do you want to know about me?"
        variant="outlined"
        placeholder="Search..."
        size="small"
        
      />
    </form>
  );
};

export default SearchBar;
