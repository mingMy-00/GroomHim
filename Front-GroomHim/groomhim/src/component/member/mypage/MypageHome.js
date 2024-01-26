import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import './MypageHome.css';

function MypageHome() {
    
    const [area4Content, setArea4Content] = useState([]);
    const [selectedTab, setSelectedTab] = useState('saveMoney');

    const selectSaveMoney = () => {
        const content = [
                <div className='area4-item displayFlex backGray'>
                    <div>
                        <p>스킨케어 올인원 OOO 구입</p>
                        <p>2023.11.01</p>
                    </div>
                    <div>
                        +812원
                    </div>
                </div>
                ,
                <div className='area4-item displayFlex'>
                    <div>
                        <p>스킨케어 올인원 OOO 구입</p>
                        <p>2023.11.01</p>
                    </div>
                    <div>
                        +812원
                    </div>
                </div>
                ,
                <div className='area4-item displayFlex backGray'>
                    <div>
                        <p>스킨케어 올인원 OOO 구입</p>
                        <p>2023.11.01</p>
                    </div>
                    <div>
                        +812원
                    </div>
                </div>
                ,
                <div className='area4-item displayFlex '>
                    <div>
                        <p>스킨케어 올인원 OOO 구입</p>
                        <p>2023.11.01</p>
                    </div>
                    <div>
                        +812원
                    </div>
                </div>
                ,
                <div className='area4-item displayFlex backGray'>
                    <div>
                        <p>스킨케어 올인원 OOO 구입</p>
                        <p>2023.11.01</p>
                    </div>
                    <div>
                        +812원
                    </div>
                </div>
                ,
                <div className='area4-item displayFlex'>
                    <div>
                        <p>스킨케어 올인원 OOO 구입</p>
                        <p>2023.11.01</p>
                    </div>
                    <div>
                        +812원
                    </div>
                </div>
        ]
        // setArea4Content(content);
        setSelectedTab('saveMoney');
    }
    const selectCoupon = () => {
        const content = [
            <div className='area4-item displayFlex backGray'>
                <div>
                    <p>겨울대비 수분 보충 이벤트</p>
                    <p> ~ 2023.12.31
                    </p>
                </div>
                <div>
                    10% OFF
                </div>
            </div>
            ,
            <div className='area4-item displayFlex'>
                <div>
                    <p>겨울대비 수분 보충 이벤트</p>
                    <p> ~ 2023.12.31
                    </p>
                </div>
                <div>
                    10% OFF
                </div>
            </div>
            ,
            <div className='area4-item displayFlex backGray'>
                <div>
                    <p>겨울대비 수분 보충 이벤트</p>
                    <p> ~ 2023.12.31
                    </p>
                </div>
                <div>
                    10% OFF
                </div>
            </div>
            ,
            <div className='area4-item displayFlex '>
                <div>
                    <p>겨울대비 수분 보충 이벤트</p>
                    <p> ~ 2023.12.31
                    </p>
                </div>
                <div>
                    10% OFF
                </div>
            </div>
    ]
        // setArea4Content(content);
        setSelectedTab('coupon');
    }
    useEffect(() => {
        selectSaveMoney();
    }, []);


    let navigate = useNavigate();

    const moveMypageReview = () => {
        navigate("mypageReview");
    };

    return (
        <div >
            <div className='mypage-area2 displayFlex'>
                <div onClick={moveMypageReview}>
                    <p style={{ color: '#245473' }}>0</p>
                    <p>내 리뷰</p>
                </div>
                <div style={{ borderLeft: '1px solid black', borderRight: '1px solid black' }}>
                    <p style={{ color: '#245473' }}>0</p>
                    <p>스크랩</p>
                </div>
                <div>
                    <p style={{ color: '#245473' }}>0</p>
                    <p>구매 완료</p>
                </div>
            </div>

            <div className='mypage-area3 displayFlex'>
                <div onClick={selectSaveMoney}>
                    <p style={{ color: '#245473' }}>0원</p>
                    <p className={` ${selectedTab === 'saveMoney' ? 'select' : ''}`} id='saveMoney' style={{ color: 'lightgray' }}>적립금</p>
                </div>
                <div onClick={selectCoupon}>
                    <p style={{ color: '#245473' }}>0장</p>
                    <p className={` ${selectedTab === 'coupon' ? 'select' : ''}`} id='coupon' style={{ color: 'lightgray' }}>쿠폰</p>
                </div>
            </div>

            <div className='mypage-area4'>
                {area4Content}
            </div>
        </div>
    );
};

export default MypageHome;