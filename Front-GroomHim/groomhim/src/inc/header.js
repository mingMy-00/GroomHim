import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import '../App.css';

const Header = () => {
  const [visible, setVisible]   = useState(false);
  const [id, setId]             = useState("");
  const [password, setPassword] = useState("");

  //모달이 오픈
  const openModal = () => {
    setVisible(true);
  };

  //모달을 close
  const closeModal = () => {
    setVisible(false);
  };

  useEffect(() => {
    console.log("id: " + id);
  }, [id]);

  useEffect(() => {
    console.log("password: " + password);
  }, [password]);

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
    console.log('Login clicked');
  };

  return (
    <div className='header_grid'>
      <div className='acenter'>
        <Routes>
          <Route path='/' />
        </Routes>
        <Link className='link_tit' to='/'> <h3> GroomHim </h3> </Link>
      </div>

      <div className='acenter'>
        <div id="loginEnroll"><h5 onClick={openModal}> 로그인 </h5><h5> 회원가입 </h5></div>

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
                  <input type='text' name='id' id="id" placeholder="아이디" onChange={changeID} />
                </div>

                <div className='login_input_div' style={{ 'marginTop': '40px' }}>
                  <input type='text' name='password' id="password" placeholder="비밀번호" onChange={changePW} />
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
    </div>
  );
};

export default Header;