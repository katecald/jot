import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'react-router-native'


const Welcome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>
                    Today's jot is now available
                </Text>
            </View>
            <View style={styles.startContainer}>
                <Link to='/today'>
                    <Text style={styles.start}>
                        start jotting!
                    </Text>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    welcomeContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10
    },
    startContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    start: {
        backgroundColor: 'steelblue',
        fontSize: 20,
        padding: 20
    }
})

export default Welcome