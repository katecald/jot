/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Daily from './components/Daily'
import Notebook from './components/Notebook'
import Partners from './components/Partners'

export default class App extends Component {
  render() {
    return (
      <Router>
      <Scene key="root">
        <Scene key="daily" component={Daily} title="Daily Jot"/>
        <Scene key="notebook" component={Notebook} title="Notebook"/>
        <Scene key="partners" component={Partners} title="Partners"/>
      </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('jot', () => jot);
