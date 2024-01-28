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
                                    <p>Step1. <span style={{color : 'red'}}> 수분 가득</span>토너</p>
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
                                        <div className='product-item displayFlex'>
                                            <img src='https://shopping-phinf.pstatic.net/main_3036667/30366677625.20211230161344.jpg?type=f640'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                                <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>센텔리안 24</p> 
                                                    <p>27,000원</p>
                                                </div>
                                                <p>마데카 옴므 수딩 토너</p>
                                                <button onClick={() => window.location.href = "https://cr3.shopping.naver.com/v2/bridge/searchGate?query=%EB%A7%88%EB%8D%B0%EC%B9%B4+%EC%98%B4%EB%AF%80+%EC%88%98%EB%94%A9+%ED%86%A0%EB%84%88&nv_mid=30366677625&cat_id=50000321&h=3a330f43e0a6342b2442c4a6799221e17cc91bef&t=LRUW9KQS&frm=NVSCPRO"}>구매하기</button>
                                            </div>
                                        </div>
                                        <br></br>
                                        <p>참고 영상</p>
                                        <p style={{fontSize : '12px'}}>
                                            <a href="https://youtu.be/ROhvFRop7g8?si=jxaXMOiMubzDLd7i">자세한 토너 소개 Click!</a>
                                        </p>
                                    </div>
                                )}
                </div>
                
            )
       }else if(skinType == "여드름 지성피부") { 
        return( 
            <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                                <div  style={{alignItems : 'center'}}>
                                <p>조회수 <span style={{color : 'red'}}> 3.5만회 [아침] </span> 여드름 지성 관리</p>
                                </div>
                                <button onClick={() => toggleDetails('item1')}>
                                    {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                                </button>
                                {showDetails.item1 && ( 
                                    <div className='youtube-item-detail'>
                                        <div className='youtube-profile displayFlex'>
                                        <img src='https://yt3.ggpht.com/NcTpKkeJ6nqFXN8fW6nYfKPd1rxZu8byAls6k3YaSlOysh3kd1bM35aafFwbDIC_OKoveQlE=s88-c-k-c0x00ffffff-no-rj' />
                                            <div style={{ width : '100%', textAlign: 'left', marginLeft: '5%'}}>
                                                <p style={{fontSize: '15px'}}>관리는 하고 살자</p>
                                                <p style={{fontSize: '12px'}}>구독자 만명</p>
                                            </div>
                                        </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1673498073616106-db6f5ef7-1cf8-4f4c-b882-1d8e7fffe7b9.jpg'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                                <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>토너</p> 
                                                    <p>약 15,990원</p>
                                                </div>
                                                <p>라운드어라운드 그린티 약산성 클렌징폼 클렌징 폼</p>
                                                <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/4880173278?itemId=19012525005&vendorItemId=73648417455&pickType=COU_PICK&q=Dr.G+%EB%A0%88%EB%93%9C+%EB%B8%94%EB%A0%88%EB%AF%B8%EC%89%AC+%ED%81%B4%EB%A6%AC%EC%96%B4+%EC%88%98%EB%94%A9+%ED%86%A0%EB%84%88&itemsCount=36&searchId=7249dd32ce1e4f9eb67781cd594b7b12&rank=1"}>구매 하기</button>
                                            </div>
                                        </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/357614193586463-e992194e-59f4-4f22-9e32-dd4819808048.jpg'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>에센스</p> 
                                                    <p>약 18,000원 </p>
                                                </div>
                                                <p>나이팅게일 티타민 페이셜 트리트 에센스 </p>
                                                <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7335356999?itemId=18841335731&vendorItemId=4548361814&pickType=COU_PICK&sourceType=srp_product_ads&clickEventId=d3e451b0-bdb5-11ee-bf08-b45803ae4d17&korePlacement=15&koreSubPlacement=1&clickEventId=d3e451b0-bdb5-11ee-bf08-b45803ae4d17&korePlacement=15&koreSubPlacement=1&q=%EB%82%98%EC%9D%B4%ED%8C%85%EA%B2%8C%EC%9D%BC+%ED%8B%B0%ED%83%80%EB%AF%BC+%ED%8E%98%EC%9D%B4%EC%85%9C+%ED%8A%B8%EB%A6%AC%ED%8A%B8%EB%A8%BC%ED%8A%B8+%EC%97%90%EC%84%BC%EC%8A%A4&itemsCount=36&searchId=0c774d5e0fef4d6b828494807ef6b6d8&rank=0"}>구매 하기</button>
                                            </div>
                                        </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/260646689760696-f6d51903-b8c3-4bbb-9ef8-a9c46890c637.jpg'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>크림</p> 
                                                    <p>약 18,0000원</p>
                                                </div>
                                                <p>나이팅게일 티타민 크림 </p>
                                                <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/5911205017?itemId=10450246945&vendorItemId=3446051381&q=%EB%82%98%EC%9D%B4%ED%8C%85%EA%B2%8C%EC%9D%BC+%ED%8B%B0%ED%83%80%EB%AF%BC+%ED%81%AC%EB%A6%BC&itemsCount=36&searchId=82c2e65fd689416f90eaa00f27c93fe8&rank=3"}>구매 하기</button>
                                            </div>
                                        </div>
                                        <br/>
                                        <div> 스킨 케어 후에도 얼굴이 촉촉하지 않다면 </div>
                                        <div> + </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/a4aeb807-d652-47ac-b469-68935e862dcc8986338159464412607.png'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>Best 3.</p> 
                                                    <p>15,990원</p>
                                                </div>
                                                <p>닥터자르트 시카페어 페이셜 카밍 미스트 </p>
                                                <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7167507394?itemId=8217861723&vendorItemId=86285866286&pickType=COU_PICK&q=%EB%8B%A5%ED%84%B0%EC%9E%90%EB%A5%B4%ED%8A%B8+%EC%8B%9C%EC%B9%B4%ED%8E%98%EC%96%B4+%ED%8E%98%EC%9D%B4%EC%85%9C+%EC%B9%B4%EB%B0%8D+%EB%AF%B8%EC%8A%A4%ED%8A%B8&itemsCount=36&searchId=b53223c3362f47fc8d6f59e650bb5b0a&rank=1"}>구매 하기</button>
                                            </div>
                                        </div>
                                        <br></br>
                                        <p>참고 영상</p>
                                        <p style={{fontSize : '12px'}}>
                                            <a href="https://www.youtube.com/watch?v=yaS5wqWZEag">자세한 루틴 소개</a>
                                        </p>
                                    </div>
                                )} <br/><br/>
                                 <div  style={{alignItems : 'center'}}>
                                 <p>조회수 <span style={{color : 'red'}}> 3.5만회 [저녁] </span> 여드름 지성 관리</p>
                                </div>
                                <button onClick={() => toggleDetails('item1')}>
                                    {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                                </button>
                                {showDetails.item1 && ( 
                                    <div className='youtube-item-detail'>
                                        <div className='youtube-profile displayFlex'>
                                        <img src='https://yt3.ggpht.com/NcTpKkeJ6nqFXN8fW6nYfKPd1rxZu8byAls6k3YaSlOysh3kd1bM35aafFwbDIC_OKoveQlE=s88-c-k-c0x00ffffff-no-rj' />
                                            <div style={{ width : '100%', textAlign: 'left', marginLeft: '5%'}}>
                                                <p style={{fontSize: '15px'}}>관리는 하고 살자</p>
                                                <p style={{fontSize: '12px'}}>구독자 7.32만명</p>
                                            </div>
                                        </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1673498073616106-db6f5ef7-1cf8-4f4c-b882-1d8e7fffe7b9.jpg'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                                <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>토너</p> 
                                                    <p>약 15,990원</p>
                                                </div>
                                                <p>Dr.G 레드 블레미쉬 클리어 수딩 토너</p>
                                                <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/4880173278?itemId=19012525005&vendorItemId=73648417455&pickType=COU_PICK&q=Dr.G+%EB%A0%88%EB%93%9C+%EB%B8%94%EB%A0%88%EB%AF%B8%EC%89%AC+%ED%81%B4%EB%A6%AC%EC%96%B4+%EC%88%98%EB%94%A9+%ED%86%A0%EB%84%88&itemsCount=36&searchId=7249dd32ce1e4f9eb67781cd594b7b12&rank=1"}>구매 하기</button>
                                            </div>
                                        </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/357614193586463-e992194e-59f4-4f22-9e32-dd4819808048.jpg'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>에센스</p> 
                                                    <p>약 18,000원 </p>
                                                </div>
                                                <p>나이팅게일 티타민 페이셜 트리트 에센스 </p>
                                                <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7335356999?itemId=18841335731&vendorItemId=4548361814&pickType=COU_PICK&sourceType=srp_product_ads&clickEventId=d3e451b0-bdb5-11ee-bf08-b45803ae4d17&korePlacement=15&koreSubPlacement=1&clickEventId=d3e451b0-bdb5-11ee-bf08-b45803ae4d17&korePlacement=15&koreSubPlacement=1&q=%EB%82%98%EC%9D%B4%ED%8C%85%EA%B2%8C%EC%9D%BC+%ED%8B%B0%ED%83%80%EB%AF%BC+%ED%8E%98%EC%9D%B4%EC%85%9C+%ED%8A%B8%EB%A6%AC%ED%8A%B8%EB%A8%BC%ED%8A%B8+%EC%97%90%EC%84%BC%EC%8A%A4&itemsCount=36&searchId=0c774d5e0fef4d6b828494807ef6b6d8&rank=0"}>구매 하기</button>
                                            </div>
                                        </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/260646689760696-f6d51903-b8c3-4bbb-9ef8-a9c46890c637.jpg'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>크림</p> 
                                                    <p>약 18,0000원</p>
                                                </div>
                                                <p>나이팅게일 티타민 크림 </p>
                                                <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/5911205017?itemId=10450246945&vendorItemId=3446051381&q=%EB%82%98%EC%9D%B4%ED%8C%85%EA%B2%8C%EC%9D%BC+%ED%8B%B0%ED%83%80%EB%AF%BC+%ED%81%AC%EB%A6%BC&itemsCount=36&searchId=82c2e65fd689416f90eaa00f27c93fe8&rank=3"}>구매 하기</button>
                                            </div>
                                        </div>
                                        <br/>
                                        <div> 스킨 케어 후에도 얼굴이 촉촉하지 않다면 </div>
                                        <div> + </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/a4aeb807-d652-47ac-b469-68935e862dcc8986338159464412607.png'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>Best 3.</p> 
                                                    <p>15,990원</p>
                                                </div>
                                                <p>닥터자르트 시카페어 페이셜 카밍 미스트 </p>
                                                <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7167507394?itemId=8217861723&vendorItemId=86285866286&pickType=COU_PICK&q=%EB%8B%A5%ED%84%B0%EC%9E%90%EB%A5%B4%ED%8A%B8+%EC%8B%9C%EC%B9%B4%ED%8E%98%EC%96%B4+%ED%8E%98%EC%9D%B4%EC%85%9C+%EC%B9%B4%EB%B0%8D+%EB%AF%B8%EC%8A%A4%ED%8A%B8&itemsCount=36&searchId=b53223c3362f47fc8d6f59e650bb5b0a&rank=1"}>구매 하기</button>
                                            </div>
                                        </div>
                                        <br></br>
                                        <p>참고 영상</p>
                                        <p style={{fontSize : '12px'}}>
                                            <a href="https://www.youtube.com/watch?v=yaS5wqWZEag">자세한 루틴 소개</a>
                                        </p>
                                    </div>
                                )}
                </div>
        )
        }else {
            return( 
                <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                                <div  style={{alignItems : 'center'}}>
                                <p>조회수 <span style={{color : 'red'}}> 1.2만회</span> 수부지 여드름 관리</p>
                                </div>
                                <button onClick={() => toggleDetails('item1')}>
                                    {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                                </button>
                                {showDetails.item1 && ( 
                                    <div className='youtube-item-detail'>
                                        <div className='youtube-profile displayFlex'>
                                        <img src='https://yt3.ggpht.com/NcTpKkeJ6nqFXN8fW6nYfKPd1rxZu8byAls6k3YaSlOysh3kd1bM35aafFwbDIC_OKoveQlE=s88-c-k-c0x00ffffff-no-rj' />
                                            <div style={{ width : '100%', textAlign: 'left', marginLeft: '5%'}}>
                                                <p style={{fontSize: '15px'}}>코가이 COGUY</p>
                                                <p style={{fontSize: '12px'}}>구독자 7.32만명</p>
                                            </div>
                                        </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1673498073616106-db6f5ef7-1cf8-4f4c-b882-1d8e7fffe7b9.jpg'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                                <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>토너</p> 
                                                    <p>약 15,990원</p>
                                                </div>
                                                <p>Dr.G 레드 블레미쉬 클리어 수딩 토너</p>
                                                <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/4880173278?itemId=19012525005&vendorItemId=73648417455&pickType=COU_PICK&q=Dr.G+%EB%A0%88%EB%93%9C+%EB%B8%94%EB%A0%88%EB%AF%B8%EC%89%AC+%ED%81%B4%EB%A6%AC%EC%96%B4+%EC%88%98%EB%94%A9+%ED%86%A0%EB%84%88&itemsCount=36&searchId=7249dd32ce1e4f9eb67781cd594b7b12&rank=1"}>구매 하기</button>
                                            </div>
                                        </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/357614193586463-e992194e-59f4-4f22-9e32-dd4819808048.jpg'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>에센스</p> 
                                                    <p>약 18,000원 </p>
                                                </div>
                                                <p>나이팅게일 티타민 페이셜 트리트 에센스 </p>
                                                <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7335356999?itemId=18841335731&vendorItemId=4548361814&pickType=COU_PICK&sourceType=srp_product_ads&clickEventId=d3e451b0-bdb5-11ee-bf08-b45803ae4d17&korePlacement=15&koreSubPlacement=1&clickEventId=d3e451b0-bdb5-11ee-bf08-b45803ae4d17&korePlacement=15&koreSubPlacement=1&q=%EB%82%98%EC%9D%B4%ED%8C%85%EA%B2%8C%EC%9D%BC+%ED%8B%B0%ED%83%80%EB%AF%BC+%ED%8E%98%EC%9D%B4%EC%85%9C+%ED%8A%B8%EB%A6%AC%ED%8A%B8%EB%A8%BC%ED%8A%B8+%EC%97%90%EC%84%BC%EC%8A%A4&itemsCount=36&searchId=0c774d5e0fef4d6b828494807ef6b6d8&rank=0"}>구매 하기</button>
                                            </div>
                                        </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/260646689760696-f6d51903-b8c3-4bbb-9ef8-a9c46890c637.jpg'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>크림</p> 
                                                    <p>약 18,0000원</p>
                                                </div>
                                                <p>나이팅게일 티타민 크림 </p>
                                                <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/5911205017?itemId=10450246945&vendorItemId=3446051381&q=%EB%82%98%EC%9D%B4%ED%8C%85%EA%B2%8C%EC%9D%BC+%ED%8B%B0%ED%83%80%EB%AF%BC+%ED%81%AC%EB%A6%BC&itemsCount=36&searchId=82c2e65fd689416f90eaa00f27c93fe8&rank=3"}>구매 하기</button>
                                            </div>
                                        </div>
                                        <br/>
                                        <div> 스킨 케어 후에도 얼굴이 촉촉하지 않다면 </div>
                                        <div> + </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/a4aeb807-d652-47ac-b469-68935e862dcc8986338159464412607.png'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>Best 3.</p> 
                                                    <p>15,990원</p>
                                                </div>
                                                <p>닥터자르트 시카페어 페이셜 카밍 미스트 </p>
                                                <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7167507394?itemId=8217861723&vendorItemId=86285866286&pickType=COU_PICK&q=%EB%8B%A5%ED%84%B0%EC%9E%90%EB%A5%B4%ED%8A%B8+%EC%8B%9C%EC%B9%B4%ED%8E%98%EC%96%B4+%ED%8E%98%EC%9D%B4%EC%85%9C+%EC%B9%B4%EB%B0%8D+%EB%AF%B8%EC%8A%A4%ED%8A%B8&itemsCount=36&searchId=b53223c3362f47fc8d6f59e650bb5b0a&rank=1"}>구매 하기</button>
                                            </div>
                                        </div>
                                        <br></br>
                                        <p>참고 영상</p>
                                        <p style={{fontSize : '12px'}}>
                                            <a href="https://www.youtube.com/watch?v=G1JUOVlk-Bw">자세한 루틴 소개</a>
                                        </p>
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