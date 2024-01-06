import React, { useState } from 'react';
import './Mypage.css';
import axios from "axios";

function Mypage() {
    const Logout = () => {
        sessionStorage.removeItem("loginMember");
        document.location.href = '/'
    }
    
    return (
        <div>
            <h3>마이페이지입니다</h3>
            <button onClick={Logout} >로그아웃</button>
        </div>
    );
}
export default Mypage;