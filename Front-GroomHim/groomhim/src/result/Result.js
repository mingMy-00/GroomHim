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
    const memberNo = storedData ? Number(storedData.memberNo) : null;

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
        if (skinType === '건성') {
            return (
                <div class="tooltip-container">
                    <span class="text">자세한 정보👀</span>
                    <span className="introDetail">
                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 건성피부란  ? </b>
                        <br />
                        피부의 유분(기름)과 수분(촉촉함)이 부족해서 <br />
                        표면이 거칠고 얼굴이 땅기는 피부타입이에요. <br /><br />

                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 어떻게 해결하나요  ? </b> <br />
                        ✔ 유분제품을 너무 많이 바르면 모공을 막아서<br />
                        좁쌀여드름이 나고 <br />
                        ✔  수분제품은 보통 가벼운 액체 타입이라서 <br />
                        날아가기 쉬워요.
                        <br /><br />
                        ✅ 따라서, 보습제품과 유수분 밸런스가 중요합니다.
                    </span>
                </div>
            );
        } else if (skinType === '수부지') {
            return (
                <div>
                    <span class="text">자세한 정보👀</span>
                    <span className="introDetail">
                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 왜 클렌징 부터 하나요? </b> <br />
                        수부지 피부는 클렌징 부터 발효성분과 입자가 작은<br /> 오일류를 사용해 줘야 해요.<br />
                        그렇지 않으면 피부에 존재하는 기름이 <br />잘 제거되지 않아요.<br /><br />

                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 수부지피부란  ? </b>
                        <br />
                        원래는 지성인데, 피부의 기름을 닦아내다가 <br />
                        수분이 닦여서 수분은 부족하고  <br />
                        부족한 수분을 보호하기 위해 기름은 더 분비되어<br />
                        생긴 피부타입이에요.<br /><br />
                        볼은 건조하거나 각질이 생기고<br />
                        코나 이마는 유분이 많을 확률이 높아요. <br /><br />

                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 어떻게 해결하나요  ? </b> <br />
                        ✔ 유분을 너무 없애면 수분도 날아가고<br />
                        ✔ 그렇다고 수분만 듬뿍 바르면 그것도 <br />
                        모공을 막을 수 있어요.
                        <br /><br />
                        ✅ 따라서, 유분과 수분의 밸런스가 중요합니다.
                    </span>
                </div>
            )
        } else if (skinType === '지성') {
            return (
                <div class="tooltip-container">
                    <span class="text">자세한 정보👀</span>
                    <span className="introDetail">
                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 지성 피부란  ? </b>
                        <br />
                        말 그대로 피부에 기름이 많이 나오는 <br />
                        타입이에요. 보통 건조함을 느끼는 경우는 없고  <br />
                        <p Style="border-bottom : 1px solid black;">화농성 여드름, 머리 떡짐, 모공이 넓음, 피지</p><br />
                        등등의 증상을 동반합니다.<br /><br />

                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 어떻게 해결하나요  ? </b> <br />
                        ✔ 보통 기름종이를 많이 들고다니며 닦아줘요.<br />
                        ✔ 하지만 기름을 너무 닦으면 수분도 날아가 <br />
                        수분 부족한 지성형인 수부지가 될 수 있어요.
                        <br /><br />
                        ✅ 따라서, 유분과 수분의 밸런스를 잘 맞추고 <br />
                        수분 크림 조차 기름지지 않은 제형으로 <br />
                        발라주어야 합니다.
                    </span>
                </div>
            );
        } else {
            return (
                <div class="tooltip-container">
                    <span class="text">자세한 정보👀</span>
                    <span className="introDetail">
                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 민감성 피부란  ? </b>
                        <br />
                        환경이 바뀜에 따라 빠르고 민감하게 반응하는 피부로 <br />
                        <p Style="border-bottom : 1px solid black;">홍조, 가려움증, 발진 </p> 등의 증상이 있습니다.<br /><br />

                        <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;"> Q. 어떻게 해결하나요  ? </b> <br />
                        ✔ 피부 장벽을 강화시켜주는 것이 1순위에요.<br />
                        ✔ 순한 성분들 위주로 !  <br />
                        ✔ 절대 피해야 할 성분들을 주의하며 구입!  <br />
                        <br /><br />
                        ✅ 따라서, 피부장벽 강화 <br />
                        제품 성분 확인이 중요합니다.

                    </span>
                </div>
            )
        }
    }
    const important = () => {
        if (skinType === '건성') {
            return (

                <p>
                    <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">  건성 피부 Key Point!</b>  <br /><br />
                    이 타입은 수분을 유지해주기 위한 <b Style="color :red"><br />보습</b>이 정말 중요합니다.</p>
            )
        } else if (skinType === '지성') {
            return (
                <p> <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">  지성 피부 Key Point!</b>   <br /><br />
                    이 타입은 <b Style="color :red"><br />수분과 유분의 </b> 밸런스를 맞추는 게  <br />가장 중요합니다.</p>

            )
        } else if (skinType === '수부지') {
            return (
                <p> <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">  수부지 피부 Key Point!</b>   <br /><br />
                    이 타입은 <b Style="color :red">수분</b>을 유지해주는 것이 <br />가장 중요합니다.<br /><br />

                    🖐 잠깐 !! 이 타입은 클렌징 부터 스킨케어 제품까지<br />
                    로드맵을 가지고 있어요. <br />
                    자세히 보기를 확인해 주세요.</p>


            )
        } else {
            return (
                <p> <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">  민감성 피부 Key Point!</b>   <br /><br />
                    이 타입은 피부가 예민하기 때문에 <br /><b Style="color :red">성분이 순한</b> 제품을 바르는 것이 <br />가장 중요합니다.<br />
                    또한, 피부 장벽을 강화 시키는 것도 중요해요.</p>
            )
        }
    }

    const Skin = () => {
        if (skinType == "건성") {
            return (
                <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                    <div style={{ alignItems: 'center' }}>
                        <p>조회수<span style={{ color: 'red' }}> 2.2만회 </span>관리 루틴</p>
                    </div>
                    <button onClick={() => toggleDetails('item1')}>
                        {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                    </button>
                    {showDetails.item1 && (
                        <div className='youtube-item-detail'>
                            <div className='youtube-profile displayFlex'>
                                <img src='https://yt3.googleusercontent.com/50q0jBtD2xZSmgOWgw3O2GHaVS3Yn6T7YktX4TrzD0-cjXtzzTzF62IYe1FiDQjD-cF6Cl_46w=s176-c-k-c0x00ffffff-no-rj' />
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <p style={{ fontSize: '15px' }}>관리는 하고 살자</p>
                                    <p style={{ fontSize: '12px' }}>26.4만명</p>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://image9.coupangcdn.com/image/retail/images/644930133428890-ddee78dd-7f97-41ea-b1f4-ad7753330369.jpg'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>Step 1. 흡수토너</p>
                                        <p>22,260원</p>
                                    </div>
                                    <p>더랩 바이블랑두</p>
                                    <button onClick={() => window.location.href = "https://link.coupang.com/a/t6xAy"}>구매 하기</button>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://image9.coupangcdn.com/image/vendor_inventory/2265/c3c7aac5c741603cf3241aab9436bc9fee2ef46f1f5aa487940b6e32aab4.jpg'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>Step 2. 앰플</p>
                                        <p>20,710원</p>
                                    </div>
                                    <p>비플레인 시카테롤 앰플</p>
                                    <button onClick={() => window.location.href = "https://link.coupang.com/a/t6xE6"}>구매 하기</button>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://image7.coupangcdn.com/image/vendor_inventory/6fcc/c63de777acfc0137fa98b33980ab0624221a9788ff97055b60f776f43f2c.jpg'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>Step 3. 보습크림</p>
                                        <p>19,930원</p>
                                    </div>
                                    <p>비플레인 캐모마일 보습 크림</p>
                                    <button onClick={() => window.location.href = "https://link.coupang.com/a/t6xKp"}>구매 하기</button>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://image6.coupangcdn.com/image/vendor_inventory/341a/eaaba5026b6a7248778de3eefd01c259758118a4d6911eea87b7204bcbb6.jpg'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>Step 4. 자기전 아이크림</p>
                                        <p>12,500원</p>
                                    </div>
                                    <p>AHC 아이크림</p>
                                    <button onClick={() => window.location.href = "https://link.coupang.com/a/t6x1k"}>구매 하기</button>
                                </div>
                            </div>
                            <br></br>
                            <p>참고 영상</p>
                            <p style={{ fontSize: '12px' }}>
                                <a href="https://www.youtube.com/watch?v=4x30Nxeq0mY">자세한 루틴 소개 Click!</a>
                            </p>
                        </div>
                    )}
                </div>
            )
        } else if (skinType == "지성") {
            return (
                <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                    <div style={{ alignItems: 'center' }}>
                        <p>2단계<span style={{ color: 'red' }}> 세럼 </span>발라주기</p>
                    </div>
                    <button onClick={() => toggleDetails('item1')}>
                        {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                    </button>
                    {showDetails.item1 && (
                        <div className='youtube-item-detail'>
                            <div className='youtube-profile displayFlex'>
                                <img src='https://yt3.ggpht.com/6uTfJjqQ7vEeK6H7VjZ5exFUnuYkRbQP1fia50D0tweFAYjvfJlyQy2BtyZGJb3fOXiFVeut=s88-c-k-c0x00ffffff-no-rj' />
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <p style={{ fontSize: '15px' }}>삼탈모 TV!</p>
                                    <p style={{ fontSize: '12px' }}>구독자 1.54만명</p>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131213_172%2Fsimtong714_1386907834769nzJVW_JPEG%2F%25BB%25E7%25C1%25F8_013.jpg&type=a340'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>Best 1.</p>
                                        <p>약 13,000원</p>
                                    </div>
                                    <p>세비프록스</p>
                                    <button>약국에서만 구매 가능</button>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTZfNDEg%2FMDAxNjc4OTUyMjEzMzE3.70R7Kd1JIQkPFo1iR7jlq1n6XfPE_VhSBTIcmmyci48g._b8k_q-mr5h0MK_l9oxoKC1xQEm38jtLvmIVL0lb470g.JPEG.misojindentist1%2F1678952118866%25A3%25AD7.jpg&type=a340'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>Best 2.</p>
                                        <p>약 14,000원 </p>
                                    </div>
                                    <p>니조랄 샴푸</p>
                                    <button>약국에서만 구매 가능</button>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEyMTlfNjYg%2FMDAxNzAyOTk2NjQ5NjEx.eFGj45KSx46QMDIyG8EUoKU_rcgNW3DWaBw61ziWDdYg.pUjRsdYbBzzIOL38DgaGZukVYZruDCUKGoc_LUXkkiEg.PNG.kangjj372%2F3.png&type=a340'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>Best 3.</p>
                                        <p>약 10,000원</p>
                                    </div>
                                    <p>케이프록스 샴푸</p>
                                    <button>약국에서만 구매 가능</button>
                                </div>
                            </div>
                            <br></br>
                            <p>참고 영상</p>
                            <p style={{ fontSize: '12px' }}>
                                <a href="https://youtu.be/TyoTyDBeN2k?si=OhOf84L8N88j6q90">자세한 샴푸 소개</a>
                            </p>
                        </div>
                    )}
                    <br /><br />
                    <div style={{ alignItems: 'center' }}>
                        <p>3단계<span style={{ color: 'red' }}> 수분 크림 </span>발라주기</p>
                    </div>
                    <button onClick={() => toggleDetails('item1')}>
                        {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                    </button>
                    {showDetails.item1 && (
                        <div className='youtube-item-detail'>
                            <div className='youtube-profile displayFlex'>
                                <img src='https://yt3.ggpht.com/ytc/AIf8zZT4SCsnXvh-9-SsUjdwBwIWnYomX3KoJsgIuf717Q=s88-c-k-c0x00ffffff-no-rj' />
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <p style={{ fontSize: '15px' }}>교육하는 의사! 이동환 TV</p>
                                    <p style={{ fontSize: '12px' }}>구독자 94.6만명</p>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://www.health.kr/images/ext_images/pack_img/P_2019090900042_00.png'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>샹푸 형태</p>
                                        <p>약 16,000원</p>
                                    </div>
                                    <p>듀오백스액</p>
                                    <button>약국에서 처방 필수</button>
                                </div>
                                <img src="https://mblogthumb-phinf.pstatic.net/MjAxNzA2MjNfODAg/MDAxNDk4MTg5MTEzMDk2.wXtSHy-XebHz_qG_HCIK8Fj0Zp9lCFsK5hSe-vWcmfUg.5S0mZvXmuuqA3MJtgTxTVYHBGV9U6o7z3ojcIqQDWsEg.JPEG.cordialguy2/image_9515614291498188868487.jpg?type=w800" />
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>액제 형태</p>
                                        <p>처방 전 미정</p>
                                    </div>
                                    <p>크러밴액</p>
                                    <button>약국에서 처방 필수</button>
                                </div>
                            </div>
                            <br></br>
                            <p>참고 영상</p>
                            <p style={{ fontSize: '12px' }}>
                                <a href="https://youtu.be/bmRlLTqfts4?si=KTrdWM-mKZlK0iFj">샴푸 사용법 Click!</a>
                                <a href="https://blog.naver.com/kangjj372/223297885145">스테로이드 종류 Click!</a>
                            </p>
                        </div>
                    )}
                </div>
            )
        } else if (skinType == "수부지") {
            return (

                <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                    <div style={{ alignItems: 'center' }}>
                        <p>조회수<span style={{ color: 'red' }}> 14만회 클렌징 </span>루틴</p>
                    </div>
                    <button onClick={() => toggleDetails('item1')}>
                        {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                    </button>
                    {showDetails.item1 && (
                        <div className='youtube-item-detail'>
                            <div className='youtube-profile displayFlex'>
                                <img src='https://yt3.googleusercontent.com/80LHzlXj90CDw6l1HzA1MFZzIxOpKEVuvH9OCen7_B4L5NimaiSXOAqrNeG9Bj_fWTeOYZr6fQ=s176-c-k-c0x00ffffff-no-rj' />
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <p style={{ fontSize: '15px' }}>디렉터 파이</p>
                                    <p style={{ fontSize: '12px' }}>102만명</p>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://image7.coupangcdn.com/image/vendor_inventory/1e4c/c96f8805137616e65fa489f5ca9f1deca1d98eeaba6a535d3bca577d58d2.jpg'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>Step 1_1. 클렌징오일</p>
                                        <p>20,400원</p>
                                    </div>
                                    <p>어바웃미 쌀막걸리 클렌징 오일</p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7581694632?itemId=20015231049&vendorItemId=88205412776&q=%EC%96%B4%EB%B0%94%EC%9B%83%EB%AF%B8+%EC%8C%80+%EB%A7%89%EA%B1%B8%EB%A6%AC+%ED%81%B4%EB%A0%8C%EC%A7%95+%EC%98%A4%EC%9D%BC&itemsCount=36&searchId=6b7d6dceb8f746dc8151ca30f24c431d&rank=1"}>구매 하기</button>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/9b3ba705-b58d-424e-8ff4-b98fae7d89576194088341903861099.png'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>Step 1_2. 클렌징폼</p>
                                        <p>11,480원</p>
                                    </div>
                                    <p>어바웃미 쌀 막걸리 클렌징 폼</p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/6346160285?itemId=19169247471&vendorItemId=86287508503&pickType=COU_PICK&q=%EC%96%B4%EB%B0%94%EC%9B%83%EB%AF%B8+%EC%8C%80+%EB%A7%89%EA%B1%B8%EB%A6%AC+%ED%81%B4%EB%A0%8C%EC%A7%95+%ED%8F%BC&itemsCount=36&searchId=ec8c99cdd1694e7fb50ae9cc2c62c8e1&rank=1"}>구매 하기</button>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2023/01/11/16/4/78220ac3-1066-4326-8af4-85b3635940e4.jpg'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>Step 1_3. 클렌징 패드</p>
                                        <p>17,100원</p>
                                    </div>
                                    <p>듀이트리 AC 컨트롤 EX 딥 그린 카밍 패드</p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7058033535?itemId=17491233909&vendorItemId=84658607090&pickType=COU_PICK&sourceType=srp_product_ads&clickEventId=c7f5fbd0-bdae-11ee-b36a-b3b50917e38f&korePlacement=15&koreSubPlacement=1&clickEventId=c7f5fbd0-bdae-11ee-b36a-b3b50917e38f&korePlacement=15&koreSubPlacement=1&q=%EB%93%80%EC%9D%B4%ED%8A%B8%EB%A6%AC+AC+%EC%BB%A8%ED%8A%B8%EB%A1%A4+EX+%EB%94%A5+%EA%B7%B8%EB%A6%B0+%EC%B9%B4%EB%B0%8D+%ED%8C%A8%EB%93%9C&itemsCount=36&searchId=c4fe31248fa54c88916e90e78131e7cd&rank=0"}>구매 하기</button>
                                </div>
                            </div>
                            <br></br>
                            <p>참고 영상</p>
                            <p style={{ fontSize: '12px' }}>
                                <a href="https://www.youtube.com/watch?v=GH1cV94pveQ">자세한 루틴 소개 Click!</a>
                            </p>
                        </div>
                    )}
                    <br /><br />
                    <div style={{ alignItems: 'center' }}>
                        <p>조회수<span style={{ color: 'red' }}> 14만회 관리</span> 루틴</p>
                    </div>
                    <button onClick={() => toggleDetails('item1')}>
                        {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                    </button>
                    {showDetails.item1 && (
                        <div className='youtube-item-detail'>
                            <div className='youtube-profile displayFlex'>
                                <img src='https://yt3.googleusercontent.com/80LHzlXj90CDw6l1HzA1MFZzIxOpKEVuvH9OCen7_B4L5NimaiSXOAqrNeG9Bj_fWTeOYZr6fQ=s176-c-k-c0x00ffffff-no-rj' />
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <p style={{ fontSize: '15px' }}>디렉터 파이</p>
                                    <p style={{ fontSize: '12px' }}>102만명</p>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2469747148449101-3d7904a4-d2f2-472e-b599-d3a9bb08f54d.jpg'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>Step 1. 토너</p>
                                        <p>23,260원</p>
                                    </div>
                                    <p>라로슈포제 세로징크 세범 컨트롤 미스트</p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/6703639963?itemId=15536695328&vendorItemId=86493038919&q=%EB%9D%BC%EB%A1%9C%EC%8A%88%ED%8F%AC%EC%A0%9C+%EC%84%B8%EB%A1%9C%EC%A7%95%ED%81%AC+%EC%84%B8%EB%B2%94+%EC%BB%A8%ED%8A%B8%EB%A1%A4+%ED%86%A0%EB%8B%9D+%EB%AF%B8%EC%8A%A4%ED%8A%B8&itemsCount=36&searchId=362623eebfac41bc9d02a148a23c7dd6&rank=1"}>구매 하기</button>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/rs_quotation_api/qzysd137/635d28e7743a43f2ae0be2a896c4798c.jpg'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>Step 2. 에센스</p>
                                        <p>18,440원</p>
                                    </div>
                                    <p>미샤 개똥쑥 진정 에센스</p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/5993368651?itemId=10828145675&vendorItemId=78108218971&q=%EB%AF%B8%EC%83%A4+%EA%B0%9C%EB%98%A5%EC%91%A5+%EC%A7%84%EC%A0%95+%EC%97%90%EC%84%BC%EC%8A%A4&itemsCount=35&searchId=23f9c30ddfc046c5ac9919f01c0b5bde&rank=1"}>구매 하기</button>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/cd66/1adeb1a96584931ac32d0f4960c7ccdf4d013ed5d281570481eb91a79c28.png'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>Step3. 수분 크림</p>
                                        <p>23,760원</p>
                                    </div>
                                    <p>이지앤트리 어니언 뉴페어 갤 크림</p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/6293159823?itemId=12974859422&vendorItemId=87112912027&q=%EC%9D%B4%EC%A7%80%EC%95%A4%ED%8A%B8%EB%A6%AC+%EC%96%B4%EB%8B%88%EC%96%B8+%EB%89%B4%ED%8E%98%EC%96%B4+%EA%B0%A4+%ED%81%AC%EB%A6%BC&itemsCount=36&searchId=4be16c7bdec94e3a8d3b0df4d34f0656&rank=1"}>구매 하기</button>
                                </div>
                            </div>
                            <br></br>
                            <p>참고 영상</p>
                            <p style={{ fontSize: '12px' }}>
                                <a href="https://www.youtube.com/watch?v=GH1cV94pveQ">자세한 루틴 소개 Click!</a>
                            </p>
                        </div>
                    )}
                </div>
            )
        } else {
            return (
                <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                    <div style={{ alignItems: 'center' }}>
                        <p>Step1. <span style={{ color: 'red' }}> 수분 가득</span> 토너</p>
                    </div>
                    <button onClick={() => toggleDetails('item1')}>
                        {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                    </button>
                    {showDetails.item1 && (
                        <div className='youtube-item-detail'>
                            <div className='youtube-profile displayFlex'>
                                <img src='https://yt3.ggpht.com/u4vmJM8VDoyeSwnraka4hRj-JhlUbkPuBVPBxxp8SEFgw-VaY34Hv3lF4TLXLZts-45WIcAIR-k=s88-c-k-c0x00ffffff-no-rj' />
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <p style={{ fontSize: '15px' }}>피부는민동성</p>
                                    <p style={{ fontSize: '12px' }}>구독자 53.4만명</p>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/6585596385228208-fe78cf65-7f59-44c4-8b6a-abb4fb461b68.jpg'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>닥터지</p>
                                        <p>26,350원</p>
                                    </div>
                                    <p>레드 블레미쉬 시카 수딩 토너</p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/6543627791?itemId=14579392052&vendorItemId=81821492138&q=민감성&itemsCount=36&searchId=1da99b7f475c43d3b9386347a14a6854&rank=1&isAddedCart="}>구매하기</button>
                                </div>
                            </div>
                            <br></br>
                            <p>참고 영상</p>
                            <p style={{ fontSize: '12px' }}>
                                <a href="https://youtu.be/rNxz266H53c?feature=shared">자세한 토너 소개 Click!</a>
                            </p>
                        </div>
                    )}<br /><br />
                    <div style={{ alignItems: 'center' }}>
                        <p>Step2. <span style={{ color: 'red' }}>가벼운 보습</span>크림</p>
                    </div>
                    <button onClick={() => toggleDetails('item1')}>
                        {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                    </button>
                    {showDetails.item1 && (
                        <div className='youtube-item-detail'>
                            <div className='youtube-profile displayFlex'>
                                <img src='https://yt3.ggpht.com/o1sT6D0Xd1LcGP3pk-6hqwq7amUO8pLOxPSId1zzszMBIEDi3TjBdrKP9m8r7XQBBA7v5xDMng=s88-c-k-c0x00ffffff-no-rj' />
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <p style={{ fontSize: '15px' }}>더마쏭 피부과전문의 송승현</p>
                                    <p style={{ fontSize: '12px' }}>구독자 1.19만명</p>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/9508847276305564-ae3485c2-a561-4df9-87aa-607e4e49b0ae.jpg'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>일리윤</p>
                                        <p>8,270원</p>
                                    </div>
                                    <p>히알루론 모이스춰 수분크림</p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/1176713569?itemId=2155653933&vendorItemId=70153899684&q=민감성&itemsCount=36&searchId=1da99b7f475c43d3b9386347a14a6854&rank=3&isAddedCart="}>구매하기</button>
                                </div>
                            </div>
                            <br></br>
                            <p>참고 영상</p>
                            <p style={{ fontSize: '12px' }}>
                                <a href="https://youtu.be/gPVeyf9ygtM?feature=shared">자세한 크림 소개 Click!</a>
                            </p>
                        </div>
                    )}<br /><br />
                    <div style={{ alignItems: 'center' }}>
                        <p>Step3. <span style={{ color: 'red' }}> 무거운 보습</span> 크림</p>
                    </div>
                    <button onClick={() => toggleDetails('item1')}>
                        {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                    </button>
                    {showDetails.item1 && (
                        <div className='youtube-item-detail'>
                            <div className='youtube-profile displayFlex'>
                                <img src='https://yt3.ggpht.com/DgGg-sCxVDgarcC9E_3e8lkRxiOGwT8K0gmlLdfZ4c42PfuIdTK50Ajv1NaMWtUolLOXapybM7U=s88-c-k-c0x00ffffff-no-rj' />
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <p style={{ fontSize: '15px' }}>제이미포유</p>
                                    <p style={{ fontSize: '12px' }}>구독자 38.4만명</p>
                                </div>
                            </div>
                            <div className='product-item displayFlex'>
                                <img src='https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2371402108518558-41d65cb4-b116-44f5-bc7a-5f6b8e21c54f.jpg'></img>
                                <div style={{ width: '100%', textAlign: 'left', marginLeft: '5%' }}>
                                    <div className='displayFlex' style={{ justifyContent: 'space-between' }}>
                                        <p style={{ fontSize: '13px' }}>일리윤</p>
                                        <p>12,070원</p>
                                    </div>
                                    <p>세라마이드 아토 집중 크림</p>
                                    <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7255541573?itemId=16807390921&vendorItemId=3003330255&pickType=COU_PICK&q=건성&itemsCount=36&searchId=1d669812fbda4ff3ae5a02068a8e9b6c&rank=1&isAddedCart="}>구매하기</button>
                                </div>
                            </div>
                            <br></br>
                            <p>참고 영상</p>
                            <p style={{ fontSize: '12px' }}>
                                <a href="https://youtu.be/suS-wV5d8YI?feature=shared">자세한 크림 소개 Click!</a>
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
                    <img src={him} style={{ width: '80%' }}></img>
                    <div>
                        <p>{memberName}님의 피부타입은 <b className="b" style={{ color: 'red' }}>{skinType}</b> 입니다.</p>
                        <p>제품 추천은 아래와 같습니다.</p>
                        <div className='type_explanation'>
                            {important()}
                            <br />
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
                <button onClick={() => navigate('/')}>홈으로 이동</button>
            </div>
        </div>
    )
}

export default Result;