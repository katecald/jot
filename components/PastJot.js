import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { withRouter } from 'react-router-native'
import store from '../store'

//import styles from './styles'

const PastJot = withRouter((props) => {
    const key = props.match.params.key;
    const state = store.getState()
    const currentJot = state.notebook.filter(jot => jot.key===key)[0]
    
    return (
      <View style={styles.container}>
        <Text style={styles.prompt}>
         {`${currentJot.prompt}`}
      </Text>
        <TextInput
          defaultValue={currentJot.fullText}
          style={styles.input}
          multiline={true}
          editable={false}
          autoFocus={true}
        />
      </View>
    )
})

export default PastJot

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