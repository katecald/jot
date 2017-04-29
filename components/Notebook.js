import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList } from 'react-native';
import { Link } from 'react-router-native'
import store from '../store'

export default class Notebook extends Component {

  constructor() {
    super()
    this.state = {}
  }

  componentWillMount() {
    this.setState(store.getState())
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.notebook}
          renderItem={({ item }) => (
            <Link to={`/pastjot/${item.key}`}>
            <View key={item.dateStr} style={styles.jot}>
              <View style={styles.dateview}>
                <Text style={styles.date}>{`${item.displayDay}`}</Text>
              </View>
              <View style={styles.textview}>
                <Text style={styles.preview}>{`${item.previewText}`}</Text>
              </View>
            </View>
            </Link>)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',

  },
  jot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20
  },
  dateview: {
    backgroundColor: 'blue',
    borderRadius: 15,
    padding: 10

  },
  date: {
    fontSize: 30,
    color: 'white'
  },
  textview: {
    flex: 1,
    paddingLeft: 10
  },
  preview: {
    fontSize: 20,

  }
})