import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native'

const Navbar = () => {

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <Link
                    to="/today"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>Today</Text>
                </Link>
                <Link
                    to="/notebook"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>Notebook</Text>
                </Link>
                <Link
                    to="/partners"
                    underlayColor='#f0f4f7'
                    style={styles.navItem} >
                    <Text>Partners</Text>
                </Link>
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