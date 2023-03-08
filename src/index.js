import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state from './redax/state';
import {addPost} from './redax/state';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App state={state} addPost={addPost} />
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
