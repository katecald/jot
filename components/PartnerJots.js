import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import store from '../store'
import { dummyPartnerFeed } from '../dummyData'

const PartnerJots = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{ uri: 'https://i.ytimg.com/vi/pAmn1QSQBs8/maxresdefault.jpg' }}
          style={styles.pic}
        />
        <Text style={styles.preview}>William Shakespeare</Text>
      </View>
      <FlatList
        data={dummyPartnerFeed}
        renderItem={({ item }) => (
          <View key={item.dateStr} style={styles.jot}>
            <View style={styles.dateview}>
              <Text style={styles.date}>{`${item.displayDay}`}</Text>
            </View>
            <View style={styles.textview}>
              <Text style={styles.preview}>{`${item.previewText}`}</Text>
            </View>
          </View>)}
      />
    </View>
  )
}

export default PartnerJots

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  profile: {
    flexDirection: 'column',
    alignItems: 'center'
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