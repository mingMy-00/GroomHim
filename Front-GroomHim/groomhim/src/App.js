import React, { Component } from 'react';
import './App.css';
import { Head } from './inc'
import Home from './home/Home';

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
        <Home/>
    </div>
    )
  }

}

export default App;
