import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search, Mic } from "@mui/icons-material";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [listening, setListening] = useState(false);
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

  const handleMic = () => {
    if(listening){
      SpeechRecognition.stopListening();
      setListening(false);
      if(transcript){
        setSearchTerm(transcript);
        console.log(searchTerm);
        resetTranscript();
        
      }
  }else{
    SpeechRecognition.startListening({ language: 'en-US' });
    setListening(true);
  }
}
  useEffect(() => {

  })
  
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
      <IconButton type="button" sx={{ p: 1, color: (listening && 'red')}} onClick={handleMic} >
        <Mic />
      </IconButton>
      
    </Paper>
  );
};

export default SearchBar;
