import "./Home.css";
import logo from "../assets/imgs/logo-short.png";
import {Link} from 'react-router-dom';

function Home(){

    const kakaoLogin = async (e) => {
        window.location.href = 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=7e7ac347addcfef31e432e4ed779752a&redirect_uri=http://localhost:3000/callback/kakao';
    };

    return(
        <>
            <div className="container">
                <div id="main">
                    <img className="logo" src={logo} alt="logo"/>
                        <h2>피부 타입도 알아내고, 그에 맞는 제품도 추천 받기</h2>
                        {/* <Link to="/skinTest" className="test_btn"> */}
                        <button className="test_btn" onClick={kakaoLogin}>
                            추천받기
                        </button>
                        {/* </Link> */}
                 </div>
            </div>
        </>
    );
}

export default Home;