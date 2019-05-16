import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Art from './components/art';
import Work from './components/work';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
      <switch>
      {/*  ---------SIDE BAR AND HOME MODULE-------------------- */}
            <Route exact path='/' render={()=>(
        
            <div className="App" id="colorlib-page">
              <Sidebar activeclass="Home"></Sidebar> 
                  <div id="colorlib-main">
                    <Introduction></Introduction>
                  </div>
            </div>)}/>

          {/*  ---------TBD: SIDE BAR AND WORK MODULE---------------- */}
          <Route exact path='/work' render={()=>(
              <div className="App" id="colorlib-page">
                <Sidebar activeclass="Work"></Sidebar> 
                    <div id="colorlib-main">
                      <Work></Work>
                    </div>
              </div>)}/>



          {/*  ---------SIDE BAR AND ABOUT MODULE-------------------- */}
            <Route exact path='/about' render={()=>(
        
              <div className="App" id="colorlib-page">
                <Sidebar activeclass="About"></Sidebar> 
                    <div id="colorlib-main">
                      <About></About>
                    </div>
              </div>)}/>

          
      
          {/*  ---------TBD: SIDE BAR AND ART MODULE------------------ */}
          <Route exact path='/art' render={()=>(
        
              <div className="App" id="colorlib-page">
                <Sidebar activeclass="Art"></Sidebar> 
                    <div id="colorlib-main">
                      <Art></Art>
                    </div>
              </div>)}/>
          {/*  ---------TBD: SIDE BAR AND BLOG MODULE----------------- */}

          {/*  ---------TBD: SIDE BAR AND CONTACT MODULE-------------- */}
        
        </switch>
      </BrowserRouter>

      
    );
  }
}

export default App;
