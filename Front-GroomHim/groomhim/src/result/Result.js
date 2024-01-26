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
                <div class="tooltip-container">
                    <span class="text">자세한 정보👀</span>
                    <span className="introDetail">   
                    <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 건성피부란  ? </b>         
                        <br />
                        피부의 유분(기름)과 수분(촉촉함)이 부족해서 <br />
                        표면이 거칠고 얼굴이 땅기는 피부타입이에요. <br /><br/>

                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 어떻게 해결하나요  ? </b> <br/>        
                        ✔ 유분제품을 너무 많이 바르면 모공을 막아서<br/>
                           좁쌀여드름이 나고 <br />
                        ✔  수분제품은 보통 가벼운 액체 타입이라서 <br/>
                           날아가기 쉬워요.
                            <br /><br />
                        ✅ 따라서, 보습제품과 유수분 밸런스가 중요합니다.
                    </span>
                </div>
            );
        }else if(skinType === '수부지') {
            return(
                <div>
                    <span class="text">자세한 정보👀</span>
                    <span className="introDetail">   
                    <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 수부지피부란  ? </b>         
                        <br />
                        원래는 지성인데, 피부의 기름을 닦아내다가 <br />
                        수분이 닦여서 수분은 부족하고  <br />
                        부족한 수분을 보호하기 위해 기름은 더 분비되어<br/>
                        생긴 피부타입이에요.<br/><br/>

                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 어떻게 해결하나요  ? </b> <br/>        
                        ✔ 유분을 너무 없애면 수분도 날아가고<br/>
                        ✔ 그렇다고 수분만 듬뿍 바르면 그것도 <br/>
                           모공을 막을 수 있어요.
                            <br /><br />
                        ✅ 따라서, 유분과 수분의 밸런스가 중요합니다.
                    </span>
                </div>
                );
        }else if(skinType === '지성') {
            return(
                <div class="tooltip-container">
                    <span class="text">자세한 정보👀</span>
                    <span className="introDetail">   
                    <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 지성 피부란  ? </b>         
                        <br />
                        말 그대로 피부에 기름이 많이 나오는 <br />
                        타입이에요. 보통 건조함을 느끼는 경우는 없고  <br />
                        <p Style="border-bottom : 1px solid black;">화농성 여드름, 머리 떡짐, 모공이 넓음, 피지</p><br/>
                        등등의 증상을 동반합니다.<br/><br/>

                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 어떻게 해결하나요  ? </b> <br/>        
                        ✔ 보통 기름종이를 많이 들고다니며 닦아줘요.<br/>
                        ✔ 하지만 기름을 너무 닦으면 수분도 날아가 <br/>
                           수분 부족한 지성형인 수부지가 될 수 있어요.
                            <br /><br />
                        ✅ 따라서, 유분과 수분의 밸런스를 잘 맞추고 <br/>
                            수분 크림 조차 기름지지 않은 제형으로 <br/>
                            발라주어야 합니다.
                    </span>
                </div>
                );
        }else {
            return(
                <div class="tooltip-container">
                        <span class="text">자세한 정보👀</span>
                        <span className="introDetail">   
                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 민감성 피부란  ? </b>         
                            <br />
                            환경이 바뀜에 따라 빠르고 민감하게 반응하는 피부로 <br />
                            <p Style="border-bottom : 1px solid black;">홍조, 가려움증, 발진 </p> 등의 증상이 있습니다.<br /><br/>

                            <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 어떻게 해결하나요  ? </b> <br/>        
                            ✔ 피부 장벽을 강화시켜주는 것이 1순위에요.<br/>
                            ✔ 순한 성분들 위주로 !  <br/>
                            ✔ 절대 피해야 할 성분들을 주의하며 구입!  <br/>
                                <br /><br />
                            ✅ 따라서, 피부장벽 강화 <br/>
                                제품 성분 확인이 중요합니다.
                        </span>
                </div>
            )
        }};
    const important = () => {
        if(skinType === '건성') {
            return(
                
                <p>
                    <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">  건성 피부 Key Point!</b>  <br/><br/>
                    이 타입은 수분을 유지해주기 위한 <b Style="color :red"><br/>보습</b>이 정말 중요합니다.</p>
            )
        }else if(skinType === '지성') {
            return(
                <p> <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">  지성 피부 Key Point!</b>   <br/><br/>
                    이 타입은 <b Style="color :red"><br/>수분과 유분의 </b> 밸런스를 맞추는 게  <br/>가장 중요합니다.</p>
                    
            )
        }else if(skinType === '수부지'){
            return(
                <p> <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">  수부지 피부 Key Point!</b>   <br/><br/>
                    이 타입은 <b Style="color :red">수분</b>을 유지해주는 것이 <br/>가장 중요합니다.<br/>
                또한, 볼은 건조하거나 각질이 생기고<br/>
                코나 이마는 유분이 많을 확률이 높아요.</p>
            )
        }else {
            return(
                <p> <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">  민감성 피부 Key Point!</b>   <br/><br/>
                이 타입은 피부가 예민하기 때문에 <br/><b Style="color :red">성분이 순한</b> 제품을 바르는 것이 <br/>가장 중요합니다.<br/>
                또한, 피부 장벽을 강화 시키는 것도 중요해요.</p>
            
            )
        }
    }

    const Skin = () => {
        if(skinType == "건성") {
            return( 
                <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                                <div  style={{alignItems : 'center'}}>
                                    <p>1단계<span style={{color : 'red'}}> 스킨 </span>제품 사용</p>
                                </div>
                                <button onClick={() => toggleDetails('item1')}>
                                    {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                                </button>
                                {showDetails.item1 && ( 
                                    <div className='youtube-item-detail'>
                                        <div className='youtube-profile displayFlex'>
                                        <img src='https://yt3.googleusercontent.com/80LHzlXj90CDw6l1HzA1MFZzIxOpKEVuvH9OCen7_B4L5NimaiSXOAqrNeG9Bj_fWTeOYZr6fQ=s176-c-k-c0x00ffffff-no-rj' />
                                            <div style={{ width : '100%', textAlign: 'left', marginLeft: '5%'}}>
                                                <p style={{fontSize: '15px'}}>디렉터 파이</p>
                                                <p style={{fontSize: '12px'}}>구독자 102만명</p>
                                            </div>
                                        </div>
                                        <br></br>
                                        <p>참고 영상</p>
                                        <p style={{fontSize : '12px'}}>
                                            <a href="https://www.youtube.com/watch?v=ROhvFRop7g8">토너 제품 정보 Click!</a>
                                        </p>
                                    </div>
                                )}
                </div>
                
            )
       }else if(skinType == "지성") { 
        return( 
            <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                            <div  style={{alignItems : 'center'}}>
                                <p>2단계<span style={{color : 'red'}}> 세럼 </span>발라주기</p>
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
                             <p>3단계<span style={{color : 'red'}}> 수분 크림 </span>발라주기</p>
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
        }else if(skinType == "수부지"){
            return( 
                <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                                <div  style={{alignItems : 'center'}}>
                                    <p>1단계<span style={{color : 'red'}}> 스킨 </span>제품 사용</p>
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
                                        <p>2단계<span style={{color : 'red'}}> 스킨 </span>제품 사용</p>
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
                                        <p>3단계<span style={{color : 'red'}}> 스킨 </span>제품 사용</p>
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
        }else {
            return( 
                <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                                <div  style={{alignItems : 'center'}}>
                                    <p>1단계<span style={{color : 'red'}}> 스킨 </span>제품 사용</p>
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
                                        <p>2단계<span style={{color : 'red'}}> 스킨 </span>제품 사용</p>
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
                                         <p>3단계<span style={{color : 'red'}}> 스킨 </span>제품 사용</p>
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
                    {Skin()};
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