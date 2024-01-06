import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Modal from 'react-awesome-modal';
import './footer.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Header = () => {
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

    let navigate = useNavigate();
    const moveSignUp = () => {
        navigate("/page/member/AgreementPage", {
        });
    };

    return (
        <div className='footer'>
            <div id="loginEnroll"><h5 onClick={openModal}> 로그인 </h5><h5 onClick={moveSignUp}> 회원가입 </h5></div>
            <Modal
                visible={visible}
                width="400" height="360"
                effect="fadeInDown"
                onClickAway={closeModal}
            >
                <div>
                    <h4 className='acenter2 login_tit'>Login </h4>
                    <form>
                        <div className='login_div'>
                            <div className='login_input_div'>
                                <br />
                                <input type='text' name='id' id="id" value={id} placeholder="아이디" onChange={changeID} />
                            </div>

                            <div className='login_input_div' style={{ 'marginTop': '40px' }}>
                                <input type='text' name='password' id="password" value={password} placeholder="비밀번호" onChange={changePW} />
                            </div>
                            <div>
                                <label className="loginPage_text">
                                    <input type="checkbox" onChange={handleOnChange} checked={isRemember} />
                                    ID 저장하기
                                </label>
                            </div>

                            <div className='submit_div'>
                                <div id="login"> <input type='button' value='로그인' onClick={onClickLogin} /> </div>
                                <div> <input type='button' value='취소' onClick={closeModal} /> </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default Header;