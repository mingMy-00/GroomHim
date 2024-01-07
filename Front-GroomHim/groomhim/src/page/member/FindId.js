import './FindId.css';
import { useState } from 'react';
function FindId() {
     //이메일 정규 분포식
    const [email, setEmail] = useState("");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const changeEmail = () => {
        const changeEmail = document.getElementById('findIdInput').value;
        setEmail(changeEmail);

        if(emailRegex.test(email)) {
            const emailNumButton = document.getElementById('EmailNum');
            if (emailNumButton) {
                emailNumButton.disabled = false;
            }
        }
    }

    

    return (
   

        <>
            <div class="findIdDiv">
                <input type="email" id="findIdInput" placeholder="가입한 이메일 입력" onChange={changeEmail}></input> <button id="EmailNum" disabled>인증번호</button> <br></br>
                <input type="text" id="identiEmail" placeholder="인증번호 입력" ></input>
                <div id="leftTime">남은 시간 3:30초</div>
                <div class="identiButton"><button>확인</button></div>
            </div>
        </>
    )
}
export default FindId;