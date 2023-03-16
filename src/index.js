import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import "./styles/App.css";
// import App from './App';
import Routring from './Routring';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Routring />
    
  </React.StrictMode>
);
