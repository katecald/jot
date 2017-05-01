import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Link } from 'react-router-native'
import Icon from 'react-native-vector-icons/FontAwesome'
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
                <Text style={styles.name}>{`${item.name}`}</Text>
                <View style={styles.infoBar}>
                  <Text style={styles.info}><Icon name="calendar" size={15} color="#143366" />{` ${item.member}`}</Text>
                  <Text style={styles.info}><Icon name="pencil" size={15} color="#143366" />{` ${item.jots}`}</Text>
                  <Text style={styles.info}><Icon name="user-circle" size={15} color="#143366" />{` ${item.partners}`}</Text>
                </View>
                
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
  name: {
    fontSize: 20,
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
    paddingLeft: 5,
    paddingRight: 5
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
  details: {
    fontSize: 15,
    fontFamily: 'avenir',
    fontWeight: 'bold',
    color: '#143366'

  }
})