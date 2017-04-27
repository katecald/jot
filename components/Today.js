import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
//import styles from './styles'

const Today = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>
        Here is where an example of the prompt of the day goes:
      </Text>
      <TextInput 
        style={styles.input} 
        multiline={true}
        editable={true}
        autoFocus={true}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20
  },
  prompt: {
    fontSize: 20,
    marginBottom: 10
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

export default Today