import React from "react"
import h from './Header.module.css'

const Header = () => {
    return(
        <header className={h.header}>
        <img className={h.logo} alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png'/>
      </header>
    )
}

export default Header;

