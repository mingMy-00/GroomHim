import "./Home.css";
import logo from "../assets/imgs/logo.png";
import {Link} from 'react-router-dom';

function Home(){
    return(
        <>
            <div className="container">
                <div id="main">
                    <img className="logo" src={logo} alt="logo"/>
                        <h2>피부 타입도 알아내고, 그에 맞는 제품도 추천 받기</h2>
                        <Link to="/skinTest" className="test_btn">
                            추천받기
                        </Link>
                 </div>
            </div>
        </>
    );
}

export default Home;