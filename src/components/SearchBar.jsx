import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // this e.preventDefault() is to block the page from refreshing: not what we want with reactjs
    e.preventDefault();
    if(searchTerm){
      // redirect to the search page
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }

  }

  return (
    // this white div that looks like it is floating
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        //   this { sm: 5 } is a conditional margin right only on small screens
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: 1 }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
