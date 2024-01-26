import './Result.css';
import { useLocation , useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from '../skinTest/ProgressBar';
import him from '../assets/imgs/DryHim.png';

function HairLoss() {
    const navigate = useNavigate();
    const location = useLocation();
    const [skinType, setSkinType] = useState(location.state.skinType);

    /*로그인한 회원 정보*/
    const storedData = JSON.parse(sessionStorage.getItem("loginMember"));
    const memberName = storedData ? storedData.memberName : null;

    // 상세 정보가 보여지는 상태를 관리하는 state
    const [showDetails, setShowDetails] = useState({
        item1: false,
        item2: false,
        item3: false
    });

    // 함수를 사용하여 상세 정보를 토글합니다.
    const toggleDetails = (item) => {
        setShowDetails((prevDetails) => ({
            ...prevDetails,
            [item]: !prevDetails[item],
        }));
    };

    const important = () => {
        return(
            <p>어떤 두피의 타입이든, 머리를<br/> 
               올바르게 감는 게 가장 중요해요.<br /> 
               머리를 아침에 감고 계시나요?  <br />
               뜨거운 물로 감기는 않나요? <br />
               뜨거운 바람으로 대충 말리시나요? <br/>
               무조건 탈모의 원인입니다. 자세히보기의 영상을 <br/>
               확인해주세요.
               </p>
        )
    }

    const introDetail = () => {
        if(skinType.includes("열감") && (skinType.includes("건성"))) {
            return(
                <div id="margin">
                    <div class="tooltip-container">
                        <span class="text">자세한 정보👀</span>
                        <span className="introDetail">           
                            ✔  열감 <br />
                            두피가 열이 많이 오르면  <br/>
                            모공이 확장되고, 확장된 모공은 <br/>
                            머리카락이 더 잘 뽑혀요. 또, 열감때문에 <br/>
                            수분이 날아가면서 건조해집니다. <br/>
                            
                            <br /><br />
                            ✔ 샴푸를 올바르게 감는 로드맵 꼭꼭 하세요! <br/>
                            제가 이대로 6개월 해서 탈모 거의 예방했습니다.
                            <a href="https://youtu.be/GNvfMfntY7w?si=iEa7WEJuPizfklqe">올바른 샴푸법 영상</a>
                        </span>
                    </div>
                </div>
                );
        }else if(skinType.includes("열감") && (skinType.includes("지성"))) {
            return(
                <div id="margin">
                    <div class="tooltip-container">
                        <span class="text">자세한 정보👀</span>
                        <span className="introDetail">           
                        ✔  열감 <br />
                            두피가 열이 많이 오르면  <br/>
                            모공이 확장되고, 확장된 모공은 <br/>
                            머리카락이 더 잘 뽑혀요. 또, <br/>
                            피지분비로 인해 막힌 모공이 표면을 <br/>
                            뜨겁게 만들어 열감도 느껴집니다. <br/>
                            
                            <br /><br />
                            ✔ 샴푸를 올바르게 감는 로드맵 꼭꼭 하세요! <br/>
                            제가 이대로 6개월 해서 탈모 거의 예방했습니다.
                            <a href="https://youtu.be/GNvfMfntY7w?si=iEa7WEJuPizfklqe">올바른 샴푸법 영상</a>
                        </span>
                    </div>
                </div>
                );
        }else if((!skinType.includes("열감")) && skinType.includes("지성") ) {
            return(
                <div id="margin">
                    <div class="tooltip-container">
                        <span class="text">자세한 정보👀</span>
                        <span className="introDetail">           
                            ✔  열감 <br />
                            지성두피는 특히 샴푸를 올바르게 하는 게 중요해요.  <br/>
                            모공에 피지 분비량이 많기 때문에 제대로 샴푸를 하는 것. <br/>

                            <br /><br />
                            ✔ 샴푸를 올바르게 감는 로드맵 꼭꼭 하세요! <br/>
                            제가 이대로 6개월 해서 탈모 거의 예방했습니다.
                            <a href="https://youtu.be/GNvfMfntY7w?si=iEa7WEJuPizfklqe">올바른 샴푸법 영상</a>
                        </span>
                    </div>
                </div>
                );
        }else if((!skinType.includes("열감")) &&skinType.includes("건성")) {
            return(
                <div id="margin">
                    <div class="tooltip-container">
                        <span class="text">자세한 정보👀</span>
                        <span className="introDetail">           
                            ✔  열감 <br />
                            건성두피는 주로 열감에 의한 경우가 많아요.  <br/>
                            두피의 열감으로 수분이 날아가면서 건조해지는거죠. <br/>
                            절대 뜨거운 물로 감으면 안됩니다 머리를.
                            
                            <br /><br />
                            ✔ 샴푸를 올바르게 감는 로드맵 꼭꼭 하세요! <br/>
                            제가 이대로 6개월 해서 탈모 거의 예방했습니다.
                            <a href="https://youtu.be/GNvfMfntY7w?si=iEa7WEJuPizfklqe">올바른 샴푸법 영상</a>
                        </span>
                    </div>
                </div>
                );
        }
    }

    return (
        <div>
            <div className='result-container'>
                <h2>1분 설문조사</h2>
                <div className='content'>
                    <div className='result-bar'>
                        <p>설문 완료!</p>
                    </div>
                    <img src={him} style={{width : '80%'}}></img>
                    <div>
                        <p>{memberName}님의 두피는 <b className="b" style={{color : 'red'}} /> {skinType}입니다.</p>
                        <p>탈모는 자세히 보기를 봐주세요.</p>
                        <p>제품 추천은 아래와 같습니다.</p>
                        <div className='type_explanation'>
                            {important()}
                            <br/>
                            <div class="tooltip-container">
                            {introDetail()}
                    </div>
                        </div>
                    </div>

                    <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                        <div  style={{alignItems : 'center'}}>
                            <p>유튜브 조회수<span style={{color : 'red'}}> 14만회 </span>루틴</p>
                        </div>
                        <button onClick={() => toggleDetails('item1')}>
                            {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                        </button>
                        {showDetails.item1 && ( 
                            <div className='youtube-item-detail'>
                                <div className='youtube-profile displayFlex'>
                                <img src='https://yt3.ggpht.com/80LHzlXj90CDw6l1HzA1MFZzIxOpKEVuvH9OCen7_B4L5NimaiSXOAqrNeG9Bj_fWTeOYZr6fQ=s48-c-k-c0x00ffffff-no-rj' />
                                    <div style={{ width : '100%', textAlign: 'left', marginLeft: '5%'}}>
                                        <p style={{fontSize: '15px'}}>디렉터 파이</p>
                                        <p style={{fontSize: '12px'}}>구독자 102만명</p>
                                    </div>
                                </div>
                                <div className='product-item displayFlex'>
                                    <img src='https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/75ce/80861e190fff6837c708bb2d51a9463078b45de3ce7e6e71300b87480cdf.jpeg'></img>
                                    <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                        <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                            <p style={{fontSize : '13px'}}>Step1.</p> 
                                            <p>24,000원</p>
                                        </div>
                                        <p>어바웃미 쌀막걸리 클렌징 오일 195ml</p>
                                        <button>구매하러 가기</button>
                                    </div>
                                </div>
                                <div className='product-item displayFlex'>
                                    <img src='https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/rs_quotation_api/eivyaael/08a38fcc0b634c3bb5501acf1fd1dc9e.jpg'></img>
                                    <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                    <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                            <p style={{fontSize : '13px'}}>Step2.</p> 
                                            <p>14,000원 </p>
                                        </div>
                                        <p>어바웃미 쌀 막걸리 클렌징 폼 120ml</p>
                                        <button>구매하러 가기</button>
                                    </div>
                                </div>
                                <div className='product-item displayFlex'>
                                    <img src='https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2469747148449101-3d7904a4-d2f2-472e-b599-d3a9bb08f54d.jpg'></img>
                                    <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                    <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                            <p style={{fontSize : '13px'}}>Step3.</p> 
                                            <p>24,000원</p>
                                        </div>
                                        <p>라로슈포제 세로징크 세범 컨트롤 토닝 미스트 150ml</p>
                                        <button>구매하러 가기</button>
                                    </div>
                                </div>
                                <br></br>
                                <p>참고 영상</p>
                                <p style={{fontSize : '12px'}}>
                                    수부지 피부를 위한 성분과 스킨케어는 따로 있다?! 클렌징부터 베이스까지 by. 디렉터파이
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='result-btn'>
                <button onClick={() => navigate('/skinTest')}>설문 다시 하기</button>
                <button  onClick={() => navigate('/')}>홈으로 이동</button>
            </div>
        </div>
    );
}export default HairLoss;