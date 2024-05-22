import React from 'react';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout(){

    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
