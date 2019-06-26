import React, { Component } from 'react';
import Home from './Home/home';
import './App.css';

class App extends Component {

    constructor() {
        this.state = {
            path: ''
        }
    }
  return (
      <Home></Home>
  );
}

export default App;
