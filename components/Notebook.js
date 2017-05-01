import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
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
        <View style={styles.profile}>
        <Image
          source={{ uri: 'https://static1.squarespace.com/static/5783ef82cd0f683577fb0900/t/57a0edcfebbd1a6488c687bb/1470164444370/?format=300w' }}
          style={styles.pic}
        />
        <Text style={styles.preview}>Kate Caldwell</Text>
      </View>
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
  profile: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 5
  },
  pic: {
    width: 100,
    height: 100,
    borderRadius: 50
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