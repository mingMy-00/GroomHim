import './Result.css';
import { useLocation , useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Dryhim from '../assets/imgs/DryHim.png';
import TroubleHim from '../assets/imgs/TroubleHim.png';
import Him from '../assets/imgs/Him.jpg';
import OilHim from '../assets/imgs/OilHim.png';

function Pore() {
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
            <p><b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">코팩 절대 하지마 !</b> <br/><br/>
               블랙헤드는 코팩을 하면 무조건 모공이 넓어져요 !<br /> 
               그렇다고 제거를 안하면 쌓여있는 피지 때문에  <br/>
               모공은 계속 넓어지고 넓은 모공일 수록 <br/>
               피지는 잘 쌓이고 무한 굴레.. <br/><br/>

               아래 자세한 정보에는  <br />
               ✔ <b Style="color : red">블랙헤드 녹이는 법</b>과, <br />
               ✔ <b Style="color : red">모공에 좋은 제품</b>들을 추천해줍니다.
            </p>
        )
    }

    const introDetail = () => {
        return(
            <div id="margin">
                <div class="tooltip-container">
                    <span class="text">자세한 정보👀</span>
                    <span className="introDetail">           
                    <b Style="border : 1px solid black; padding : 5px; border-radius : 4px; background-color : white;">블랙헤드 제거 방법</b> <br/><br/>
                        ✔ 방법 1. 클렌징 오일을 사용한다.  <br/>
                        블랙헤드도 기름이기 때문에, 기름과 기름을 문질러주면 <br/>
                        내 블랙헤드 기름과 함께 섞여서 <br/>
                        사라지게 되는 원리입니다. 이게 귀찮다면 .
                        <br /><br />
                        ✔ 방법 2. 피지액으로 녹여준다. <br/>
                        아래 추천 영상 중 문장군을 보시면 됩니다. <br/>
                        피지를 모공 자극 없이 제거해주는 최고의 방법임.<br/>
                        <a Style="border-bottom : 1px solid black;" href="https://youtu.be/oSTanNf-goY?si=0hxC9Seg9kwDBNtG">조회수 174만회 문장군 영상 Click!</a>
                    </span>
                </div>
            </div>
            );
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
                        <p>{memberName}님의 고민인 <b className="b" style={{color : 'red'}}> 모공, 블랙헤드 </b></p>
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
                            <p>유튜브 조회수<span style={{color : 'red'}}> 19만회 </span>건성 오일</p>
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
                                    <img src='https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/6887/f4ce6cd2b36d112bdfcfb6021af72651405df149151dbfc4c15b3fb57f8f.jpg'></img>
                                    <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                        <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                            <p style={{fontSize : '13px'}}>건성 클렌징 오일</p> 
                                            <p>15,740원</p>
                                        </div>
                                        <p>마녀공장 퓨어 클렌징 오일</p>
                                        <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7167507394?itemId=8217861723&vendorItemId=86285866286&pickType=COU_PICK&q=%EB%8B%A5%ED%84%B0%EC%9E%90%EB%A5%B4%ED%8A%B8+%EC%8B%9C%EC%B9%B4%ED%8E%98%EC%96%B4+%ED%8E%98%EC%9D%B4%EC%85%9C+%EC%B9%B4%EB%B0%8D+%EB%AF%B8%EC%8A%A4%ED%8A%B8&itemsCount=36&searchId=b53223c3362f47fc8d6f59e650bb5b0a&rank=1"}>구매 하기</button>
                                    </div>
                                </div>
                                <div className='product-item displayFlex'>
                                    <img src='https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/e6b0/2fc464c65c218655346effad322e4059a8568e0b7c6baa9b454832ff739c.jpg'></img>
                                    <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                    <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                            <p style={{fontSize : '13px'}}>지성, 수부지 오일</p> 
                                            <p>25,000원 </p>
                                        </div>
                                        <p>아비브 포어 클렌징 오일 어성초</p>
                                        <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/7701394495?itemId=20620827155&vendorItemId=86323676577&q=%EC%95%84%EB%B9%84%EB%B8%8C+%ED%8F%AC%EC%96%B4+%ED%81%B4%EB%A0%8C%EC%A7%95+%EC%98%A4%EC%9D%BC+%EC%96%B4%EC%84%B1%EC%B4%88&itemsCount=36&searchId=5888f3afc618470c849b32139fc6785d&rank=1"}>구매 하기</button>
                                    </div>
                                </div>
                                <br></br>
                                <p>참고 영상</p>
                                <p style={{fontSize : '12px'}}>
                                     <a href="https://youtu.be/P6awdqTFUTw?si=HmWv__3DnsrVfgI6">클렌징 오일 소개 Click!</a>
                                </p>
                            </div>
                        )}
                    </div>
                    <div className={`youtube-item ${showDetails.item1 ? 'show' : ''}`}>
                        <div  style={{alignItems : 'center'}}>
                            <p>유튜브 조회수<span style={{color : 'red'}}> 175만회 </span>블랙헤드 제거 루틴</p>
                        </div>
                        <button onClick={() => toggleDetails('item1')}>
                            {showDetails.item1 ? '간략히 보기' : '자세히 보기'}
                        </button>
                        {showDetails.item1 && ( 
                            <div className='youtube-item-detail'>
                                <div className='youtube-profile displayFlex'>
                                <img src='https://yt3.ggpht.com/Ke6WL5e2M5myn1wp_DKMZHC3zI4wa8eFrnLnkpNG8bwiHUNCAZM25N-xz8MrVs4igcwwGuUfcQ=s88-c-k-c0x00ffffff-no-rj' />
                                    <div style={{ width : '100%', textAlign: 'left', marginLeft: '5%'}}>
                                        <p style={{fontSize: '15px'}}>문장군</p>
                                        <p style={{fontSize: '12px'}}>구독자 16만명</p>
                                    </div>
                                </div>
                                <div className='product-item displayFlex'>
                                    <img src='https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/540126876430915-645bf84a-1048-4d86-9e72-eb296ecb4bf1.jpg'></img>
                                    <div style={{width : '100%', textAlign : 'left', marginLeft: '5%'}}>
                                        <div className='displayFlex' style={{justifyContent : 'space-between'}}>
                                            <p style={{fontSize : '13px'}}>피지 제거액</p> 
                                            <p>21,140원</p>
                                        </div>
                                        <p>스와니코코 포어클리어런스</p>
                                        <button onClick={() => window.location.href = "https://www.coupang.com/vp/products/6613108996?itemId=17759761836&vendorItemId=70229775783&pickType=COU_PICK&q=%EC%8A%A4%EC%99%80%EB%8B%88%EC%BD%94%EC%BD%94+%ED%8F%AC%EC%96%B4%ED%81%B4%EB%A6%AC%EC%96%B4%EB%9F%B0%EC%8A%A4&itemsCount=36&searchId=661090429e5d404892f823efb0fcb020&rank=0"}>구매 하기</button>
                                    </div>
                                </div>
                                <br></br>
                                <p>참고 영상</p>
                                <p style={{fontSize : '12px'}}>
                                     <a href="https://www.youtube.com/watch?v=oSTanNf-goY&pp=ygUX66y47J6l6rWwIO2UvOyngCDsoJzqsbA%3D">클렌징 오일 소개 Click!</a>
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
}export default Pore;