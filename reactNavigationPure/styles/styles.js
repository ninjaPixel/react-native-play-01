import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue',
    },
    homeContainer: {
        flex: 1,
        paddingTop:20,
        backgroundColor: 'skyblue',
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    text: {
        padding: 10
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    button: {
        width: 150,
        // backgroundColor: 'white',
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 22
    },
    buttonText: {
        // width: 100,
        fontWeight: '500',
        color: '#333'
    }
});

export default styles;
