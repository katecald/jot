import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import store from '../store'

export default class Notebook extends Component {
  
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    this.setState(store.getState())
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.today}
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