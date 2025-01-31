import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'sanitize.css';
import { GlobalStyle } from './style/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
