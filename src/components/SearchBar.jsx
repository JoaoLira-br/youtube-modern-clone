import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchBar = () => {
  return (

        // this white div that looks like it is floating
      <Paper
        component={"form"}
        onSubmit={() => {}}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
        //   this { sm: 5 } is a conditional margin right only on small screens
          mr: { sm: 5 },
        }}
      >
        <input type="text" className="search-bar" placeholder="Search..." value={""} onChange={()=> {}}/>
        <IconButton type="submit" sx={{ p: 1 }}>
            <Search />
        </IconButton>
      </Paper>

  );
};

export default SearchBar;
