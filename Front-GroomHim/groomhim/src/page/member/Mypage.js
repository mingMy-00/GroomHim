import React, { useState, useEffect } from 'react';
import MypageRouter from '../../router/MypageRouter';
import { useNavigate } from "react-router-dom";
import './Mypage.css';
import axios from "axios";

function Mypage() {
    let navigate = useNavigate();

    const Logout = () => {
        sessionStorage.removeItem("loginMember");
        document.location.href = '/'
    }

    const moveMypageInfo = () => {
        navigate("/page/member/MypageInfo");
    }

    return (
        <div className='mypage'>
            <div className='mypage-userInfo displayFlex'>
                <img className='profile-img' src='/img/logo-icon.png' />
                <div className='user-detail'>
                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                        <p className='user-name'>이상현</p>
                        <button onClick={Logout} >로그아웃</button>
                    </div>
                    <div className='user-skin-type'>
                        <p>20대</p>
                        <p>남성</p>
                        <p>여드름 개선</p>
                    </div>
                </div>
            </div>
            <div className='mypage-area1 displayFlex'>
                <button onClick={moveMypageInfo}>내 정보 수정</button>
                <button>배송지 정보 수정</button>
            </div>
            <MypageRouter/>
        </div>
    );
}
export default Mypage;