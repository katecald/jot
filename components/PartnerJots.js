import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Link } from 'react-router-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { dummyPartnerFeed } from '../dummyData'

const PartnerJots = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{ uri: 'https://i.ytimg.com/vi/pAmn1QSQBs8/maxresdefault.jpg' }}
          style={styles.pic}
        />
        <Text style={styles.name}>William Shakespeare</Text>
        <View style={styles.infoBar}>
          <Text style={styles.info}><Icon name="calendar" size={15} color="#143366" /> 152,967</Text>
          <Text style={styles.info}><Icon name="pencil" size={15} color="#143366" /> 152,967</Text>
          <Text style={styles.info}><Icon name="user-circle" size={15} color="#143366" /> 389</Text>
        </View>
      </View>
      <FlatList
        data={dummyPartnerFeed}
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
  name: {
    fontSize: 25,
    fontFamily: 'avenir',
    fontWeight: 'bold',
  },
  infoBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    fontFamily: 'avenir',
    color: '#143366',
    fontWeight: '900',
    paddingLeft: 10,
    paddingRight: 10
  },
  jot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20
  },
  dateview: {
    backgroundColor: '#143366',
    borderRadius: 15,
    padding: 10,
    width: 100,
    alignItems: 'center'
  },
  date: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'avenir',
    fontWeight: 'bold'
  },
  textview: {
    flex: 1,
    paddingLeft: 10
  },
  preview: {
    fontSize: 20,
    fontFamily: 'avenir'

  }
})