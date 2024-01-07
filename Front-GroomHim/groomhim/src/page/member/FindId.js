import './FindId.css';

function FindId() {
    return (

        <>
            <div class="findIdDiv">
                <input type="text" id="findIdInput" placeholder="가입한 이메일 입력"></input> <button id="EmailNum" disabled>인증번호</button> <br></br>
                <input type="text" id="identiEmail" placeholder="인증번호 입력"></input>
                <div id="leftTime">남은 시간 3:30초</div>
                <div class="identiButton"><button>확인</button></div>
            </div>
        </>
    )
}
export default FindId;