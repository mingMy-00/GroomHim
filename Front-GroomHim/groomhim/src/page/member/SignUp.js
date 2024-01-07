import React, { useState } from 'react';
import './SignUp.css';
import DaumPostcode from 'react-daum-postcode';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

function SignUp() {
    let location = useLocation();
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [addressDetail, setAddressDetail] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [openPostcode, setOpenPostcode] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleDuplicateCheck = async (field) => {
        let value = '';
        let checkUrl = '';
        let checkDisplay = '';
        switch (field) {
            case 'userId':
                value = userId;
                checkUrl = '/checkDuplicateId';
                checkDisplay = document.getElementById('checkId');
                break;
            case 'nickname':
                value = nickname;
                checkUrl = '/checkDuplicateNickname';
                checkDisplay = document.getElementById('checkNickname');
                break;
            case 'email':
                value = email;
                checkUrl = '/checkDuplicateEmail';
                checkDisplay = document.getElementById('checkEmail');
                break;
            default:
                break;
        }
        try {
            const response = await axios.get(checkUrl, { params: { value } });
            const hasDuplicate = response.data.statusCode !== 200;
            document.getElementById(field).style.borderColor = hasDuplicate ? 'red' : 'green';
            checkDisplay.style.display = hasDuplicate ? 'block' : 'none';
            return hasDuplicate;
        } catch (error) {
            console.error(`Error checking duplicate ${field}:`, error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isUserIdDuplicate = await handleDuplicateCheck('userId');
        const isNicknameDuplicate = await handleDuplicateCheck('nickname');
        const isEmailDuplicate = await handleDuplicateCheck('email');

        if (!isUserIdDuplicate && !isNicknameDuplicate && !isEmailDuplicate) {
            let signUpRequest = {
                memberId: userId,
                memberNickname: nickname,
                memberPwd: password,
                memberName: name,
                memberEmail: email,
                memberPhone: phone,
                memberAddress: address +' '+addressDetail,
                memberGender: gender,
                memberBirth: birthdate,
            };

            try {
                const signUpResponse = await axios.post('/signUp', signUpRequest);
                alert('회원가입 성공');
                navigate('/');
            } catch (error) {
                alert('Error submitting signUpRequest: ' + error);
            }
        } else {
            alert('중복된 정보가 있습니다. 모든 필드를 확인해 주세요.');
        }
    };

    const addressHandle = {
        // 버튼 클릭 이벤트
        clickButton: () => {
            setOpenPostcode(current => !current);
        },
        toggleModal: () => {
            setModalOpen(prev => !prev);
        },

        selectAddress: (data) => {
            setAddress(data.address);
            setModalOpen(false);
        },
    }

    return (
        <div className='signUpBox'>
            <p id='signUpTitle'>GroomHim 회원가입</p>
            <form className='signUpForm' onSubmit={handleSubmit}>

                <div className='signUp-item'>
                    <p>아이디</p>
                    <input type="text" placeholder='아이디 입력' className='signUp-input' id='userId' value={userId} onChange={(e) => setUserId(e.target.value)} onBlur={() => handleDuplicateCheck('userId')} />
                </div>
                <p className='font-red' id='checkId'>중복된 아이디 또는 사용 불가능한 아이디입니다.</p>

                <div className='signUp-item'>
                    <p>비밀번호</p>
                    <input type="password" placeholder='비밀번호 입력' className='signUp-input' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='signUp-item'>
                    <p>이름</p>
                    <input type="text" placeholder='이름 입력' className='signUp-input' value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='signUp-item'>
                    <p>닉네임</p>
                    <input type="text" placeholder='닉네임 입력' className='signUp-input' id='nickname' value={nickname} onChange={(e) => setNickname(e.target.value)} onBlur={() => handleDuplicateCheck('nickname')} />
                </div>
                <p className='font-red' id='checkNickname'>중복된 닉네임 또는 사용 불가능한 닉네임입니다.</p>

                <div className='signUp-item'>
                    <p>이메일</p>
                    <input type="email" placeholder='이메일 입력' className='signUp-input' id='email' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => handleDuplicateCheck('email')} />
                </div>
                <p className='font-red' id='checkEmail'>중복된 이메일 또는 사용 불가능한 이메일입니다.</p>

                <div className='signUp-item'>
                    <p>번호</p>
                    <input type="text" placeholder='번호 입력 ( - 없이 번호만 )' className='signUp-input' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className='signUp-item'>
                    <p>주소</p>
                    <input type="text" placeholder='주소' className='signUp-input' value={address} onClick={addressHandle.toggleModal} />
                    {isModalOpen &&
                        <div className="signUp-modal">
                            <div className="signUp-modal-content">
                                <DaumPostcode
                                    onComplete={addressHandle.selectAddress}
                                    autoClose={false}
                                    defaultQuery='판교역로 235'
                                />
                                <button onClick={addressHandle.toggleModal}>닫기</button>
                            </div>
                        </div>
                    }
                </div>
                <div className='signUp-item'>
                    <p>상세주소</p>
                    <input type="text" placeholder='상세주소 (없을시 공백)' className='signUp-input' value={addressDetail} onChange={(e) => setAddressDetail(e.target.value)} />
                </div>

                <div className='signUp-item'>
                    <p>성별</p>
                    <div class="radio-container">
                        <div class="radio-wrapper">
                            <label class="radio-button">
                                <input id="option1" name="radio-group" value={'남자'} type="radio" onChange={(e) => setGender(e.target.value)} />
                                <span class="radio-checkmark"></span>
                                <span class="radio-label">남자</span>
                            </label>
                        </div>
                        <div class="radio-wrapper">
                            <label class="radio-button">
                                <input id="option2" name="radio-group" value={'여자'} type="radio" onChange={(e) => setGender(e.target.value)} />
                                <span class="radio-checkmark"></span>
                                <span class="radio-label">여자</span>
                            </label>
                        </div>
                        <div class="radio-wrapper">
                            <label class="radio-button">
                                <input id="option3" name="radio-group" value={'선택안함'} type="radio" onChange={(e) => setGender(e.target.value)} />
                                <span class="radio-checkmark"></span>
                                <span class="radio-label">선택안함</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className='signUp-item'>
                    <p>생년월일</p>
                    <input type="date" placeholder='아이디' className='signUp-input' value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                </div>
                <button type="submit" className='signUpSubmit'>회원가입</button>
            </form>
        </div>
    );
}
export default SignUp;