import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Hello it\'s me'},
]

let postData = [
    {id: 1, post: 'hi, how are you?', liksCount: 10},
    {id: 2, post: 'How are you?', liksCount: 123},
    {id: 3, post: 'Its my first post', liksCount: 231},
    {id: 4, post: 'Its my second post', liksCount: 10},
    {id: 5, post: 'Its my next post', liksCount: 0},
]


root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App mes={messages} post={postData}/>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
