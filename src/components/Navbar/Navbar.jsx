import React from "react";
import n from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div >
                <NavLink className={n.item} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className={n.item} to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink className={n.item} to="/news">News</NavLink>
            </div>
            <div>
                <NavLink className={n.item} to="/music">Music</NavLink>
            </div>
            <div>
                <NavLink className={n.item} to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar