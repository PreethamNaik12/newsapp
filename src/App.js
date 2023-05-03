
import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
 

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress})
  }
  render() {

    return (
      <Router>
        <>
            <Navbar />
            <LoadingBar
              color='rgb(42 150 255)'
              progress={this.state.progress}
              height={3}
            />
          <div>

          
              <Routes>
                <Route exact path="/" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="general" pageSize = {6} country='in' category='general' color='info' />} />
                <Route exact path="/sports" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key= "sports" pageSize = {6} country='in' category='sports' color='danger' />} />
                <Route exact path="/business" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="business" pageSize = {6} country='in' category='business' color='success' />} />
                <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="entertainment"  pageSize = {6} country='in' category='entertainment' color='primary' />} />
                <Route exact path="/health" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="health" pageSize = {6} country='in' category='health' color='primary' />} />
                <Route exact path="/science" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="science" pageSize = {6} country='in' category='science' color='info' />} />
                <Route exact path="/sports"  element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="sports" pageSize = {6} country='in' category='sports' color='success' />} />
                <Route exact path="/technology" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key="technology" pageSize = {6} country='in' category='technology' color='danger' />} />
              </Routes>
            

          </div>
        </>
      </Router>
    )
  }
}


