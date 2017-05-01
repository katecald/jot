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
                        <Icon name="pencil" size={30} color="#143366" />
                    </Link>
                    <Link to="/today">
                        <Text style={styles.text}>Today</Text>
                    </Link>
                </View>
                <View style={styles.navItem}>
                    <Link to="/notebook">
                        <Icon name="book" size={30} color="#143366" />
                    </Link>
                    <Link to="/notebook">
                        <Text style={styles.text}>Notebook</Text>
                    </Link>
                </View>
                <View style={styles.navItem}>
                    <Link to="/partners">
                        <Icon name="group" size={30} color="#143366" />
                    </Link>
                    <Link to="/partners">
                        <Text style={styles.text}>Partners</Text>
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
    },
    text: {
        fontFamily: 'avenir',
        fontWeight: 'bold',
        color: '#143366'
    }
})

export default Navbar