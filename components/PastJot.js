import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from 'react-router-native'
import { withRouter } from 'react-router-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { dummyPartnerFeed } from '../dummyData'
import store from '../store'

//import styles from './styles'

const PastJot = withRouter((props) => {
  const key = props.match.params.key;
  const backButtonRoute = props.history.entries[props.history.length - 2].pathname
  const state = store.getState()
  const currentJot = state.notebook.concat(dummyPartnerFeed).filter(jot => jot.key === key)[0]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link to={`${backButtonRoute}`}><Icon name="chevron-left" size={30} color="#143366" /></Link>
        <Text style={styles.prompt}>{`   ${currentJot.prompt}`}</Text>
      </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  prompt: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
    fontFamily: 'avenir'
  },
  input: {
    flex: 5,
    fontSize: 20,
    fontFamily: 'avenir',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  }
})