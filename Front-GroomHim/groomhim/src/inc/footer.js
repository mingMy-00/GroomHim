import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Modal from 'react-awesome-modal';
import './footer.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Footer = () => {

    const [isLogin, setIsLogin] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    
    const handleItemClick = (item) => {
        if (selectedItem === item) {
            setSelectedItem(null);
        } else {
            
        }
    };

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
            url: process.env.REACT_APP_BACKEND_IP + "/login.me",
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
                <div className={`footerItem ${selectedItem === "mypage" ? "footer-select" : ""}`} onClick={moveMypage}>
                    <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.78792 29.1668C2.15892 29.1668 1.62058 28.9425 1.17292 28.4939C0.724305 28.0472 0.5 27.5093 0.5 26.8803V3.12141C0.5 2.49241 0.724305 1.95408 1.17292 1.50641C1.62058 1.0578 2.15892 0.833496 2.78792 0.833496H15.2121C15.8411 0.833496 16.3794 1.0578 16.8271 1.50641C17.2757 1.95408 17.5 2.49241 17.5 3.12141V26.8789C17.5 27.5079 17.2757 28.0462 16.8271 28.4939C16.3794 28.9425 15.8411 29.1668 15.2121 29.1668H2.78792ZM9 17.8335C10.275 17.8335 11.5089 17.9955 12.7017 18.3194C13.8946 18.6434 15.0218 19.1024 16.0833 19.6964V5.79183H1.91667V19.6964C2.97917 19.1014 4.10683 18.6424 5.29967 18.3194C6.49155 17.9955 7.725 17.8335 9 17.8335ZM9.00283 15.7085C8.02061 15.7085 7.18431 15.3647 6.49392 14.6772C5.80353 13.9887 5.45833 13.1528 5.45833 12.1697C5.45833 11.1874 5.80258 10.3511 6.49108 9.66075C7.17864 8.97036 8.014 8.62516 8.99717 8.62516C9.97939 8.62516 10.8157 8.96941 11.5061 9.65791C12.1965 10.3455 12.5417 11.1808 12.5417 12.164C12.5417 13.1462 12.1979 13.9825 11.5103 14.6729C10.8218 15.3633 9.986 15.7085 9.00283 15.7085Z" fill="#C2C2C2" />
                    </svg>
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
        setSelectedItem("mypage");
        navigate('/page/member/Mypage', {});
    }

    const showHome = () => {
        setSelectedItem("home");
        navigate("/", {});
    };

    const notice = () => {
        setSelectedItem("notice");
        navigate("/page/notice/Notice", {});
    }

    const question = () => {
        setSelectedItem("question");
        navigate("/page/question", {});
    }

    const findId = () => {
        closeModal();
        navigate("/page/member/FindId");
    }

    const kakaoLogin = async (e) => {
        window.location.href = 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=7e7ac347addcfef31e432e4ed779752a&redirect_uri='+process.env.REACT_APP_FRONTEND_IP+'/callback/kakao';
    };

    const errorAlert = () => {
        alert("서비스 준비중입니다.")
    }
    return (
        <div className=''>
            <div className='footer-list'>
                <div className={`footerItem ${selectedItem === "home" ? "footer-select" : ""}`} onClick={showHome}>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="38" height="38" fill="white" />
                        <path d="M15.8334 30.0835V22.1668H22.1667V30.0835C22.1667 30.9543 22.8792 31.6668 23.75 31.6668H28.5C29.3709 31.6668 30.0834 30.9543 30.0834 30.0835V19.0001H32.775C33.5034 19.0001 33.8517 18.0976 33.2975 17.6226L20.0609 5.70014C19.4592 5.1618 18.5409 5.1618 17.9392 5.70014L4.70253 17.6226C4.1642 18.0976 4.4967 19.0001 5.22503 19.0001H7.9167V30.0835C7.9167 30.9543 8.6292 31.6668 9.50003 31.6668H14.25C15.1209 31.6668 15.8334 30.9543 15.8334 30.0835Z" fill="#C2C2C2" />
                    </svg>
                    <p className='item-name'>홈</p>
                </div>
                <div className={`footerItem ${selectedItem === "notice" ? "footer-select" : ""}`} onClick={notice}>
                    <img className='footer-icon' src='/img/speaker-icon.png' />
                    <p className='item-name'>공지사항</p>
                </div>
                <div className={`footerItem ${selectedItem === "question" ? "footer-select" : ""}`} onClick={question}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="36" height="36" transform="matrix(-1 0 0 1 36 0)" fill="white" />
                        <path d="M3.83203 14.0695C4.32703 13.5534 4.8375 13.0205 5.00484 12.6169C5.15391 12.2569 5.16516 11.5158 5.175 10.8633C5.19609 9.45703 5.22281 7.70766 6.46594 6.46594C7.70906 5.22422 9.45703 5.20031 10.8633 5.175C11.5158 5.16516 12.2569 5.15391 12.6169 5.00484C13.0205 4.8375 13.5534 4.32703 14.0695 3.83203C15.0652 2.87719 16.3055 1.6875 18 1.6875C19.6945 1.6875 20.9348 2.87719 21.9305 3.83203C22.4466 4.32703 22.9795 4.8375 23.3831 5.00484C23.7431 5.15391 24.4842 5.16516 25.1367 5.175C26.543 5.20312 28.2923 5.22281 29.5312 6.46875C30.7702 7.71469 30.7969 9.45703 30.825 10.8633C30.8348 11.5158 30.8461 12.2569 30.9952 12.6169C31.1625 13.0205 31.673 13.5534 32.168 14.0695C33.1228 15.0652 34.3125 16.3125 34.3125 18C34.3125 19.6875 33.1228 20.9348 32.168 21.9375C31.673 22.4536 31.1625 22.9866 30.9952 23.3902C30.8461 23.7502 30.8348 24.4913 30.825 25.1438C30.8039 26.55 30.7772 28.2994 29.5341 29.5411C28.2909 30.7828 26.543 30.8067 25.1367 30.832C24.4842 30.8419 23.7431 30.8531 23.3831 31.0022C22.9795 31.1695 22.4466 31.68 21.9305 32.175C20.9348 33.1228 19.6875 34.3125 18 34.3125C16.3125 34.3125 15.0652 33.1228 14.0695 32.168C13.5534 31.673 13.0205 31.1625 12.6169 30.9952C12.2569 30.8461 11.5158 30.8348 10.8633 30.825C9.45703 30.8039 7.70765 30.7772 6.46594 29.5341C5.22422 28.2909 5.20031 26.543 5.175 25.1367C5.16516 24.4842 5.15391 23.7431 5.00484 23.3831C4.8375 22.9795 4.32703 22.4466 3.83203 21.9305C2.87719 20.9348 1.6875 19.6945 1.6875 18C1.6875 16.3055 2.87719 15.0652 3.83203 14.0695ZM6.26766 19.5947C6.94547 20.2978 7.71328 21.1022 8.1225 22.0922C8.51906 23.0484 8.53453 24.0834 8.54437 25.0861C8.55562 25.8398 8.57109 26.8734 8.84672 27.1477C9.12234 27.4219 10.1545 27.4387 10.9083 27.45C11.9109 27.4655 12.9459 27.4809 13.9022 27.8719C14.8866 28.2811 15.6923 29.0489 16.3997 29.7267C16.9059 30.2119 17.6625 30.9375 18 30.9375C18.3375 30.9375 19.0941 30.2119 19.5947 29.7323C20.2978 29.0545 21.1022 28.2867 22.0922 27.8775C23.0484 27.4809 24.0834 27.4655 25.0861 27.4556C25.8398 27.4444 26.8734 27.4289 27.1477 27.1533C27.4219 26.8777 27.4388 25.8455 27.45 25.0917C27.4655 24.0891 27.4809 23.0541 27.8719 22.0978C28.2811 21.1134 29.0489 20.3077 29.7267 19.6003C30.2119 19.0941 30.9375 18.3375 30.9375 18C30.9375 17.6625 30.2119 16.9059 29.7323 16.4053C29.0545 15.7022 28.2867 14.8978 27.8775 13.9078C27.4809 12.9516 27.4655 11.9166 27.4556 10.9139C27.4388 10.1602 27.4219 9.12656 27.1406 8.85938C26.8594 8.59219 25.8328 8.56828 25.0791 8.55703C24.0764 8.54156 23.0414 8.52609 22.0852 8.13516C21.1008 7.72594 20.295 6.95813 19.5877 6.28031C19.0941 5.78813 18.3375 5.0625 18 5.0625C17.6625 5.0625 16.9059 5.78813 16.4053 6.26766C15.7022 6.94547 14.8978 7.71328 13.9078 8.1225C12.9516 8.51906 11.9166 8.53453 10.9139 8.54437C10.1602 8.55562 9.12656 8.57109 8.85234 8.84672C8.57812 9.12234 8.56125 10.1545 8.55 10.9083C8.53453 11.9109 8.51906 12.9459 8.12813 13.9022C7.71891 14.8866 6.95109 15.6923 6.27328 16.3997C5.79375 16.9003 5.06812 17.6569 5.06812 17.9944C5.06812 18.3319 5.78813 19.0941 6.26766 19.5947ZM15.75 25.3125C15.75 25.7575 15.882 26.1925 16.1292 26.5625C16.3764 26.9325 16.7278 27.2209 17.139 27.3912C17.5501 27.5615 18.0025 27.6061 18.439 27.5193C18.8754 27.4325 19.2763 27.2182 19.591 26.9035C19.9057 26.5888 20.12 26.1879 20.2068 25.7515C20.2936 25.315 20.249 24.8626 20.0787 24.4515C19.9084 24.0403 19.62 23.6889 19.25 23.4417C18.88 23.1945 18.445 23.0625 18 23.0625C17.4033 23.0625 16.831 23.2996 16.409 23.7215C15.9871 24.1435 15.75 24.7158 15.75 25.3125ZM11.8125 15.1875C11.8125 17.7708 13.7377 19.9519 16.3505 20.61C16.4384 21.0175 16.6741 21.3781 17.0121 21.6222C17.3501 21.8662 17.7665 21.9766 18.181 21.9318C18.5955 21.8871 18.9788 21.6905 19.257 21.38C19.5351 21.0694 19.6885 20.6669 19.6875 20.25V19.125C19.6875 18.6774 19.5097 18.2482 19.1932 17.9318C18.8768 17.6153 18.4476 17.4375 18 17.4375C16.4531 17.4375 15.1875 16.4278 15.1875 15.1875C15.1875 13.9472 16.4531 12.9375 18 12.9375C19.5469 12.9375 20.8125 13.9472 20.8125 15.1875V15.75C20.8125 16.1976 20.9903 16.6268 21.3068 16.9432C21.6232 17.2597 22.0524 17.4375 22.5 17.4375C22.9476 17.4375 23.3768 17.2597 23.6932 16.9432C24.0097 16.6268 24.1875 16.1976 24.1875 15.75V15.1875C24.1875 12.0853 21.4116 9.5625 18 9.5625C14.5884 9.5625 11.8125 12.0853 11.8125 15.1875Z" fill="#C2C2C2" />
                    </svg>
                    <p className='item-name'>Q&A</p>
                </div>
                {showLoginItem()}

            </div>


            {/* 로그인 모달 */}

            <Modal
                visible={visible}
                width="330px"
                height="60%"
                effect="fadeInDown"
                onClickAway={closeModal}
            >
                <div>

                </div>
                <div className='login-modal'>
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
                        <div><a onClick={errorAlert}>비밀번호 찾기</a></div>
                    </div>
                    <br />
                    {/* sns 로그인 영역 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <hr className='sns-hr' />
                        <p style={{ margin: 0 }}>SNS LOGIN</p>
                        <hr className='sns-hr' />
                    </div>
                    <div className='sns-icon-area'>
                        <img onClick={kakaoLogin} src='/img/kakao-icon.png' />
                        {/* <img src='/img/naver-icon.png' /> */}
                        {/* <img src='/img/google-icon.png' /> */}
                    </div>
                    <button className='signUp-btn' onClick={moveSignUp}>회원가입</button>
                </div>
            </Modal>

            </div>

    );
};

export default Footer;



