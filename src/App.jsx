import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
// box is a div element
import { Box } from '@mui/material'
import { NavBar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components'
const App = () => {
   return <Router>
        <Box sx={{ backgroundColor: '#000'}}>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />}/>
            <Route path="/channel/:id" element={<ChannelDetail />}/>
            <Route path="/search/:searchTerm" element={<SearchFeed />}/>
          </Routes>
        </Box>
    </Router>
}

export default App