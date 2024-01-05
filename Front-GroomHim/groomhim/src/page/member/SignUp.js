import React, { useState } from 'react';
import './SignUp.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

function SignUp() {
    let location = useLocation();
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');

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
    
        if (password !== confirmPassword) {
            return alert('비밀번호와 비밀번호 확인이 같지 않습니다.');
        }
    
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
                memberAddress: address,
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
    

    return (
        <div className='signUpBox'>
            <p id='signUpTitle'>회원 가입에 필요한 정보를 입력해 주세요.</p>
            <form className='signUpForm' onSubmit={handleSubmit}>

                <div>
                    <label>아이디</label>
                    <input type="text" id='userId' value={userId} onChange={(e) => setUserId(e.target.value)} onBlur={() => handleDuplicateCheck('userId')}/>
                    <p className='font-red' id='checkId'>중복된 아이디 또는 사용 불가능한 아이디입니다.</p>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>비밀번호 확인</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <div>
                    <label>이름</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>닉네임</label>
                    <input type="text" id='nickname' value={nickname} onChange={(e) => setNickname(e.target.value)} onBlur={() => handleDuplicateCheck('nickname')}/>
                    <p className='font-red' id='checkNickname'>중복된 닉네임 또는 사용 불가능한 닉네임입니다.</p>
                </div>
                <div>
                    <label>이메일</label>
                    <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => handleDuplicateCheck('email')}/>
                    <p className='font-red' id='checkEmail'>중복된 이메일 또는 사용 불가능한 이메일입니다.</p>
                </div>
                <div>
                    <label>핸드폰번호</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div>
                    <label>주소</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div>
                    <label>성별</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">선택</option>
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                    </select>
                </div>

                <div>
                    <label>생년월일</label>
                    <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                </div>

                <button type="submit" className='signUpSubmit'>회원가입</button>
            </form>
        </div>
    );
}
export default SignUp;