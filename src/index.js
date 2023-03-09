
import state, { subscribe } from "./redax/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText, updateNewMessage, addMessage} from './redax/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessage={updateNewMessage} addMessage={addMessage} />
            </BrowserRouter>
        </React.StrictMode>
      );
}


rerenderEntireTree(state)
subscribe(rerenderEntireTree)

