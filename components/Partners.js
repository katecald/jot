import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Partners extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          PARTNERS
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  welcome: {
    fontSize: 20
  },
  instructions: {
    fontSize: 10
  }
})