import React, { useState } from 'react';
import './SignUp.css';
import { useLocation } from 'react-router-dom';
import axios from "axios";

function SignUp() {
    let location = useLocation();
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
    const [duplicateErrorMsg, setDuplicateErrorMsg] = useState('');

    const handleDuplicateCheck = async (field) => {
        let value = '';
        let checkUrl = '';
    
        switch (field) {
            case 'userId':
                value = userId;
                checkUrl = '/checkDuplicateId'; 
                break;
            case 'nickname':
                value = nickname;
                checkUrl = '/checkDuplicateNickname'; 
                break;
            case 'email':
                value = email;
                checkUrl = '/checkDuplicateEmail'; 
                break;
            default:
                break;
        }
        try {
            const response = await axios.get(checkUrl, { params: { value } });
            console.log(response);
            if (response.data.statusCode != 200) {
                document.getElementById(field).style.borderColor = 'red';
                setDuplicateErrorMsg(`Duplicate ${field}. Please choose a unique ${field}.`);
            } else {
                document.getElementById(field).style.borderColor = 'green';
                setDuplicateErrorMsg('');
            }
        } catch (error) {
            console.error(`Error checking duplicate ${field}:`, error);
        }
    };

    const handleSubmit = async (e) => {
        if(password !== confirmPassword){
            return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
        }

        await handleDuplicateCheck('userId');
        await handleDuplicateCheck('nickname');
        await handleDuplicateCheck('email');

        let signUpRequest = {
            memberId : userId,
            memberNickname : nickname,
            memberPwd : password,
            memberName : name,
            memberEmail : email,
            memberPhone : phone,
            memberAddress : address,
            memberGender : gender,
            memberBirth : birthdate
        }

        try {
            const signUpResponse = await axios.post('/signUp', signUpRequest);
            alert(signUpResponse.data);
            console.log('회원가입 정보 제출');
        } catch (error) {
            console.error('Error submitting signUpRequest:', error);
        }
    };

    return (
        <div className='signUpBox'>
            <p id='signUpTitle'>회원 가입에 필요한 정보를 입력해 주세요.</p>
            <form className='signUpForm' onSubmit={handleSubmit}>

                <div>
                    <label>아이디</label>
                    <input type="text" id='userId' value={userId} onChange={(e) => setUserId(e.target.value)} onBlur={() => handleDuplicateCheck('userId')}/>
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
                </div>

                <div>
                    <label>이메일</label>
                    <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => handleDuplicateCheck('email')}/>
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

                {duplicateErrorMsg && <p style={{ color: 'red', fontSize: '12px' }}>{duplicateErrorMsg}</p>}
                <button type="submit" className='signUpSubmit'>회원가입</button>
            </form>
        </div>
    );
}

export default SignUp;