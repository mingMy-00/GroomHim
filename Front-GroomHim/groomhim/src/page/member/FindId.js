import './FindId.css';
import { useState } from 'react';
import axios from 'axios';

function FindId() {
    //이메일 정규 분포식
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);

    const changeEmail = () => {
        const newEmail = document.getElementById('findIdInput').value;
        setEmail(newEmail);

        //이메일인지 유효성 검사하기
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(newEmail));
    }

    const SendIdenti = () => {

        axios({
            url: process.env.REACT_APP_BACKEND_IP + "/findId",
            method: "post",
            data: { memberEmail: email }
        }).then(function (response) {

            const input = document.getElementById('findIdInput');

            console.log(response);
            if (response.data == "없음") {
                alert("가입한 적이 없는 회원 입니다. 회원 가입을 진행해주세요.");
                input.value = "";
                input.focus();

            } else if(response.data == "카카오") {
                alert("카카오 로그인 회원입니다. 카카오 로그인을 이용해주세요");
            } else {
                alert("회원 님의 ID를 입력하신 이메일로 전송했습니다.");
                const showElements = document.getElementsByClassName('show');
                input.value = "";
                // // HTMLCollection을 배열로 변환해서 forEach를 사용할 수 있도록 함.
                // Array.from(showElements).forEach(element => {
                //     element.style.display = 'block';
                // });

                //  // 확인 버튼에 대한 스타일 변경
                // const confirmButton = document.getElementById('identiOk');
                // confirmButton.style.display = 'inline-block';

            }
        }).catch(function () {
            console.log("로그인 응답 실패.,,.");
        });

    }

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const okButton = document.getElementById('identiOk');

        if (inputValue.length >= 1) {

            okButton.disabled = false;
            okButton.style.backgroundColor = 'gray';
            okButton.classList.add('hoverEffect');

        } else {
            okButton.disabled = true;
            okButton.style.backgroundColor = 'lightgray';
            okButton.classList.remove('hoverEffect');
        }
    }

    return (
        <>
            <div class="findIdDiv">
                <div className='findIdHeader'>
                    <p>아이디 찾기</p>
                </div>
                <div className='displayFlex' style={{marginRight : '5%'}}>
                    <div className='info-item' style={{width : '75%'}}>
                        <label>가입한 이메일 입력</label>
                        <input type="email" id="findIdInput" onChange={changeEmail} value={email}/>
                    </div>
                    <div className='displayFlex' style={{width : '25%', textAlign : 'center', alignItems : 'center'}}>
                        <button
                            id="EmailNum"
                            disabled={!isEmailValid}
                            onClick={SendIdenti}
                            style={{
                                backgroundColor: isEmailValid ? 'black' : 'lightgray',
                            }}
                        >
                            인증번호
                        </button>
                    </div>

                </div>

                {/* <input type="email"
                    id="findIdInput"
                    placeholder="가입한 이메일 입력"
                    onChange={changeEmail}
                    value={email}
                />
                <button
                    id="EmailNum"
                    disabled={!isEmailValid}
                    onClick={SendIdenti}
                    style={{
                        backgroundColor: isEmailValid ? 'black' : 'lightgray',
                    }}
                >
                    인증번호
                </button> */}

                <input type="text" class="show" id="identiEmail" placeholder="인증번호 입력" onChange={handleInput} ></input>
                <div class="show" id="leftTime">남은 시간 3:30초</div>
                <div class="identiButton show"><button id="identiOk" disabled >확인</button></div>
            </div>
        </>
    )
}
export default FindId;