import React, { Component } from 'react';
import './App.css';
import { Head } from './inc'
import Home from './home/Home';
import SkinTest from './skinTest/SkinTest';
import { Route,Routes } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
    <div>
        <Head />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skinTest' element={<SkinTest />}/>
          </Routes>
    </div>
    )
  }

}

export default App;
