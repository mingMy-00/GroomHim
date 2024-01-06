import React, { useState, useEffect } from 'react';
import './App.css';
import { Head } from './inc'
import { Main } from './inc'
import { Footer } from './inc'
import Router from './router/Router';

function App() {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(function () {
        if (sessionStorage.getItem("loginMember") === null) {
            console.log(isLogin);
        } else {
            setIsLogin(true);
            console.log(isLogin);
        }
    })

    return (

        <div>
            {isLogin ? <Main /> :
                <Head />}
            <Router />
        </div>

    );
}
export default App;
