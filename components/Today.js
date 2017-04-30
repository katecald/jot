import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import store from '../store'
import { setJot } from '../reducers/TodayReducer'
import { addToNotebook } from '../reducers/NotebookReducer'
//import styles from './styles'

export default class Today extends Component {
  constructor() {
    super()
    this.state = {
      prompt: 'Describe someone you saw today:',
      text: ''
    }
  }

  componentWillMount() {
    this.setState(store.getState())
  }

  componentWillUnmount() {
    store.dispatch(setJot(this.state))
    store.dispatch(addToNotebook(this.state))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.prompt}>
          Describe someone you saw today:
        </Text>
        <TextInput
          defaultValue={this.state.text}
          onChangeText={(text) => this.setState({ text })}
          style={styles.input}
          multiline={true}
          editable={true}
          autoFocus={true}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20
  },
  prompt: {
    fontSize: 20,
    marginBottom: 15
  },
  input: {
    flex: 5,
    fontSize: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  }
})