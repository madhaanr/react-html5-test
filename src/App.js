import React, { Component } from 'react';

import ParticipantList from './ParticipantList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Nord Software</h2>
        </div>
        <div className="App-list-body">
          <div className="App-list-body-title">
            <h2>
              List of Participants
            </h2>
          </div>
          <div className="App-list">
            <ParticipantList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
