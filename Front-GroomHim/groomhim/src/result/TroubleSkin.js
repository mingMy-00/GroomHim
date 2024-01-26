import './Result.css';
import { useLocation , useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from '../skinTest/ProgressBar';
import Dryhim from '../assets/imgs/DryHim.png';
import TroubleHim from '../assets/imgs/TroubleHim.png';
import Him from '../assets/imgs/Him.jpg';
import OilHim from '../assets/imgs/OilHim.png';


function TroubleSkin() {
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
        if(skinType == "여드름 건성피부") {
            return(
                <p><b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">Q.건성 피부란?</b> <br/><br/>
                        피부의 유분(기름)과 수분(촉촉함)이 부족해서 <br />
                        표면이 거칠고 얼굴이 땅기는 피부타입이에요. <br /><br/>

                <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">Q.건조한데 여드름?</b> <br/><br/>
                좁쌀 여드름은 건조한 피부를 보호하기 위해서 <br/>
                피부 자체에서 나오는 기름이 표면을 막아서 <br/>
                생기는 여드름이에요. 자세한 정보는 <br/>
                <b Style="color : red;">아래 자세히 보기 클릭</b>
                </p>
            )

        }else if(skinType == "여드름 지성피부") { 
            return(
                <p><b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">Q.지성 피부란?</b> <br/><br/>
                        말 그대로 피부에 기름이 많이 나오는 <br />
                        타입이에요. 보통 건조함을 느끼는 경우는 없고  <br />
                <b>화농성 여드름, 머리 떡짐, 모공이 넓음, 피지</b><br/>
                        등등의 증상을 동반합니다.<br/><br/>

                <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">Q.지성 피부 여드름?</b> <br/><br/>
                보통 화농성 여드름인 경우가 많아요. <br/>
                얼굴에서 나오는 유분이 염증을 더  <br/>
                키우기 때문이죠....  <br/>
                </p>
            )
        }else {
            return(
                <p><b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">Q.수부지 피부란?</b> <br/><br/>
                        원래는 지성인데, 피부의 기름을 닦아내다가 <br />
                        수분이 닦여서 수분은 부족하고  <br />
                        부족한 수분을 보호하기 위해 기름은 더 분비되어<br/>
                        생긴 피부타입이에요.<br/><br/>

                <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">Q.수부지에 여드름?</b> <br/><br/>
                    어떻게 보면 가장 복합적인 피부로 <br/>
                    볼은 건조해서 각질이,  <br/>
                    코랑 이마는 유분이 많아서 피지나 여드름이 <br/>
                    많이 나는 피부타입입니다.
                </p>
            )
        }
    }

    const introDetail = () => {
        if(skinType == "여드름 건성피부") {
            return(
                <div id="margin">
                    <div class="tooltip-container">
                        <span class="text">자세한 정보👀</span>
                        <span className="introDetail">         
                        
                            ✔  좁쌀 여드름은 처음에는 흰색으로 화이트헤드지만 <br/>
                                짜고나서 염증이 생기면 그게 염증성 여드름이 되고 <br/>
                                짜기 전에 노출된 안의 흰 부분이 변색 되는 게 <br/>
                                블랙헤드 ! 라는 사실 👉 👉 <br/><br/>
                    <a  Style="border-bottom : 1px solid black;" href="https://youtu.be/CFedypSuOtM?si=jXdgizUXgYlvyUY7">좁쌀 여드름에 대한 정보 영상 Click!</a>
                        </span>
                    </div>
                </div>
                );
        }else if(skinType == "여드름 지성피부") { 
            return(
                <div id="margin">
                    <div class="tooltip-container">
                        <span class="text">자세한 정보👀</span>
                        <span className="introDetail">         
                          
                            ✔   좁쌀 여드름이 첨에 흰색으로 화이트헤드잖아요? <br/>
                                짜고나서 염증이 출입하면 그게 염증성 여드름이 돼요 <br/>
                                염증성 여드름은 우선 피부에 있는 기름부터 약 처방으로<br/>
                                제거 해주시는 게 좋아요.  <br/><br/>
                                
                            ✔ 보통 약 처방을 받으면 피부가 입 안까지 건조하다고 <br/>
                            하지만 우선은 몸에 있는 기름을 다 빼주고 난 뒤에 <br/>
                            건조한 피부를 보습 시켜주는 게 맞는 방법입니다. <br/>
                                 👉 👉 <br/><br/>
                    <a Style="border-bottom : 1px solid black;" href="https://youtu.be/n0rx86W1tnY?si=adPzRlt9syiULaEw">화농성 여드름에 대한 정보 영상 Click!</a>
                        </span>
                    </div>
                </div>
                );
        }else {
            return(
                <div id="margin">
                    <div class="tooltip-container">
                        <span class="text">자세한 정보👀</span>
                        <span className="introDetail">         
                          
                            ✔   수부지가 주로 겪는 여드름은 코나 이마 위주로 염증성 여드름, <br/>
                                가끔 볼이 너무 건조해서 생기는 붉은 포진같은 여드름이 <br/>
                                목까지 생기는 경우도 있어요!! <br/>
                                볼은 멀쩡 하다면 코, 이마가 고민이겠죠 ? 👉 👉 <br/><br/>
                    <a  Style="border-bottom : 1px solid black;" href="https://youtu.be/rBycoce0KtM?si=WZIUpjt6bEblyyib">수부지 여드름에 대한 정보 영상 Click!</a> <br/>
                    이거는 지성 영상이긴 하지만 수부지에게도 정말 많은 도움이 됩니다.
                        </span>
                    </div>
                </div>
                );
        }
    }

    const TroubleProduct = () => {
        if(skinType == "여드름 건성피부") {
            return( 
                <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                                <div  style={{alignItems : 'center'}}>
                                    <p>조회수 <span style={{color : 'red'}}> 86만회</span>건성 여드름 관리</p>
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
       }else if(skinType == "여드름 지성피부") { 
        return( 
            <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                            <div  style={{alignItems : 'center'}}>
                            <p>조회수 <span style={{color : 'red'}}> 16만회</span>지성 여드름 관리</p>
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
                                <p>조회수 <span style={{color : 'red'}}> 8만회</span>지성 여드름 관리</p>
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
        }else {
            return( 
                <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                                <div  style={{alignItems : 'center'}}>
                                <p>조회수 <span style={{color : 'red'}}> 97만회</span>수부지 여드름 관리</p>
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
                                 <p>조회수 <span style={{color : 'red'}}> 76만회</span>수부지 여드름 관리</p>
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
                                     <p>조회수 <span style={{color : 'red'}}> 16만회</span>수부지 여드름 관리</p>
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

    const him = () => {
        if(skinType == "여드름 건성피부") {
            return(
                Dryhim
            );
        }else if(skinType == "여드름 지성피부") {
            return(
                TroubleHim
                );
        }else {
            return(
                OilHim
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
                    <img src={him()} style={{width : '80%'}}></img>
                    <div>
                        <p>{memberName}님의 피부 상태는 <br/><b className="b" style={{color : 'red'}}> {skinType}</b>일
                        입니다.</p>
                        <p>상태에 따른 제품 추천은 아래와 같습니다.</p>
                        <div className='type_explanation'>
                            {important()}
                            <br/>
                            <div class="tooltip-container">
                            {introDetail()}
                    </div>
                        </div>
                    </div>
                    {TroubleProduct()}
            </div>
            </div>
            <div className='result-btn'>
                <button onClick={() => navigate('/skinTest')}>설문 다시 하기</button>
                <button  onClick={() => navigate('/')}>홈으로 이동</button>
            </div>
        </div>
    );
}export default TroubleSkin;