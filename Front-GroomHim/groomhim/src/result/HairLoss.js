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
                    <p>조회수<span style={{color : 'red'}}> 65만회 </span>건성 샴푸 추천</p>
                </div>
                <button onClick={() => toggleDetails('item1')}>
                    {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                </button>
                {showDetails.item1 && ( 
                    <div className='youtube-item-detail'>
                    <div className='youtube-profile displayFlex'>
                    <img src='https://yt3.ggpht.com/80LHzlXj90CDw6l1HzA1MFZzIxOpKEVuvH9OCen7_B4L5NimaiSXOAqrNeG9Bj_fWTeOYZr6fQ=s88-c-k-c0x00ffffff-no-rj' />
                        <div style={{ width : '100%', textAlign: 'left', marginLeft: '5%'}}>
                            <p style={{fontSize: '15px'}}>디렉터파이</p>
                            <p style={{fontSize: '12px'}}>102만명</p>
                        </div>
                    </div>
                    <div className='product-item displayFlex'>
                        <img src='https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/f026/a75047f2e976cbb416e0f1b0a540bacf7f7c76008f7a65fce51967d84f3b.png'></img>
                        <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                <p style={{fontSize : '13px'}}>1. 아이엠 샴푸</p> 
                                <p>36,200원</p>
                            </div>
                            <p>안티 헤어 로스 샴푸 넘버 투(엠버 머스크)</p>
                            <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/6828584502?itemId=16204056138&vendorItemId=85428387736&q=%EC%95%88%ED%8B%B0+%ED%97%A4%EC%96%B4+%EB%A1%9C%EC%8A%A4+%EC%83%B4%ED%91%B8+%EB%84%98%EB%B2%84+%ED%88%AC(%EC%97%A0%EB%B2%84+%EB%A8%B8%EC%8A%A4%ED%81%AC)&itemsCount=36&searchId=739f0c9ffcba48a7873f532c6d5d3c0a&rank=1"}>구매 하기</button>
                        </div>
                    </div>
                    <div className='product-item displayFlex'>
                        <img src='https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/77df/5b6bcaf56d570a3fa8a8c7f47fc262d7353e42e969a34699533c94348bc5.jpg'></img>
                        <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                <p style={{fontSize : '13px'}}>2. 그로우어스 </p> 
                                <p>34,300원</p>
                            </div>
                            <p>데미지 테라피 샴푸 </p>
                            <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7813600838?itemId=21202238855&vendorItemId=88263507107&q=%EB%8D%B0%EB%AF%B8%EC%A7%80+%ED%85%8C%EB%9D%BC%ED%94%BC+%EC%83%B4%ED%91%B8&itemsCount=35&searchId=ea9225c3b8e140aa9a4a4b794fb76f82&rank=6"}>구매 하기</button>
                        </div>
                    </div>
                    <div className='product-item displayFlex'>
                        <img src='https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4108049509282757-a221bd37-c622-4dc0-b301-1bede5c10ff1.jpg'></img>
                        <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                <p style={{fontSize : '13px'}}>3. 나드</p> 
                                <p>14,900원</p>
                            </div>
                            <p>센시티브 두피 케어 샴푸</p>
                            <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/1973333612?itemId=3356442052&vendorItemId=71343197664&sourceType=srp_product_ads&clickEventId=d36fe4f0-be79-11ee-9ba9-b1c05531bc7e&korePlacement=15&koreSubPlacement=1&clickEventId=d36fe4f0-be79-11ee-9ba9-b1c05531bc7e&korePlacement=15&koreSubPlacement=1&q=%EB%82%98%EB%93%9C+%EC%84%BC%EC%8B%9C%ED%8B%B0%EB%B8%8C+%EB%91%90%ED%94%BC+%EC%BC%80%EC%96%B4+%EC%83%B4%ED%91%B8&itemsCount=36&searchId=46c018f887f04aa3bde2a2a5de772877&rank=0"}>구매 하기</button>
                        </div>
                    </div>
                    <div className='product-item displayFlex'>
                        <img src='https://image8.coupangcdn.com/image/retail/images/805371720411440-faff66fb-0c57-4cd2-84e3-8ace2e6de24a.jpg'></img>
                        <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                <p style={{fontSize : '13px'}}>4. 앙방 </p> 
                                <p>17,180원</p>
                            </div>
                            <p>퍼퓸 헤어 샴푸3 메이미달링</p>
                            <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/6704797297?itemId=1001844966&vendorItemId=5430689880&q=%EC%95%99%EB%B0%A9+%ED%8D%BC%ED%92%88+%ED%97%A4%EC%96%B4+%EC%83%B4%ED%91%B83+%EB%A9%94%EB%A6%AC%EB%AF%B8+%EB%8B%AC%EB%A7%81&itemsCount=36&searchId=c2c1148fc0cc4d1f806b4a0384d8b744&rank=2&isAddedCart="}>구매 하기</button>
                        </div>
                    </div>
                    <br></br>
                    <p>참고 영상</p>
                    <p style={{fontSize : '12px'}}>
                        <a href="https://youtu.be/g0VVQg6dUqU?si=HScoi3cvr_TIVEpw">자세한 루틴 소개 Click!</a>
                    </p>
                </div>
                )}<br/><br/>
                        <div  style={{alignItems : 'center'}}>
                            <p>조회수<span style={{color : 'red'}}> 65만회 </span>열 내리는 두피 세럼</p>
                        </div>
                        <button onClick={() => toggleDetails('item1')}>
                            {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                        </button>
                        {showDetails.item1 && ( 
                            <div className='youtube-item-detail'>
                            <div className='youtube-profile displayFlex'>
                            <img src='https://yt3.ggpht.com/80LHzlXj90CDw6l1HzA1MFZzIxOpKEVuvH9OCen7_B4L5NimaiSXOAqrNeG9Bj_fWTeOYZr6fQ=s88-c-k-c0x00ffffff-no-rj' />
                                <div style={{ width : '100%', textAlign: 'left', marginLeft: '5%'}}>
                                    <p style={{fontSize: '15px'}}>디렉터파이</p>
                                    <p style={{fontSize: '12px'}}>102만명</p>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/968b/0c8d956019099f91552dc4d886ede4ce9e203a6ee2afa624c206942bd96a.jpg'></img>
                                <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                    <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                        <p style={{fontSize : '13px'}}>1. 르네휘테르 </p> 
                                        <p>29,650원</p>
                                    </div>
                                    <p>포티샤 두피&모발 강화 세럼</p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/6642796298?itemId=15192697088&vendorItemId=70694821111&q=%EB%A5%B4%EB%84%A4%ED%9C%98%ED%85%8C%EB%A5%B4+%E2%80%93+%ED%8F%AC%ED%8B%B0%EC%83%A4+%EB%91%90%ED%94%BC%26%EB%AA%A8%EB%B0%9C+%EA%B0%95%ED%99%94+%EC%84%B8%EB%9F%BC&itemsCount=36&searchId=78af4662bc54402e85c6d36d80ee0d64&rank=1&isAddedCart="}>구매 하기</button>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/9aae/fbb347fe2d227ede04239bd6607dbaa3894915ec39cefb392850fe1c675d.png'></img>
                                <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                    <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                        <p style={{fontSize : '13px'}}>2. 그룬플러스  </p> 
                                        <p>71,000원</p>
                                    </div>
                                    <p>테라피 헤어토닉 </p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/341626874?itemId=1087296268&vendorItemId=5595753694&sourceType=srp_product_ads&clickEventId=fc0a20f0-bdd5-11ee-aba6-4f8870bd914f&korePlacement=15&koreSubPlacement=1&q=%EC%96%B4%ED%97%A4%EC%A6%88+%E2%80%93+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84+%ED%9E%88%EB%93%A0+%ED%85%8C%EB%9D%BC%ED%94%BC+%ED%86%A0%EB%8B%89&itemsCount=36&searchId=6e0288a8679d4c0f85a454ef5fb75dc8&rank=0&isAddedCart="}>구매 하기</button>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/1ef7/9dff57314f06ac35ece25aeba97c1e8f189eef44ff55c2f736e66e6f2f1d.jpg'></img>
                                <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                    <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                        <p style={{fontSize : '13px'}}>3. 청미정   </p> 
                                        <p>35,200원</p>
                                    </div>
                                    <p>EM발효 다시마 유기농 헤어&두피 에센스 </p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7266767754?itemId=13462929922&vendorItemId=84983545944&q=%EC%B2%AD%EB%AF%B8%EC%A0%95+%E2%80%93+EM%EB%B0%9C%ED%9A%A8+%EB%8B%A4%EC%8B%9C%EB%A7%88+%EC%9C%A0%EA%B8%B0%EB%86%8D+%ED%97%A4%EC%96%B4%26%EB%91%90%ED%94%BC+%EC%97%90%EC%84%BC%EC%8A%A4&itemsCount=36&searchId=f4e8b02ea4354945aa7e1eb3e502df56&rank=1&isAddedCart="}>구매 하기</button>
                                </div>
                            </div>
                            <br></br>
                            <p>참고 영상</p>
                            <p style={{fontSize : '12px'}}>
                                <a href="https://www.youtube.com/watch?v=ATszIJXbvgM">자세한 루틴 소개 Click!</a>
                            </p>
                        </div>
                        )}
            </div>
            )
       }else if(skinType == "열감을 느끼는 지성두피") { 
        return( 
            <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
            <div  style={{alignItems : 'center'}}>
                <p>조회수<span style={{color : 'red'}}> 65만회 </span>지성 샴푸</p>
            </div>
            <button onClick={() => toggleDetails('item1')}>
                {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
            </button>
            {showDetails.item1 && ( 
                <div className='youtube-item-detail'>
                    <div className='youtube-profile displayFlex'>
                        <img src='https://yt3.ggpht.com/80LHzlXj90CDw6l1HzA1MFZzIxOpKEVuvH9OCen7_B4L5NimaiSXOAqrNeG9Bj_fWTeOYZr6fQ=s88-c-k-c0x00ffffff-no-rj' />
                            <div style={{ width : '100%', textAlign: 'left', marginLeft: '5%'}}>
                                <p style={{fontSize: '15px'}}>디렉터파이</p>
                                <p style={{fontSize: '12px'}}>102만명</p>
                            </div>
                        </div>
                    <div className='product-item displayFlex'>
                        <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131213_172%2Fsimtong714_1386907834769nzJVW_JPEG%2F%25BB%25E7%25C1%25F8_013.jpg&type=a340'></img>
                        <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                <p style={{fontSize : '13px'}}>1. 데저트에센스</p> 
                                <p>약 13,000원</p>
                            </div>
                            <p>오가닉스 프레그런스 프리 샴푸</p>
                            <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7502085924?itemId=21095073583&vendorItemId=88157071275&q=%EB%8D%B0%EC%A0%80%ED%8A%B8+%EC%97%90%EC%84%BC%EC%8A%A4+%EC%98%A4%EA%B0%80%EB%8B%89%EC%8A%A4+%ED%94%84%EB%A0%88%EA%B7%B8%EB%9F%B0%EC%8A%A4&itemsCount=36&searchId=f0778670eb2a4123a185a5d3c8df5ada&rank=13&isAddedCart="}>구매 하기</button>
                        </div>
                    </div>
                    <div className='product-item displayFlex'>
                        <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTZfNDEg%2FMDAxNjc4OTUyMjEzMzE3.70R7Kd1JIQkPFo1iR7jlq1n6XfPE_VhSBTIcmmyci48g._b8k_q-mr5h0MK_l9oxoKC1xQEm38jtLvmIVL0lb470g.JPEG.misojindentist1%2F1678952118866%25A3%25AD7.jpg&type=a340'></img>
                        <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                        <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                <p style={{fontSize : '13px'}}>2. 모레모</p> 
                                <p>약 14,000원 </p>
                            </div>
                            <p>카페인 바이옵 샴푸 지성용</p>
                            <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/4549306648?itemId=20205464929&vendorItemId=87769647584&q=%EB%AA%A8%EB%A0%88%EB%AA%A8+%EC%83%B4%ED%91%B8&itemsCount=36&searchId=4ca8f667893341fbb195692dc7bd1fa0&rank=2&isAddedCart="}>구매 하기</button>
                        </div>
                    </div>
                    <br></br>
                    <p>참고 영상</p>
                    <p style={{fontSize : '12px'}}>
                        <a href="https://www.youtube.com/watch?v=g0VVQg6dUqU&pp=ygUc65SU66CJ7YSw7YyM7J20IOyngOyEseyDtO2RuA%3D%3D">자세한 샴푸 소개 Click!</a>
                    </p>
                </div>
            )}
            <br/><br/>
    </div>
        )
        }else if(skinType == "지성두피"){
            return( 
                <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                                <div  style={{alignItems : 'center'}}>
                                    <p>조회수<span style={{color : 'red'}}> 65만회 </span>지성 샴푸</p>
                                </div>
                                <button onClick={() => toggleDetails('item1')}>
                                    {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                                </button>
                                {showDetails.item1 && ( 
                                    <div className='youtube-item-detail'>
                                        <div className='youtube-profile displayFlex'>
                                            <img src='https://yt3.ggpht.com/80LHzlXj90CDw6l1HzA1MFZzIxOpKEVuvH9OCen7_B4L5NimaiSXOAqrNeG9Bj_fWTeOYZr6fQ=s88-c-k-c0x00ffffff-no-rj' />
                                                <div style={{ width : '100%', textAlign: 'left', marginLeft: '5%'}}>
                                                    <p style={{fontSize: '15px'}}>디렉터파이</p>
                                                    <p style={{fontSize: '12px'}}>102만명</p>
                                                </div>
                                            </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131213_172%2Fsimtong714_1386907834769nzJVW_JPEG%2F%25BB%25E7%25C1%25F8_013.jpg&type=a340'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                                <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>1. 데저트에센스</p> 
                                                    <p>약 13,000원</p>
                                                </div>
                                                <p>오가닉스 프레그런스 프리 샴푸</p>
                                                <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7502085924?itemId=21095073583&vendorItemId=88157071275&q=%EB%8D%B0%EC%A0%80%ED%8A%B8+%EC%97%90%EC%84%BC%EC%8A%A4+%EC%98%A4%EA%B0%80%EB%8B%89%EC%8A%A4+%ED%94%84%EB%A0%88%EA%B7%B8%EB%9F%B0%EC%8A%A4&itemsCount=36&searchId=f0778670eb2a4123a185a5d3c8df5ada&rank=13&isAddedCart="}>구매 하기</button>
                                            </div>
                                        </div>
                                        <div className='product-item displayFlex'>
                                            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTZfNDEg%2FMDAxNjc4OTUyMjEzMzE3.70R7Kd1JIQkPFo1iR7jlq1n6XfPE_VhSBTIcmmyci48g._b8k_q-mr5h0MK_l9oxoKC1xQEm38jtLvmIVL0lb470g.JPEG.misojindentist1%2F1678952118866%25A3%25AD7.jpg&type=a340'></img>
                                            <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                            <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                                    <p style={{fontSize : '13px'}}>2. 모레모</p> 
                                                    <p>약 14,000원 </p>
                                                </div>
                                                <p>카페인 바이옵 샴푸 지성용</p>
                                                <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/4549306648?itemId=20205464929&vendorItemId=87769647584&q=%EB%AA%A8%EB%A0%88%EB%AA%A8+%EC%83%B4%ED%91%B8&itemsCount=36&searchId=4ca8f667893341fbb195692dc7bd1fa0&rank=2&isAddedCart="}>구매 하기</button>
                                            </div>
                                        </div>
                                        <br></br>
                                        <p>참고 영상</p>
                                        <p style={{fontSize : '12px'}}>
                                            <a href="https://www.youtube.com/watch?v=g0VVQg6dUqU&pp=ygUc65SU66CJ7YSw7YyM7J20IOyngOyEseyDtO2RuA%3D%3D">자세한 샴푸 소개 Click!</a>
                                        </p>
                                    </div>
                                )}
                                <br/><br/>
                        </div>
            )  
        }else {
            return(
                        <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                        <div  style={{alignItems : 'center'}}>
                            <p>조회수<span style={{color : 'red'}}> 65만회 </span>건성 샴푸 추천</p>
                        </div>
                        <button onClick={() => toggleDetails('item1')}>
                            {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                        </button>
                        {showDetails.item1 && ( 
                            <div className='youtube-item-detail'>
                            <div className='youtube-profile displayFlex'>
                            <img src='https://yt3.ggpht.com/80LHzlXj90CDw6l1HzA1MFZzIxOpKEVuvH9OCen7_B4L5NimaiSXOAqrNeG9Bj_fWTeOYZr6fQ=s88-c-k-c0x00ffffff-no-rj' />
                                <div style={{ width : '100%', textAlign: 'left', marginLeft: '5%'}}>
                                    <p style={{fontSize: '15px'}}>디렉터파이</p>
                                    <p style={{fontSize: '12px'}}>102만명</p>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/f026/a75047f2e976cbb416e0f1b0a540bacf7f7c76008f7a65fce51967d84f3b.png'></img>
                                <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                    <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                        <p style={{fontSize : '13px'}}>1. 아이엠 샴푸</p> 
                                        <p>36,200원</p>
                                    </div>
                                    <p>안티 헤어 로스 샴푸 넘버 투(엠버 머스크)</p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/6828584502?itemId=16204056138&vendorItemId=85428387736&q=%EC%95%88%ED%8B%B0+%ED%97%A4%EC%96%B4+%EB%A1%9C%EC%8A%A4+%EC%83%B4%ED%91%B8+%EB%84%98%EB%B2%84+%ED%88%AC(%EC%97%A0%EB%B2%84+%EB%A8%B8%EC%8A%A4%ED%81%AC)&itemsCount=36&searchId=739f0c9ffcba48a7873f532c6d5d3c0a&rank=1"}>구매 하기</button>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/77df/5b6bcaf56d570a3fa8a8c7f47fc262d7353e42e969a34699533c94348bc5.jpg'></img>
                                <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                    <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                        <p style={{fontSize : '13px'}}>2. 그로우어스 </p> 
                                        <p>34,300원</p>
                                    </div>
                                    <p>데미지 테라피 샴푸 </p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7813600838?itemId=21202238855&vendorItemId=88263507107&q=%EB%8D%B0%EB%AF%B8%EC%A7%80+%ED%85%8C%EB%9D%BC%ED%94%BC+%EC%83%B4%ED%91%B8&itemsCount=35&searchId=ea9225c3b8e140aa9a4a4b794fb76f82&rank=6"}>구매 하기</button>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4108049509282757-a221bd37-c622-4dc0-b301-1bede5c10ff1.jpg'></img>
                                <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                    <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                        <p style={{fontSize : '13px'}}>3. 나드</p> 
                                        <p>14,900원</p>
                                    </div>
                                    <p>센시티브 두피 케어 샴푸</p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/1973333612?itemId=3356442052&vendorItemId=71343197664&sourceType=srp_product_ads&clickEventId=d36fe4f0-be79-11ee-9ba9-b1c05531bc7e&korePlacement=15&koreSubPlacement=1&clickEventId=d36fe4f0-be79-11ee-9ba9-b1c05531bc7e&korePlacement=15&koreSubPlacement=1&q=%EB%82%98%EB%93%9C+%EC%84%BC%EC%8B%9C%ED%8B%B0%EB%B8%8C+%EB%91%90%ED%94%BC+%EC%BC%80%EC%96%B4+%EC%83%B4%ED%91%B8&itemsCount=36&searchId=46c018f887f04aa3bde2a2a5de772877&rank=0"}>구매 하기</button>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://image8.coupangcdn.com/image/retail/images/805371720411440-faff66fb-0c57-4cd2-84e3-8ace2e6de24a.jpg'></img>
                                <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                    <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                        <p style={{fontSize : '13px'}}>4. 앙방 </p> 
                                        <p>17,180원</p>
                                    </div>
                                    <p>퍼퓸 헤어 샴푸3 메이미달링</p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/6704797297?itemId=1001844966&vendorItemId=5430689880&q=%EC%95%99%EB%B0%A9+%ED%8D%BC%ED%92%88+%ED%97%A4%EC%96%B4+%EC%83%B4%ED%91%B83+%EB%A9%94%EB%A6%AC%EB%AF%B8+%EB%8B%AC%EB%A7%81&itemsCount=36&searchId=c2c1148fc0cc4d1f806b4a0384d8b744&rank=2&isAddedCart="}>구매 하기</button>
                                </div>
                            </div>
                            <br></br>
                            <p>참고 영상</p>
                            <p style={{fontSize : '12px'}}>
                                <a href="https://youtu.be/g0VVQg6dUqU?si=HScoi3cvr_TIVEpw">자세한 루틴 소개 Click!</a>
                            </p>
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
                    {HairProduct()}
                </div>
            </div>
            <div className='result-btn'>
                <button onClick={() => navigate('/skinTest')}>설문 다시 하기</button>
                <button  onClick={() => navigate('/')}>홈으로 이동</button>
            </div>
        </div>
    );
}export default HairLoss;