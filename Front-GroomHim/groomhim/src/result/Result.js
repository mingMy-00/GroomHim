import './Result.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from '../skinTest/ProgressBar';
import him from '../assets/imgs/DryHim.png';

function Result() {
    const location = useLocation();
    let navigate = useNavigate();
    const [skinType, setSkinType] = useState(location.state.skinType);
    const [progress, setProgress] = useState(0);

    /*로그인한 회원 정보*/
    const storedData = JSON.parse(sessionStorage.getItem("loginMember"));
    const memberName = storedData ? storedData.memberName : null;
    const memberNo   = storedData ? Number(storedData.memberNo) : null;

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

    const introDetail = () => {
        if(skinType === '건성') {
            return(
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
                        ✔ 따라서, 보습제품과 유수분 밸런스가 중요합니다.
                    </span>
                </div>
            </div>
            );
        }else if(skinType === '수부지') {
            return(
                <div>
                    <span class="text">자세한 정보👀</span>
                    <span className="introDetail">           
                        Q. 수부지피부란  ? <br /><br />
                        A. 피부의 유분(기름)과 수분(촉촉함)이 부족해서 <br />
                        표면이 거칠고 얼굴이 땅기는 피부타입이에요. <br /><br />

                            유분제품을 너무 많이 바르면 모공을 막아서
                            좁쌀여드름이 나고
                            <br />
                            수분제품은 보통 가벼운 액체 타입이라서 날아가기 쉬워요.
                            <br /><br />
                        
                        ✔ 따라서, 보습제품과 유수분 밸런스가 중요합니다.
                    </span>
                </div>
                );
        }else {
            return(
                <div id="margin">
                    <div class="tooltip-container">
                        <span class="text">자세한 정보👀</span>
                        <span className="introDetail">           
                            Q. 지성피부란  ? <br />
                            A. 피부의 유분(기름)과 수분(촉촉함)이 부족해서 <br />
                            표면이 거칠고 얼굴이 땅기는 피부타입이에요. <br /><br />

                                유분제품을 너무 많이 바르면 모공을 막아서
                                좁쌀여드름이 나고
                                <br />
                                수분제품은 보통 가벼운 액체 타입이라서 날아가기 쉬워요.
                                <br /><br />
                            
                            ✔ 따라서, 보습제품과 유수분 밸런스가 중요합니다.
                        </span>
                    </div>
                </div>
                );
        }};
    const important = () => {
        if(skinType === '건성') {
            return(
                <p>이 타입은 수분을 유지해주기 위한 <b style="color :red">보습</b>이 정말 중요합니다.</p>
            )
        }else if(skinType === '지성') {
            return(
                <p>이 타입은 <b style="color :red">유수분</b> 밸런스를 맞추는 게 가장 중요합니다.</p>
            )
        }else if(skinType === '수부지'){
            return(
                <p>이 타입은 <b style="color :red">수분</b>을 유지해주는 것이 가장 중요합니다.</p>
            )
        }else {
            return(
                <p>이 타입은 피부가 예민하기 때문에 <br/><b style="color :red">성분이 순한</b> 제품을 바르는 것이 <br/>가장 중요합니다.</p>
            )
        }
    }

    return (
        <div>
            <div className='result-container'>
                <h2>1분 설문조사</h2>
                <div className='content'>
                    <div className='result-bar'>
                        <p>설문 완료!</p>
                        <ProgressBar progress={0} totalQuestions={0} />
                    </div>
                    <img src={him} style={{width : '80%'}}></img>
                    <div>
                        <p>{memberName}님의 피부타입은 <b className="b" style={{color : 'red'}}>{skinType}</b> 입니다.</p>
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
}

export default Result;