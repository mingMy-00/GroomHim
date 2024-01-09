import './Result.css';
import logo from "../assets/imgs/logo.png";
import { useLocation } from 'react-router-dom';

function Result(){

    const location = useLocation();
    const skinType = location.state.skinType[0].skinType;
  
    const storedData = JSON.parse(sessionStorage.getItem("loginMember"));
    const memberName = storedData ? storedData.memberName : null;

    return(
        <div>
            <div className='result-container'>
                <h1> {memberName}님의 피부타입은 <b class="b">{skinType}</b> 입니다.</h1>
                <div id="SkinIntro">
                    <div id="intro">
                    이 타입은 <b className="b">보습제품</b>과 <b className="b">유수분 밸런스</b>가 중요합니다.
                    <br></br>
                    <br />
                    <table id="table"> 
                        <tr>
                            <td>Step 1. </td>
                            <td>수분을 흡수시켜줄 토너</td>
                        </tr>
                        <tr>
                            <td>Step 2.</td>
                            <td>수분 가득 제품</td>
                        </tr>
                        <tr>
                            <td>Step 3.</td>
                            <td>수분을 눌러서 유지해줄 보습크림.</td>
                        </tr>
                    </table>
                </div>
                </div>
                <div className="buttonList">
                    <button>토너 <br />Top5</button>
                    <button>수분제품 Top5</button>
                    <button>보습크림 Top5</button>
                </div>
                               
                <div className='product-list'>
                    <div class="product-container">
                        <div class="product">
                            <img src={logo} alt="Product Image 1" />
                            <div class="product-info">
                                <h2>Product Name 1</h2>
                                <p>$19.99</p>
                            </div>
                            <button class="purchase-button">Buy</button>
                            <button class="scrap-button">Scrap</button>
                        </div>
                    </div>
                    <div class="product-container">
                        <div class="product">
                            <img src={logo} alt="Product Image 1" />
                            <div class="product-info">
                                <h2>Product Name 2</h2>
                                <p>$19.99</p>
                            </div>
                            <button class="purchase-button">Buy</button>
                            <button class="scrap-button">Scrap</button>
                        </div>
                    </div>
                    <div class="product-container">
                        <div class="product">
                            <img src={logo} alt="Product Image 1" />
                            <div class="product-info">
                                <h2>Product Name 3</h2>
                                <p>$19.99</p>
                            </div>
                            <button class="purchase-button">Buy</button>
                            <button class="scrap-button">Scrap</button>
                        </div>
                    </div>
                    <div class="product-container">
                        <div class="product">
                            <img src={logo} alt="Product Image 1" />
                            <div class="product-info">
                                <h2>Product Name 4</h2>
                                <p>$19.99</p>
                            </div>
                            <button class="purchase-button">Buy</button>
                            <button class="scrap-button">Scrap</button>
                        </div>
                    </div>
                    <div class="product-container">
                        <div class="product">
                            <img src={logo} alt="Product Image 1" />
                            <div class="product-info">
                                <h2>Product Name 4</h2>
                                <p>$19.99</p>
                            </div>
                            <button class="purchase-button">Buy</button>
                            <button class="scrap-button">Scrap</button>
                        </div>
                    </div>
                </div>
                <div className='result-btn'>
                    <button>설문 다시 하기</button>
                    <button>다른 설문 하기</button>
                    <button>홈으로 이동</button>
                </div>
            </div>
        </div>
    );
}
export default Result;