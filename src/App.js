import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game2048 from "./Game2048"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p style={styles.prodName}>© Copyright by Vitalii Parshin</p>
          <img src={logo} className="App-logo" alt="logo" />
          <Game2048 />
          <p style={styles.title}>Game 2048 for Real-men</p>
        </header>
      </div>
    );
  }
}

const styles = {
  title: {
    fontFamily: 'Chalkduster',
    fontSize: 39,
    marginBottom: 20
  },
  prodName: {
    fontFamily: 'Chalkduster',
    fontSize: 14,
    marginBottom: 20
  }
};

export default App;
