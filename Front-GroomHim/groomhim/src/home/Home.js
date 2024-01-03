import "./Home.css";
import logo from "../assets/imgs/logo.png";
import {Link} from 'react-router-dom';

function Home(){
    return(
        <>
            <div className="container">
                <img className="logo" src={logo} alt="logo"/>
                <h2>질문의 답을 하고 나의 피부타입에 맞는 화장품을 추천받자</h2>
            <Link to="/skinTest" className="test_btn">
                추천받기
            </Link>
            </div>
        </>
    );
}

export default Home;