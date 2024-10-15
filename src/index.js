import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css'
// only time we use the DOM is to create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));
// root is the entry point to the React app. root is actually a ReactRoot object, which is a container for the root of the React tree.

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)