import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Modal from 'react-awesome-modal';
import './footer.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Footer = () => {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(function () {
        if (sessionStorage.getItem("loginMember") === null) {
            console.log(isLogin);
        } else {
            setIsLogin(true);
            console.log(isLogin);
        }
    })


    const [visible, setVisible] = useState(false);
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");


    const [isRemember, setIsRemember] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);

    useEffect(() => {
        if (cookies.rememberEmail !== undefined) {
            setId(cookies.rememberEmail);
            setIsRemember(true);
        }
    }, []);

    const handleOnChange = (e) => {
        setIsRemember(e.target.checked);
        if (e.target.checked) {
            setCookie('rememberEmail', id, { maxAge: 2000 });
        } else {
            removeCookie('rememberEmail');
        }
    }


    //모달이 오픈
    const openModal = () => {
        setVisible(true);
    };

    //모달을 close
    const closeModal = () => {
        setVisible(false);
    };

    //id가 변화될 때 마다
    const changeID = () => {
        const idValue = document.getElementsByName('id')[0].value;
        setId(idValue);
    };

    //password 변경될 때 마다
    const changePW = () => {
        const pwValue = document.getElementsByName('password')[0].value;
        setPassword(pwValue);
    };

    //로그인 하려고 하면 ! 
    const onClickLogin = () => {
        console.log("click login");
        console.log("ID : ", id);
        console.log("PW : ", password);

        axios({
            url: "http://localhost:9090/login.me",
            method: "post",
            data: { memberId: id, memberPwd: password }
        }).then(function (response) {

            if (response.data.memberId == null) {
                alert("존재하지 않는 아이디거나 일치하지 않는 비밀번호 입니다.");
            } else {
                alert("로그인 성공");
                sessionStorage.setItem("loginMember", JSON.stringify(response.data));
                //console.log(response.data);
                document.location.href = "/";
            }
        }).catch(function () {
            console.log("로그인 응답 실패.,,.");
        });
    };

    const showLoginItem = () => {
        if (!isLogin) {
            return (
                <div className='footerItem' onClick={openModal}>
                    <img className='footer-icon' src="/img/login-icon.png" />
                    <p className='item-name'>로그인</p>
                </div>
            );
        } else {
            return (
                <div className='footerItem' onClick={moveMypage}>
                    <img className='footer-icon' src="/img/mypage-icon.png" />
                    <p className='item-name'>마이페이지</p>
                </div>
            );
        }
    };

    let navigate = useNavigate();
    const moveSignUp = () => {
        closeModal();
        navigate("/page/member/AgreementPage");
    };
    const moveMypage = () => {
        navigate('/page/member/Mypage', {});
    }

    const showHome = () => {
        navigate("/", {});
    };

    const findId = () => {
        closeModal();
        navigate("/page/member/FindId");
    }

    const kakaoLogin = async (e) => {
        window.location.href = 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=23f907bb8235e70cb79955eb28e00bde&redirect_uri=http://localhost:3000/callback/kakao';
    };

    return (
        <div className='footer'>
            <div className='footerItem' onClick={showHome}>
                <img className='footer-icon' src="/img/home-icon.png" />
                <p className='item-name'>홈</p>
            </div>
            <div className='footerItem'>
                <img className='footer-icon' src="/img/category-icon.png" />
                <p className='item-name'>카테고리</p>
            </div>
            <div className='footerItem'>
                <img className='footer-icon' src="/img/shopping-icon.png" />
                <p className='item-name'>쇼핑</p>
            </div>
            <div className='footerItem'>
                <img className='footer-icon' src="/img/qa-icon.png" />
                <p className='item-name'>Q&A</p>
            </div>
            {showLoginItem()}
            


            {/* 로그인 모달 */}
            <Modal
                visible={visible}
                width="95%" height="80%"
                effect="fadeInDown"
                onClickAway={closeModal}
            >   
                <div className='login-modal'>
                    <img className="header_logo" src="img/logo-icon.png" />
                    <h4>남성 케어의 시작 GroomHim</h4>
                    <div className='login-cancel' onClick={closeModal}>X</div>
                    {/* 로그인 영역 */}
                    <h3>로그인</h3>
                    <form>
                        <div className="login-area">
                            <input type="input" className="login-field" 
                                name='id' id="login-id" value={id}
                                placeholder="아이디" onChange={changeID} required />
                            <label htmlFor="name" className="login-label">아이디</label>
                        </div>

                        <div className="login-area">
                            <input type="password" className="login-field" 
                                name='password' id="login-password" value={password}
                                placeholder="비밀번호" onChange={changePW} required />
                            <label htmlFor="name" className="login-label">비밀번호</label>
                        </div>
                    </form>
                    <button className='signUp-btn' onClick={onClickLogin}>로그인</button>
                    <div className='login-menu'>
                        <div onClick={findId}><a>아이디 찾기</a></div>
                        <div><a>비밀번호 찾기</a></div>
                    </div>
                    <br/>
                    {/* sns 로그인 영역 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <hr className='sns-hr' />
                        <p style={{ margin: 0 }}>SNS LOGIN</p>
                        <hr className='sns-hr' />
                    </div>
                    <div className='sns-icon-area'>
                        <img onClick={kakaoLogin} src='/img/kakao-icon.png' />
                        <img src='/img/naver-icon.png' />
                        <img src='/img/google-icon.png' />
                    </div>
                    <button className='signUp-btn' onClick={moveSignUp}>회원가입</button>
                </div>
            </Modal>
        </div>
    );
};

export default Footer;