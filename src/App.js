import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game2048 from './Game2048';
import { ScrollView, Text, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

class App extends Component {
  render() {
    console.log('height', height);
    return (
      <ScrollView
        scrollEnabled={false}
        style={{
          backgroundColor: '#282c34',
          height: height
        }}
        contentContainerStyle={{
          justifyContent: 'space-between',
          alignItems: 'center',
          height: height
        }}
      >
        <Text style={styles.prodName}>© Copyright by Vitalii Parshin</Text>
        <img src={logo} className="App-logo" alt="logo" />
        <Game2048 />
        <Text style={styles.title}>Game 2048 for Real-men</Text>
      </ScrollView>
    );
  }
}

const styles = {
  title: {
    fontFamily: 'Chalkduster',
    fontSize: 25,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
    textAlign: 'center'
  },
  prodName: {
    fontFamily: 'Chalkduster',
    fontSize: 14,
    marginTop: 20,
    color: 'white'
  }
};

export default App;
