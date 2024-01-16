import React, { useState } from 'react';
import './Mypage.css';
import axios from "axios";

function Mypage() {
    const Logout = () => {
        sessionStorage.removeItem("loginMember");
        document.location.href = '/'
    }
    
    return (
        <div className='mypage'>
            <h3>마이페이지</h3>
            <hr/>
            <div className='mypage-userInfo displayFlex'>
                <div className='userInfo-left displayFlex'>
                    <img className='profile-img' src='/img/logo-icon.png'/>
                    <p className='user-name'>이상현</p>
                    <div className='user-skin-type'><p>수부지</p></div>
                </div>
                <div className='setting-button'>
                    <img src='/img/setting-icon.png' style={{width : '40px', height : '40px'}} />
                </div>
            </div>

            <div className='mypage-area1 displayFlex'>
                <div className='mypage-box displayFlex'>
                    <div>
                        <h4>포인트</h4>
                        <p>3 P</p>
                    </div>
                    <img style={{width : '40px', height : '40px'}} src='/img/point-icon.png'/>
                </div>
                <div className='mypage-box displayFlex' >
                    <div>
                        <h4>쿠폰</h4>
                        <p>3 개</p>
                    </div>
                    <img style={{width : '40px', height : '40px'}} src='/img/coupon-icon.png'/>
                </div>
            </div>

            <div className='mypage-area2 displayFlex'>
                <div>
                    <p>주문 내역</p>
                    <p>0</p>
                </div>
                <div>
                    <p>나의 리뷰</p>
                    <p>0</p>
                </div>
                <div>
                    <p>문의</p>
                    <p>0</p>
                </div>
                <div>
                    <p>포인트 혜택</p>
                    <p>0</p>
                </div>
            </div>

            <div className='mypage-area3'>
                <h4 style={{marginLeft : '2%'}}>♡ 즐겨찾기</h4>    
                <div className='bookmark displayFlex'>
                    <div className='bookmark-item'>
                        <p>브랜드</p>
                        <img style={{width : '10px', height : '10px'}} src='/img/right-arrow-icon.png'/>
                    </div>
                    <div className='bookmark-item'>
                        <p>제품</p>
                        <img style={{width : '10px', height : '10px'}} src='/img/right-arrow-icon.png'/>
                    </div>
                    <div className='bookmark-item'>
                        <p>성분</p>
                        <img style={{width : '10px', height : '10px'}} src='/img/right-arrow-icon.png'/>
                    </div>
                    <div className='bookmark-item'>
                        <p>찜한 상품</p>
                        <img style={{width : '10px', height : '10px'}} src='/img/right-arrow-icon.png'/>
                    </div>
                </div>
            </div>

            <div className='mypage-area4'>
                <div className='displayFlex'>
                    <img style={{width : '15px', height : '15px', margin : '0 1% 2px 2%', alignSelf : 'center'}} src='/img/shopping-icon.png'/> 
                    <h4>최근 본 상품</h4>
                </div>
                

                <div className='displayFlex'>
                    <div className='product-card'>
                        <img src='https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2023/05/08/12/0/10ef7e06-7e39-43c3-bb31-81847dfd3c93.jpg'/>
                        <p className='product-price'>68,810원</p>
                        <p className='product-name'>그라운드플랜 ..</p>
                    </div>
                    <div className='product-card'>
                        <img src='https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2023/05/08/12/0/10ef7e06-7e39-43c3-bb31-81847dfd3c93.jpg'/>
                        <p className='product-price'>68,810원</p>
                        <p className='product-name'>그라운드플랜 ..</p>
                    </div>
                    <div className='product-card'>
                        <img src='https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2023/05/08/12/0/10ef7e06-7e39-43c3-bb31-81847dfd3c93.jpg'/>
                        <p className='product-price'>68,810원</p>
                        <p className='product-name'>그라운드플랜 ..</p>
                    </div>
                </div>
            </div>
            <button onClick={Logout} >로그아웃</button>
        </div>
    );
}
export default Mypage;