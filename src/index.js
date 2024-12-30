import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import any global styles you might have
import App from './App'; // Import the main App component
// src/index.js or src/App.js

import '@fontsource/inter/400.css'; // Regular
import '@fontsource/inter/500.css'; // Medium
import '@fontsource/inter/600.css'; // Semi-Bold
import '@fontsource/inter/700.css'; // Bold


const root = ReactDOM.createRoot(document.getElementById('root')); // Connect to the root element in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
