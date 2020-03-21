import React, {Component} from 'react';
import './Home.scss';
import {NavigationBar} from '../navbar/NavigationBar';

class Home extends Component {
  render() {
    return (
      <div className="homepage">  
        <NavigationBar />
        <div className="overlay">
          <div className="home-text">
            <h1>Dylan Hua</h1>
            <h2>Full Stack Developer and Cloud Software Developer</h2>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
