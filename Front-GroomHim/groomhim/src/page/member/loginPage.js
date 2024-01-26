import axios from "axios";
import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from 'react';

function LoginPage() {

  const [id, setId]                        = useState("");
  const [password, setPassword]            = useState("");
  const [isRemember, setIsRemember]        = useState(false);
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

    return(
        <div>
              <div>
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
                                    <div id="login"> <input type='button' id="loginButton" value='로그인' onClick={onClickLogin} /> </div>
                                </div>
                            </div>
                        </form>

                        <div className='search_user_info_div'>
                            <div> <b style={{ 'marginLeft' : '15px' }}> 아이디 찾기 </b> </div>
                            <div> <b> 비밀번호 찾기 </b> </div>
                        </div>
                    </div>
            </div>
    );
}
export default LoginPage;