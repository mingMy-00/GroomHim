import './Result.css';
import logo from "../assets/imgs/logo.png";
import { useLocation } from 'react-router-dom';

function Result(){

    const location = useLocation();
    const skinType = location.state.skinType[0].skinType;
  
    return(
        <> 
            <div className='result-container'>
                <p> 김민제님의 피부타입은 {skinType} 입니다.</p>
                <p> 회원님의 피부 타입에 따른 제품추천은 아래와 같습니다.</p>
            
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