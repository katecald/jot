import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Route, NativeRouter, Link } from 'react-router-native';

import Navbar from './components/Navbar.js'
import Welcome from './components/Welcome.js'
import Today from './components/Today.js'
import Notebook from './components/Notebook.js'
import PastJot from './components/PastJot.js'
import Partners from './components/Partners.js'
import PartnerJots from './components/PartnerJots.js'

const App = () => (
  <NativeRouter>
    <View style={styles.appContainer}>
      <Route exact path="/" component={Welcome} />
      <Route path="/today" component={Today} />
      <Route path="/notebook" component={Notebook} />
      <Route path="/pastjot/:key" component={PastJot} />
      <Route path="/partners" component={Partners} />
      <Route path="/partnerjots" component={PartnerJots} />
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
