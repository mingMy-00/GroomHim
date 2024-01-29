import React, { useState, useEffect } from 'react';
import MypageRouter from '../../router/MypageRouter';
import { useNavigate } from "react-router-dom";
import './Mypage.css';

function Mypage() {
    let navigate = useNavigate();

    //마이페이지 정보 때문에 갖다놓음.
    const loginMemberString = sessionStorage.getItem("loginMember");
    const loginMember = loginMemberString ? JSON.parse(loginMemberString) : {};
    const memberName = loginMember.memberName;
    const gender = loginMember.memberGender === 'F' ? "여성" : "남성";
    const profile = loginMember.memberProfile;
    const Logout = () => {
        sessionStorage.removeItem("loginMember");
        document.location.href = '/'
    }

    const moveMypageInfo = () => {
        navigate("/page/member/MypageInfo");
    }

    const moveMypageDelivery = () => {
        navigate("/page/member/MypageDelivery");
    };
    return (
        <div className='mypage'>
            <div className='mypage-userInfo displayFlex'>
                <img className='profile-img' src={profile} />
                <div className='user-detail'>
                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                        <p className='user-name'>{memberName}</p>
                        <button className='logout-btn' onClick={Logout} >로그아웃</button>
                    </div>
                    <div className='user-skin-type'>
                        {/* <p>20대</p>
                        <p>{gender}</p>
                        <p>여드름 개선</p> */}
                    </div>
                </div>
            </div>
            <div className='mypage-area1 displayFlex'>
                <button onClick={moveMypageInfo}>내 정보 수정</button>
                <button onClick={moveMypageDelivery}>배송지 정보 수정</button>
            </div>
            <MypageRouter/>
        </div>
    );
}
export default Mypage;