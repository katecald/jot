import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Link } from 'react-router-native'
import { dummyPartnerList } from '../dummyData'

const Partner = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyPartnerList}
        renderItem={({ item }) => (
          <Link to='/partnerjots'>
            <View key={item.key} style={styles.jot}>
              <Image
                key={item.name}
                source={{ uri: item.picURL }}
                style={styles.pic}
              />
              <View style={styles.textview}>
                <Text style={styles.preview}>{`${item.name}`}</Text>
              </View>
            </View>
          </Link>)}
      />
    </View>
  )
}

export default Partner

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',

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
  textview: {
    flex: 1,
    paddingLeft: 10
  },
  preview: {
    fontSize: 20,

  }
})