import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Navbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.navItem}>
                    <Link to="/today">
                        <Icon name="pencil" size={30} color="black" />
                    </Link>
                    <Link to="/today">
                        <Text>Today</Text>
                    </Link>
                </View>
                <View style={styles.navItem}>
                    <Link to="/notebook">
                        <Icon name="book" size={30} color="black" />
                    </Link>
                    <Link to="/notebook">
                        <Text>Notebook</Text>
                    </Link>
                </View>
                <View style={styles.navItem}>
                    <Link to="/partners">
                        <Icon name="group" size={30} color="black" />
                    </Link>
                    <Link to="/partners">
                        <Text>Partners</Text>
                    </Link>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue'
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    }
})

export default Navbar