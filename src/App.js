import React, { Component } from 'react';
import './App.css';

import Sidebar from './components/sidebar';
import Introduction from './components/introduction';

class App extends Component {
  render() {
    return (
      <div className="App" id="colorlib-page">
        
        <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Introduction></Introduction>
        </div>
      </div>
    );
    }
}

export default App;
