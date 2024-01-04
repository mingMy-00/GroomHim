import React, { useState, useEffect } from 'react';
import './App.css';
import { Head } from './inc'
import { Main } from './inc'
import Home from './home/Home';
import SkinTest from './skinTest/SkinTest';
import { Route,Routes } from 'react-router-dom';

function App() {

  const [isLogin, setIsLogin] = useState(false);  

  useEffect(function() {
    if(sessionStorage.getItem("loginMember") === null) {
      console.log(isLogin);
    }else {
      setIsLogin(true);
      console.log(isLogin);
    }
  })

  return(
    <div>
      {isLogin ? <Main/> : 
        <Head />}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skinTest' element={<SkinTest />}/>
          </Routes>
    </div>
    );
  };
export default App;
  

