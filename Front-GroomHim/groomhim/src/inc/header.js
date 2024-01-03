import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../App.css';
class header extends Component {

  render() {

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
                <h5> 로그인 </h5>
            </div>
        </div>
    );
  }
}

export default header;
