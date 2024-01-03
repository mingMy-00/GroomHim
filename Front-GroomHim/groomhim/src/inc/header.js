import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import '../App.css';

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            id : "",
            password : "",
        }
    }

    
    //visible 이라는 변수 명에 false값을 담은 state 생성.
    _openModal = function() {
        this.setState({
            visible : true
        });
      }
    //모달을 실행
      _closeModal = function() {
        this.setState({
            visible : false
        });
      }
    //모달을 종료

    _changeID = function() {
        const id_v = document.getElementsByName('id')[0].value;
        // state 의 id 와 헷갈릴 수 있어 변수명을 변경했습니다.
        
        this.setState({
           id : id_v
         });
    }

    _changePW = function() {
        const pw_v = document.getElementsByName('password')[0].value;
    
        this.setState({
            password : pw_v
        });
      }


  render() {
    console.log(this.state.id)
    console.log('아이디 : ' + this.state.id + ', 비밀번호 : ' + this.state.password);
    return (
        <div class='header_grid'>
            <div> </div>
            <div className='acenter'>
                <Routes>
                    <Route path='/' />
                </Routes>
                <Link className='link_tit' to='/'> <h3> GroomHim </h3> </Link>
            </div>

            <div className='acenter'> 
            <h5 onClick={() => this._openModal()}> 로그인 </h5>
            <Modal visible={this.state.visible} 
                       width="400" height="360"
                       effect="fadeInDown" 
                       onClickAway={() => this._closeModal()}
                >
                  <div>
                    <h4 className='acenter login_tit'> 로그인 </h4>
                    <form>
                    <div className='login_div'>
                      <div className='login_input_div'>
                        <p> ID </p>
                        <input type='text' name='id' onChange={() => this._changeID()}/>
                      </div>

                      <div className='login_input_div' style={{ 'marginTop' : '40px'}}>
                        <p>  Password </p>
                        <input type='text' name='password' onChange={() => this._changePW()}/>
                      </div>

                      <div className='submit_div'>
                        <div> <input type='button' value='로그인' onClick={() => this.onClickLogin()}/> </div>
                        <div> <input type='button' value='취소' onClick={() => this._closeModal()}/> </div>
                      </div>
                    </div>
                    </form>
                  </div>
                </Modal>
            </div>
        </div>
    );
  }
}

export default header;
