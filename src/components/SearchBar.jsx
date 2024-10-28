import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search, Mic } from "@mui/icons-material";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const navigate = useNavigate();

  // Update search term in real-time as the user speaks
  useEffect(() => {
    setSearchTerm(transcript);
  }, [transcript]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
      resetTranscript();
    }
  };

  const handleMic = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ language: 'en-US', continuous: false });
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
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
      <IconButton type="button" sx={{ p: 1, color: (listening && 'red') }} onClick={handleMic} onTouchEnd={handleMic}>
        <Mic />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;