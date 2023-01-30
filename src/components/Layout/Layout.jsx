import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import React from "react";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <>
            <Header/>
            <Navbar/>

            <Outlet/>

            <Footer/>
        </>
    )
}

export default Layout
