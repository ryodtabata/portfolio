import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import any global styles you might have
import App from './App'; // Import the main App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Connect to the root element in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
