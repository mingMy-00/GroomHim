import React, { useState, useEffect } from 'react';
import './App.css';

import { Head } from './inc'
import { Footer } from './inc'
import Router from './router/Router';

function App() {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(function () {
        if (sessionStorage.getItem("loginMember") === null) {
        } else {
            setIsLogin(true);
        }
    })

    return (
        <div className='app'>
            <Head />
            <div className='router-body'>
                <Router />
            </div>
            <Footer />
        </div>
    );
}
export default App;
