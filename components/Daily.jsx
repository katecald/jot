import { Scene, Router } from 'react-native-router-flux';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Daily extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          DAILY
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