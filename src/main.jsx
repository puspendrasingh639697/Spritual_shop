import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Isko import karein
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Pure App ko BrowserRouter ke andar wrap kar dein */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);