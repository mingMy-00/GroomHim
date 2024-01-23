import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import './MypageDelivery.css';

function MypageDelivery() {
    const navigate = useNavigate();

    const moveMypage = () => {
        navigate('/page/member/Mypage', {});
    }
    const moveAddressSearch = () => {
        navigate('/page/member/DaumAddressSearch',{});
    }
    return (
        <div className='mypageDelivery'>
            <div className='mypageInfo-header'>
                <svg className='back-button' onClick={moveMypage} width="30" height="30" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22.5" cy="22.5" r="22.5" fill="#F1F1F1"/>
                    <path d="M26 13L14.1196 21.3605C13.5658 21.7502 13.5514 22.5662 14.0912 22.9753L26 32" stroke="black" stroke-width="3"/>
                </svg>
                <h2>배송지 정보 수정</h2>
            </div>
            <div>
            <button className='searchBtn' onClick={moveAddressSearch} style={{width : '80%', marginTop : '10%'}}>우편번호 검색</button>
                <div className='info-item'>
                    <label>우편번호</label>
                    <input type="text" />
                </div>
                <div className='info-item'>
                    <label>주소</label>
                    <input type="text" />
                </div>
                <div className='info-item'>
                    <label>상세주소</label>
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};

export default MypageDelivery;