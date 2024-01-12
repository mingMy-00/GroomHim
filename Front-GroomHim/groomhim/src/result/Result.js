import './Result.css';
import logo from "../assets/imgs/logo.png";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function Result(){

    const location = useLocation();
    const skinType = location.state.skinType[0].skinType;
  
    const storedData    = JSON.parse(sessionStorage.getItem("loginMember"));
    const memberName    = storedData ? storedData.memberName : null;
    //라이도 버튼의 상태를 관리
    const [selectedRadio, setSelectedRadio] = useState('토너');

    //라디오 체크하면 실행되는 함수
    const handleRadioClick = (name) => {
        setSelectedRadio(name);
    };

    return(
        <div>
            <div className='result-container'>
                <h1> {memberName}님의 피부타입은 <b class="b">{skinType}</b> 입니다.</h1>
                <div id="SkinIntro">
                    <div id="intro">
                    이 타입은 <b className="b">보습제품</b>과 <b className="b">유수분 밸런스</b>가 중요합니다.
                    <br></br>
                    <br />
                    <table id="table"> 
                        <tr>
                            <td>Step 1. </td>
                            <td>수분을 흡수시켜줄 토너</td>
                        </tr>
                        <tr>
                            <td>Step 2.</td>
                            <td>수분 가득 제품</td>
                        </tr>
                        <tr>
                            <td>Step 3.</td>
                            <td>수분을 눌러서 유지해줄 보습크림.</td>
                        </tr>
                    </table>
                    <iframe width="350" height="315" src="https://www.youtube.com/embed/NnwA8DTTpvg?si=MLITPcsQ4mZ8-vL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                
                <div class="radio-inputs">
                    <label class="radio">
                        <input type="radio" name="토너" className="radio" checked={selectedRadio === '토너'} onChange={() => handleRadioClick('토너')}/>
                        <span class="name">토너 Top5</span>
                    </label>
                    <label class="radio">
                        <input type="radio" name="수분" class="radio" checked={selectedRadio === '수분'} onChange={() => handleRadioClick('수분')}/>
                        <span class="name">수분제품 Top5</span>
                    </label>
                        
                    <label class="radio">
                        <input type="radio" name="보습" class="radio" checked={selectedRadio === '보습'} onChange={() => handleRadioClick('보습')}/>
                        <span class="name">보습크림 Top5</span>
                    </label>
                </div>
                        <div id="margin">
                        <div class="tooltip-container">
                            <span class="text">자세한 정보👀</span>
                            <span className="introDetail">           
                                Q. 건성피부란  ? <br />
                                A. 피부의 유분(기름)과 수분(촉촉함)이 부족해서 <br />
                                표면이 거칠고 얼굴이 땅기는 피부타입이에요. <br /><br />

                                    유분제품을 너무 많이 바르면 모공을 막아서
                                    좁쌀여드름이 나고
                                    <br />
                                    수분제품은 보통 가벼운 액체 타입이라서 날아가기 쉬워요.
                                    <br /><br />
                                
                                ✔ 따라서, 보습제품과 유수분 밸런스가 중요합니다.</span>
                        </div>
                </div>

                <div className='product-list'>
                    <div class="product-container">
                        <div class="product">
                            1.
                            <img src="https://image8.coupangcdn.com/image/retail/images/284614092420512-ace274de-9ed5-4b97-82c1-343be2dae1c8.jpg" alt="Product Image 1" />
                            <div class="product-info">
                                <table className="productTable">
                                    <tr><td><h5>이니스프리 New 그린티 씨드 히알루론산 고수분 크림 50ml</h5></td></tr>
                                    <tr><td><h6>16,650원</h6></td></tr>
                                </table>
                            </div>
                            <button class="purchase-button">Buy</button>
                            <button class="scrap-button">Scrap</button>
                        </div>
                    </div>
                    <div class="product-container">
                        <div class="product">
                            2.
                            <img src="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/284609073615780-32647246-1d35-4b96-8da4-262a39f7a279.jpg" alt="Product Image 1" />
                            <div class="product-info">
                                <table className="productTable">
                                    <tr><td><h5>닥터지 레드 블레미쉬 시카 수딩 크림 듀오 기획세트 50ml</h5></td></tr>
                                    <tr><td><h6>32,770원</h6></td></tr>
                                </table>
                            </div>
                            <button class="purchase-button">Buy</button>
                            <button class="scrap-button">Scrap</button>
                        </div>
                    </div>
                    <div class="product-container">
                        <div class="product">
                            3.
                            <img src="https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/9508847276305564-ae3485c2-a561-4df9-87aa-607e4e49b0ae.jpg" />
                            <div class="product-info">
                                <table className="productTable">
                                    <tr><td><h5>일리윤 히알루론 모이스춰 수분크림 100ml, 1개</h5></td></tr>
                                    <tr><td><h6>7,670원</h6></td></tr>
                                </table>
                            </div>
                            <button class="purchase-button">Buy</button>
                            <button class="scrap-button">Scrap</button>
                        </div>
                    </div>
                    <div class="product-container">
                        <div class="product">
                            2.
                            <img src="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/284609073615780-32647246-1d35-4b96-8da4-262a39f7a279.jpg" alt="Product Image 1" />
                            <div class="product-info">
                                <table className="productTable">
                                    <tr><td><h5>닥터지 레드 블레미쉬 시카 수딩 크림 듀오 기획세트 50ml</h5></td></tr>
                                    <tr><td><h6>32,770원</h6></td></tr>
                                </table>
                            </div>
                            <button class="purchase-button">Buy</button>
                            <button class="scrap-button">Scrap</button>
                        </div>
                    </div>
                    <div class="product-container">
                        <div class="product">
                            2.
                            <img src="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/284609073615780-32647246-1d35-4b96-8da4-262a39f7a279.jpg" alt="Product Image 1" />
                            <div class="product-info">
                                <table className="productTable">
                                    <tr><td><h5>닥터지 레드 블레미쉬 시카 수딩 크림 듀오 기획세트 50ml</h5></td></tr>
                                    <tr><td><h6>32,770원</h6></td></tr>
                                </table>
                            </div>
                            <button class="purchase-button">Buy</button>
                            <button class="scrap-button">Scrap</button>
                        </div>
                    </div>
                </div>
                <div className='result-btn'>
                    <button>설문 다시 하기</button>
                    <button>다른 설문 하기</button>
                    <button>홈으로 이동</button>
                </div>
            </div>
        </div>
    );
}
export default Result;