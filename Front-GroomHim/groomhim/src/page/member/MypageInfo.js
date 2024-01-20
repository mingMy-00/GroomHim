import React, { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';
import { useNavigate } from "react-router-dom";
import './MypageInfo.css';
import axios from "axios";

function MypageInfo() {
    const userInfo = JSON.parse(sessionStorage.getItem("loginMember"));
    console.log(userInfo);

    const navigate = useNavigate();
    const [nickname, setNickname] = useState(userInfo.memberNickname);
    const [showNicknameLabel, setShowNicknameLabel] = useState(false);
    const [password, setPassword] = useState('123456');
    const [showPasswordLabel, setShowPasswordLabel] = useState(false);
    const [phone, setPhone] = useState(userInfo.memberPhone);
    const [showPhoneLabel, setPhoneLabel] = useState(false);
    const [gender, setGender] = useState(userInfo.memberGender);
    const [birthdate, setBirthdate] = useState(userInfo.memberBirth);
    const [modalMessage, setModalMessage] = useState();
    const changePassword = (e) => {
        const inputValue = e.target.value;
        setPassword(inputValue);
        setShowPasswordLabel(inputValue.length > 0);
    }
    const updatePassword = () => {
        setModalMessage("비밀번호 변경 완료");
        const data = {
            memberNo: userInfo.memberNo,
            memberPassword: password,
            updateType : 'password'
        };
        updateAxios(data);
    }

    const changeNickname = (e) => {
        const inputValue = e.target.value;
        setNickname(inputValue);
        setShowNicknameLabel(inputValue.length > 0);
    }
    const updateNickname = () => {
        setModalMessage("닉네임 변경 완료");
        const data = {
            memberNo: userInfo.memberNo,
            memberNickname: nickname,
            updateType : 'nickname'
        };
        updateAxios(data);
    }

    const changePhone = (e) => {
        const inputValue = e.target.value;
        setPhone(inputValue);
        setPhoneLabel(inputValue.length > 0);
    }
    const updatePhone = () => {
        setModalMessage("휴대폰 번호 변경 완료");
        const data = {
            memberNo: userInfo.memberNo,
            memberPhone: phone,
            updateType : 'phone'
        };
        updateAxios(data);
    }

    const changeGender = (e) => {
        setModalMessage("성별 변경 완료");
        const inputValue = e.target.value;
        setGender(inputValue);
        const data = {
            memberNo: userInfo.memberNo,
            memberGender: inputValue,
            updateType : 'gender'
        };
        updateAxios(data);
    }

    const changeBirth = (e) => {
        setModalMessage("생일 변경 완료");
        const inputValue = e.target.value;
        setBirthdate(inputValue);
        const data = {
            memberNo: userInfo.memberNo,
            memberBirth: inputValue,
            updateType : 'birth'
        };
        updateAxios(data);
    }

    const updateAxios = (requestData) => {
        axios({
            url: "http://localhost:9090/updateInfo",
            method: "post",
            data:requestData
        }).then(function (response) {
            openModal();
            setTimeout(() => {
                closeModal();
            }, 1500);
        }).catch(function () {
            console.log("비밀번호 변경 실패");
        });
    }

    const [visible, setVisible] = useState(false);
    //모달이 오픈
    const openModal = () => {
        setVisible(true);
    };

    //모달을 close
    const closeModal = () => {
        setVisible(false);
    };

    return (
        <div className='mypageInfo'>
            <div style={{borderBottom : '1px solid black', padding : '10px'}}>
                <h2>＜ 회원정보 수정</h2>
            </div>
            <div className='info-profile'>
                <img src={userInfo.memberProfile == null ? '/img/logo-icon.png' : userInfo.memberProfile} />
                <div className='info-profile-edit'>
                    <img src='/img/edit-icon.png'></img>
                </div>
            </div>
            
            <div>
                <div className='info-item'>
                    <label>아이디</label>
                    <input type="text" value={userInfo.memberId}  disabled/>
                </div>

                <div className='info-item'>
                    <label>이메일</label>
                    <input type="text" value={userInfo.memberEmail} disabled/>
                </div>

                <div className='info-item'>
                    <label>이름</label>
                    <input type="text" value={userInfo.memberName} disabled/>
                </div>

                <div className='info-item'>
                    <label>비밀번호</label>
                    <input type="password" placeholder='' value={password} onChange={changePassword}/>
                    {showPasswordLabel && <span className="save-label" onClick={updatePassword}>저장하기</span>}
                </div>
                
                <div className='info-item'>
                    <label>닉네임</label>
                    <input type="text" value={nickname} onChange={changeNickname} />
                    {showNicknameLabel && <span className="save-label" onClick={updateNickname}>저장하기</span>}
                </div>

                <div className='info-item'>
                    <label>성별</label>
                    <div class="radio-container">
                        <div class="radio-wrapper">
                            <label class="radio-button">
                                <input id="option1" name="radio-group" value={'M'} type="radio" onChange={changeGender} checked={gender === 'M'} />
                                <span class="radio-checkmark"></span>
                                <span class="radio-label">남자</span>
                            </label>
                        </div>
                        <div class="radio-wrapper">
                            <label class="radio-button">
                                <input id="option2" name="radio-group" value={'F'} type="radio" onChange={changeGender} checked={gender === 'F'}/>
                                <span class="radio-checkmark"></span>
                                <span class="radio-label">여자</span>
                            </label>
                        </div>
                        <div class="radio-wrapper">
                            <label class="radio-button">
                                <input id="option3" name="radio-group" value={'NONE'} type="radio" onChange={changeGender} checked={gender === 'NONE'} />
                                <span class="radio-checkmark"></span>
                                <span class="radio-label">선택안함</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className='info-item'>
                    <label>생일</label>
                    <input type="date" value={birthdate} onChange={changeBirth}/>
                </div>

                <div className='info-item'>
                    <label>휴대폰 번호</label>
                    <input type="number" value={phone} onChange={changePhone} />
                    {showPhoneLabel && <span className="save-label" onClick={updatePhone}>저장하기</span>}
                </div>
            </div>
            <br/><br/><br/><br/>
            <Modal visible={visible}
                width="80%" height="20%"
                effect="fadeInDown" 
                onClickAway={closeModal}
            >
                <div className='updateModal'>
                    {modalMessage}
                </div>
            </Modal>
        </div>
    );
}
export default MypageInfo;