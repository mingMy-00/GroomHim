import './Result.css';
import { useLocation , useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from '../skinTest/ProgressBar';
import Dryhim from '../assets/imgs/DryHim.png';
import TroubleHim from '../assets/imgs/TroubleHim.png';
import Him from '../assets/imgs/Him.jpg';
import OilHim from '../assets/imgs/OilHim.png';

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
            <p><b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">탈모에 있어 가장 중요한 것.</b> <br/><br/>
               어떤 두피의 타입이든, 머리를<br/> 
               올바르게 감는 게 가장 중요해요.<br /> <br/>
               <h5 Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white; width : 60%; margin : auto;" >
               ✔ 머리를 아침에 감고 계시나요?  <br />
               ✔ 뜨거운 물로 감기는 않나요? <br />
               ✔ 뜨거운 바람으로 대충 말리시나요? </h5><br/>
               무조건 <b Style="color : red;">탈모의 원인</b>입니다.<br/>
               자세히보기의 영상을 확인해주세요.
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
                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> ✔ 두피가 건조한 이유</b><br/>
                           
                            두피가 열이 많이 오르면  <br/>
                            모공이 확장되고, 확장된 모공은 <br/>
                            머리카락이 더 잘 뽑혀요. 또, 열감때문에 <br/>
                            수분이 날아가면서 건조해집니다. <br/>
                            
                            <br /><br />
                            <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> ✔ 샴푸를 올바르게 하는법!!</b><br/>
                            제가 이대로 6개월 해서 탈모 거의 예방했습니다.<br/>
                            매일 관리하는 두피를 두피센터가 이기지는 못해요.
                            <a href="https://youtu.be/GNvfMfntY7w?si=iEa7WEJuPizfklqe"><p Style="border-bottom : 1px solid black;">올바른 샴푸법 영상  Click! </p></a>
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
                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> ✔ 두피가 건조한 이유</b><br/>
                           
                            두피가 열이 많이 오르면  <br/>
                            모공이 확장되고, 확장된 모공은 <br/>
                            머리카락이 더 잘 뽑혀요. 또, <br/>
                            피지분비로 인해 막힌 모공이 표면을 <br/>
                            뜨겁게 만들어 열감도 느껴집니다. <br/>

                            <br /><br />
                            <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> ✔ 샴푸를 올바르게 하는법!!</b><br/>
                            제가 이대로 6개월 해서 탈모 거의 예방했습니다.<br/>
                            매일 관리하는 두피를 두피센터가 이기지는 못해요.
                            <a href="https://youtu.be/GNvfMfntY7w?si=iEa7WEJuPizfklqe"><p Style="border-bottom : 1px solid black;">올바른 샴푸법 영상  Click! </p></a>
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
                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> ✔ 지성 두피 샴푸 잘해야 하는 이유</b><br/>
                           
                            지성두피는 특히 샴푸를 올바르게 하는 게 중요해요.  <br/>
                            모공에 피지 분비량이 많기 때문에 제대로 샴푸를 안하면 <br/>
                            꽈악 막힌 모공이 모낭을 죽입니다. <br/>
        
                            <br /><br />
                            <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> ✔ 샴푸를 올바르게 하는법!!</b><br/>
                            제가 이대로 6개월 해서 탈모 거의 예방했습니다.<br/>
                            매일 관리하는 두피를 두피센터가 이기지는 못해요.
                            <a href="https://youtu.be/GNvfMfntY7w?si=iEa7WEJuPizfklqe"><p Style="border-bottom : 1px solid black;">올바른 샴푸법 영상  Click! </p></a>
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
                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> ✔건성 두피 아픈 이유</b><br/>
                           
                            건성두피는 주로 열감에 의한 경우가 많아요.  <br/>
                            두피의 열감으로 수분이 날아가면서 건조해지는거죠. <br/>
                            그러면서 딱딱한 두피가 머리카락을 아프게 하는데요.. <br/>
                            절대 뜨거운 물로 감으면 안됩니다 머리를. <br/>
                            닭 털도 뜨거운 물에 뽑는거 아시죠 ㅎ
        
                            <br /><br />
                            <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> ✔ 샴푸를 올바르게 하는법!!</b><br/>
                            제가 이대로 6개월 해서 탈모 거의 예방했습니다.<br/>
                            매일 관리하는 두피를 두피센터가 이기지는 못해요.
                            <a href="https://youtu.be/GNvfMfntY7w?si=iEa7WEJuPizfklqe"><p Style="border-bottom : 1px solid black;">올바른 샴푸법 영상  Click! </p></a>
                        </span>
                    </div>
                </div>
                );
        }
    }

    const HairProduct = () => {
        if(skinType == "열감을 느끼는 건성두피") {
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
                </div>
                
            )
       }else if(skinType == "열감을 느끼는 지성두피") { 
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
                                        <a href="https://youtu.be/TyoTyDBeN2k?si=OhOf84L8N88j6q90">자세한 샴푸 소개</a>
                                    </p>
                                </div>
                            )}
                            <br/><br/>
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
                                            <img src='https://www.health.kr/images/ext_images/pack_img/P_2019090900042_00.png'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                                <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>샹푸 형태</p> 
                                                    <p>약 16,000원</p>
                                                </div>
                                                <p>듀오백스액</p>
                                                <button>약국에서 처방 필수</button>
                                            </div>
                                            <img src="https://mblogthumb-phinf.pstatic.net/MjAxNzA2MjNfODAg/MDAxNDk4MTg5MTEzMDk2.wXtSHy-XebHz_qG_HCIK8Fj0Zp9lCFsK5hSe-vWcmfUg.5S0mZvXmuuqA3MJtgTxTVYHBGV9U6o7z3ojcIqQDWsEg.JPEG.cordialguy2/image_9515614291498188868487.jpg?type=w800" />
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                                <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>액제 형태</p> 
                                                    <p>처방 전 미정</p>
                                                </div>
                                                <p>크러밴액</p>
                                                <button>약국에서 처방 필수</button>
                                            </div>
                                        </div>
                                        <br></br>
                                        <p>참고 영상</p>
                                        <p style={{fontSize : '12px'}}>
                                            <a href="https://youtu.be/bmRlLTqfts4?si=KTrdWM-mKZlK0iFj">샴푸 사용법 Click!</a>
                                            <a href="https://blog.naver.com/kangjj372/223297885145">스테로이드 종류 Click!</a>
                                        </p>
                                    </div>
                                )}
            </div>
        )
        }else if(skinType == "지성두피"){
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
                                            <a href="https://youtu.be/TyoTyDBeN2k?si=OhOf84L8N88j6q90">자세한 샴푸 소개</a>
                                        </p>
                                    </div>
                                )}
                                <br/><br/>
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
                                                <img src='https://www.health.kr/images/ext_images/pack_img/P_2019090900042_00.png'></img>
                                                <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                                    <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                        <p style={{fontSize : '13px'}}>샹푸 형태</p> 
                                                        <p>약 16,000원</p>
                                                    </div>
                                                    <p>듀오백스액</p>
                                                    <button>약국에서 처방 필수</button>
                                                </div>
                                                <img src="https://mblogthumb-phinf.pstatic.net/MjAxNzA2MjNfODAg/MDAxNDk4MTg5MTEzMDk2.wXtSHy-XebHz_qG_HCIK8Fj0Zp9lCFsK5hSe-vWcmfUg.5S0mZvXmuuqA3MJtgTxTVYHBGV9U6o7z3ojcIqQDWsEg.JPEG.cordialguy2/image_9515614291498188868487.jpg?type=w800" />
                                                <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                                    <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                        <p style={{fontSize : '13px'}}>액제 형태</p> 
                                                        <p>처방 전 미정</p>
                                                    </div>
                                                    <p>크러밴액</p>
                                                    <button>약국에서 처방 필수</button>
                                                </div>
                                            </div>
                                            <br></br>
                                            <p>참고 영상</p>
                                            <p style={{fontSize : '12px'}}>
                                                <a href="https://youtu.be/bmRlLTqfts4?si=KTrdWM-mKZlK0iFj">샴푸 사용법 Click!</a>
                                                <a href="https://blog.naver.com/kangjj372/223297885145">스테로이드 종류 Click!</a>
                                            </p>
                                        </div>
                                    )}
                                     <br/><br/>
                                 <div  style={{alignItems : 'center'}}>
                                        <p>3단계<span style={{color : 'red'}}> 먹는 약</span>처방</p>
                                    </div>
                                    <button onClick={() => toggleDetails('item1')}>
                                        {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                                    </button>
                                    {showDetails.item1 && ( 
                                        <div className='youtube-item-detail'>
                                           <p>먹는 약은 약국에서 처방 받고, 의사 선생님께 <br/>
                                           자세히 여쭤보시길 바래요. 꼭 낫기를 ! </p>
                                        </div>
                                    )}
                </div>
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
                    </div>
                    <img src={Him} style={{width : '80%'}}></img>
                    <div>
                        <p>{memberName}님의 두피는 <b className="b" style={{color : 'red'}} > {skinType} </b>입니다.</p>
                        <p>제품 추천은 아래와 같습니다.</p>
                        <div className='type_explanation'>
                            {important()}
                            <br/>
                            <div class="tooltip-container">
                            {introDetail()}
                    </div>
                        </div>
                    </div>
                    {HairProduct}
                </div>
            </div>
            <div className='result-btn'>
                <button onClick={() => navigate('/skinTest')}>설문 다시 하기</button>
                <button  onClick={() => navigate('/')}>홈으로 이동</button>
            </div>
        </div>
    );
}export default HairLoss;