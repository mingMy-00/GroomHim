import React, { useState, useEffect } from 'react';
import './App.css';

import { Head } from './inc'
import { Footer } from './inc'
import Router from './router/Router';

function App() {

    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    const [isLogin, setIsLogin] = useState(false);

    useEffect(function () {
        if (sessionStorage.getItem("loginMember") === null) {
            //console.log(isLogin);
        } else {
            setIsLogin(true);
            //console.log(isLogin);
        }
        setScreenSize();
    })

    return (
        <div className='app'>
            <Head />
            <Router />
            <Footer/>
        </div>
    );
}
export default App;
