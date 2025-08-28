import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // You can create this file for global styles if you wish
import App from '.components/App';

// This line finds the <div id="root"> from your public/index.html file.
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// This line tells React to render your entire <App> component inside that div.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);