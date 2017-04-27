/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Route, NativeRouter, Link } from 'react-router-native';


import Navbar from './components/Navbar.js'
import Welcome from './components/Welcome.js'
import Today from './components/Today.js'
import Notebook from './components/Notebook.js'
import Partners from './components/Partners.js'


const App = () => (
  <NativeRouter>
    <View style={styles.appContainer}>
      <Route exact path="/" component={Welcome} />
      <Route path="/today" component={Today} />
      <Route path="/notebook" component={Notebook} />
      <Route path="/partners" component={Partners} />
      <Navbar />
    </View>
  </NativeRouter>
)

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 25,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})

AppRegistry.registerComponent('jot', () => App);
