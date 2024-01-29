import React, { useState } from 'react';
import "./Home.css";
import logo from "../assets/imgs/logo-short.png";
import { useNavigate } from "react-router-dom";

function Home(){
    const [isLogin, setIsLogin] = useState(false);
    let navigate = useNavigate();

    const moveSkinTest = async (e) => {
        if(sessionStorage.getItem("loginMember") == null) {
            alert("로그인 후 이용 가능합니다");
        } else {
            navigate("/skinTest");
        }
    };

    return(
        <>
            <div className="container">
                <div id="main">
                    <img className="logo" src={logo} alt="logo"/>
                        <h2>간단한 질문에 대한 응답 후 제품 추천받기</h2>
                        {/* <Link to="/skinTest" className="test_btn"> */}
                        <button className="test_btn" onClick={moveSkinTest}>
                            제품 추천받기
                        </button>
                        {/* </Link> */}
                 </div>
            </div>
        </>
    );
}

export default Home;