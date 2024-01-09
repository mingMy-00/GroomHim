import './Result.css';
import logo from "../assets/imgs/logo.png";
import { useLocation } from 'react-router-dom';

function Result(){

    const location = useLocation();
    const skinType = location.state.skinType[0].skinType;
  
    const storedData = JSON.parse(sessionStorage.getItem("loginMember"));
    const memberName = storedData ? storedData.memberName : null;

    return(
        <> 
            <div className='result-container'>
                <p> {memberName}님의 피부타입은 {skinType} 입니다.</p>
                <div id="SkinIntro">건성 피부는 약하고 민감한 경우가 많아요.
                                <br></br>기름기가 많이 없기 때문에 자외선이나 외부의 요인에 자극받기 좋습니다. 
                                <br></br>따라서, <b>보습제품</b>이 가장 중요합니다.
                                <br></br>!!!유수분 밸런스가 가장 중요!! </div>
                               
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
        </>
    );
}

export default Result;