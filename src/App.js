import React from 'react';
import './App.css';
import Profile from './pages/Profile/Profile';
import Dialogs from "./pages/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound/NoyFound";
import Layout from "./components/Layout/Layout";
import SettingsPage from "./pages/Settings/SettingsPage";
import MusicPage from "./pages/MusicPage/MusicPage";
import NewsPage from "./pages/NewsPage/NewsPage";

const App = (props) => {



    return (
        <div className="app-wrapper">
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='dialogs/*' element={<Dialogs mes={props.mes} />}/>
                    <Route path='profile' element={<Profile post={props.post}/>}/>
                    <Route path='news' element={<NewsPage/>}/>
                    <Route path='music' element={<MusicPage/>}/>
                    <Route path='settings' element={<SettingsPage/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
