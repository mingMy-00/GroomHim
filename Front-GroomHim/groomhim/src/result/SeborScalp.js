import './Result.css';
import { useLocation , useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from '../skinTest/ProgressBar';
import him from '../assets/imgs/DryHim.png';

function SeborScalp() {
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
        if(skinType == "약한 지루성 두피") {
            return(
                <p>지루성 두피란 건성, 지성 피부 타입 가리지 않고 <br/>
                지루성 피부염이 두피에 생긴것입니다. <br />
                두피 빨감 + 가려움 + 심하면 탈모로 이어지는 <br/>
                두피입니다.....  <br/> <br/> 
                현재는 심하지 않은 단계이기 때문에 <br />
                샴푸만 바꿔주는 것으로도 충분합니다. <br />
                </p>
            )

        }else if(skinType == "지루성 두피 심하기 직전") { 
            return(
                <p>지루성 두피란 ~~~ 에요.<br /> 
                현재 조금 심한 단계이기 때문에 <br />
                로도 충분합니다. <br />
                </p>
            )
        }else {
            return(
                <p>지루성 두피란 ~~~ 에요.<br /> 
                매우 심한 단계로 볼 수 있어서<br />
                로도 충분합니다. <br />
                </p>
            )
        }
    }

    const introDetail = () => {
        return(
            <div id="margin">
                <div class="tooltip-container">
                    <span class="text">자세한 정보👀</span>
                    <span className="introDetail">           
                        ✔  지루성 두피염이 생기는 원인 <br />
                        피곤하거나, 음주르 하면 얼굴 두피의 피지분비량 상승 <br/>
                        그러면서 말라세지아 라고 하는 피부 상제균의 증으로 인해 <br/>
                        각질, 모낭염, 두피 붉어짐 등등 여드름이 생김. <br/>
                        
                        <br /><br />
                        따라서 ! 향진균제가 들어있는 약용 샴푸 사용.<br/>
                        염증을 낮춰주는 스테로이드 외용액 <br/>
                        먹는약 1-2주 복용하면 빨리 호전됨. 

                        <br /><br/>
                        그러나, 원인은 항상 우리 몸에 존재하는 상재균 때문이라 
                        <br/> 완전히 호전 되는 것은 없고 컨디션이 나빠지면 <br/>
                        다시 재발할 확률이 90%이다. 

                        ✔ 올바른 샴푸법 <br/>
                        약 성분인 향진균제 샴푸 일주일에 1~2회 사용하기. <br/>
                        지루성 두피라고 샴푸를 하루에 여러 번 하지 않기. <br/>
                        머리 감기 전에 빗질 해주기. 각질 제거가 됩니다. <br/>
                        약용 샴푸는 3~5분간 방치해주기 꼭 ! <br/>
                        머리를 아주아주 잘 말려주기 (균들은 수분을 좋아합니다.)
                    </span>
                </div>
            </div>
            );
    }

    const SeborShampoo = () => {
        if(skinType == "약한 지루성 두피") {
            return( 
                <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                                <div  style={{alignItems : 'center'}}>
                                    <p>1단계<span style={{color : 'red'}}> 약용 </span>샴푸 사용</p>
                                </div>
                                <button onClick={() => toggleDetails('item1')}>
                                    {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                                </button>
                                {showDetails.item1 && ( 
                                    <div className='youtube-item-detail'>
                                        <div className='youtube-profile displayFlex'>
                                        <img src='https://yt3.ggpht.com/6uTfJjqQ7vEeK6H7VjZ5exFUnuYkRbQP1fia50D0tweFAYjvfJlyQy2BtyZGJb3fOXiFVeut=s88-c-k-c0x00ffffff-no-rj' />
                                            <div style={{ width : '100%', textAlign: 'left', marginLeft: '5%'}}>
                                                <p style={{fontSize: '15px'}}>삼탈모 TV!</p>
                                                <p style={{fontSize: '12px'}}>구독자 1.54만명</p>
                                            </div>
                                        </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131213_172%2Fsimtong714_1386907834769nzJVW_JPEG%2F%25BB%25E7%25C1%25F8_013.jpg&type=a340'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                                <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>Best 1.</p> 
                                                    <p>약 13,000원</p>
                                                </div>
                                                <p>세비프록스</p>
                                                <button>약국에서만 구매 가능</button>
                                            </div>
                                        </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTZfNDEg%2FMDAxNjc4OTUyMjEzMzE3.70R7Kd1JIQkPFo1iR7jlq1n6XfPE_VhSBTIcmmyci48g._b8k_q-mr5h0MK_l9oxoKC1xQEm38jtLvmIVL0lb470g.JPEG.misojindentist1%2F1678952118866%25A3%25AD7.jpg&type=a340'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>Best 2.</p> 
                                                    <p>약 14,000원 </p>
                                                </div>
                                                <p>니조랄 샴푸</p>
                                                <button>약국에서만 구매 가능</button>
                                            </div>
                                        </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEyMTlfNjYg%2FMDAxNzAyOTk2NjQ5NjEx.eFGj45KSx46QMDIyG8EUoKU_rcgNW3DWaBw61ziWDdYg.pUjRsdYbBzzIOL38DgaGZukVYZruDCUKGoc_LUXkkiEg.PNG.kangjj372%2F3.png&type=a340'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>Best 3.</p> 
                                                    <p>약 10,000원</p>
                                                </div>
                                                <p>케이프록스 샴푸</p>
                                                <button>약국에서만 구매 가능</button>
                                            </div>
                                        </div>
                                        <br></br>
                                        <p>참고 영상</p>
                                        <p style={{fontSize : '12px'}}>
                                            <a href="https://youtu.be/TyoTyDBeN2k?si=OhOf84L8N88j6q90">자세한 샴푸 소개 Click!</a>
                                        </p>
                                    </div>
                                )}
                                 <div  style={{alignItems : 'center'}}>
                                    <p>2단계<span style={{color : 'red'}}> 스테로이드 외용액 </span>처방</p>
                                </div>
                                <button onClick={() => toggleDetails('item1')}>
                                    {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                                </button>
                                {showDetails.item1 && ( 
                                    <div className='youtube-item-detail'>
                                        <div className='youtube-profile displayFlex'>
                                        <img src='https://yt3.ggpht.com/ytc/AIf8zZT4SCsnXvh-9-SsUjdwBwIWnYomX3KoJsgIuf717Q=s88-c-k-c0x00ffffff-no-rj' />
                                            <div style={{ width : '100%', textAlign: 'left', marginLeft: '5%'}}>
                                                <p style={{fontSize: '15px'}}>교육하는 의사! 이동환 TV</p>
                                                <p style={{fontSize: '12px'}}>구독자 94.6만명</p>
                                            </div>
                                        </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131213_172%2Fsimtong714_1386907834769nzJVW_JPEG%2F%25BB%25E7%25C1%25F8_013.jpg&type=a340'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                                <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>샹푸 형태</p> 
                                                    <p>약 13,000원</p>
                                                </div>
                                                <p>세비프록스</p>
                                                <button>약국에서 처방 필수</button>
                                            </div>
                                        </div>
                                        <br></br>
                                        <p>참고 영상</p>
                                        <p style={{fontSize : '12px'}}>
                                            <a href="https://youtu.be/bmRlLTqfts4?si=KTrdWM-mKZlK0iFj">샴푸 사용법 Click!</a>
                                        </p>
                                    </div>
                                )}
                </div>
                
            )
       }else if(skinType == "지루성 두피 심하기 직전") { 
        return( 
            <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                            <div  style={{alignItems : 'center'}}>
                                <p>유튜브 조회수<span style={{color : 'red'}}> 4.7만회 </span>샴푸 추천</p>
                            </div>
                            <button onClick={() => toggleDetails('item1')}>
                                {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                            </button>
                            {showDetails.item1 && ( 
                                <div className='youtube-item-detail'>
                                    <div className='youtube-profile displayFlex'>
                                    <img src='https://yt3.ggpht.com/6uTfJjqQ7vEeK6H7VjZ5exFUnuYkRbQP1fia50D0tweFAYjvfJlyQy2BtyZGJb3fOXiFVeut=s88-c-k-c0x00ffffff-no-rj' />
                                        <div style={{ width : '100%', textAlign: 'left', marginLeft: '5%'}}>
                                            <p style={{fontSize: '15px'}}>삼탈모 TV!</p>
                                            <p style={{fontSize: '12px'}}>구독자 1.54만명</p>
                                        </div>
                                    </div>
                                    <div className='product-item displayFlex'>
                                        <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131213_172%2Fsimtong714_1386907834769nzJVW_JPEG%2F%25BB%25E7%25C1%25F8_013.jpg&type=a340'></img>
                                        <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                <p style={{fontSize : '13px'}}>Best 1.</p> 
                                                <p>약 13,000원</p>
                                            </div>
                                            <p>세비프록스</p>
                                            <button>약국에서만 구매 가능</button>
                                        </div>
                                    </div>
                                    <div className='product-item displayFlex'>
                                        <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTZfNDEg%2FMDAxNjc4OTUyMjEzMzE3.70R7Kd1JIQkPFo1iR7jlq1n6XfPE_VhSBTIcmmyci48g._b8k_q-mr5h0MK_l9oxoKC1xQEm38jtLvmIVL0lb470g.JPEG.misojindentist1%2F1678952118866%25A3%25AD7.jpg&type=a340'></img>
                                        <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                        <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                <p style={{fontSize : '13px'}}>Best 2.</p> 
                                                <p>약 14,000원 </p>
                                            </div>
                                            <p>니조랄 샴푸</p>
                                            <button>약국에서만 구매 가능</button>
                                        </div>
                                    </div>
                                    <div className='product-item displayFlex'>
                                        <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEyMTlfNjYg%2FMDAxNzAyOTk2NjQ5NjEx.eFGj45KSx46QMDIyG8EUoKU_rcgNW3DWaBw61ziWDdYg.pUjRsdYbBzzIOL38DgaGZukVYZruDCUKGoc_LUXkkiEg.PNG.kangjj372%2F3.png&type=a340'></img>
                                        <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                        <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                <p style={{fontSize : '13px'}}>Best 3.</p> 
                                                <p>약 10,000원</p>
                                            </div>
                                            <p>케이프록스 샴푸</p>
                                            <button>약국에서만 구매 가능</button>
                                        </div>
                                    </div>
                                    <br></br>
                                    <p>참고 영상</p>
                                    <p style={{fontSize : '12px'}}>
                                        <a href="https://youtu.be/TyoTyDBeN2k?si=OhOf84L8N88j6q90">자세한 샴푸 소개</a>
                                    </p>
                                </div>
                            )}
            </div>
        )
        }else {
            return(
                <>
                </>
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
                        <p>{memberName}님의 두피 상태는 <b className="b" style={{color : 'red'}} /> <br/>
                         {skinType}일 확률이 높습니다.</p>
                        <p>상태에 따른 제품 추천은 아래와 같습니다.</p>
                        <div className='type_explanation'>
                            {important()}
                            <br/>
                            <div class="tooltip-container">
                            {introDetail()}
                    </div>
                        </div>
                    </div>
                    {SeborShampoo()}
            </div>
            </div>
            <div className='result-btn'>
                <button onClick={() => navigate('/skinTest')}>설문 다시 하기</button>
                <button  onClick={() => navigate('/')}>홈으로 이동</button>
            </div>
        </div>
    );
}export default SeborScalp;