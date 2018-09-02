import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Stat2 = () => {
    return (
        <TouchableOpacity onPress={Actions.stat3} style={{flex:1}}>
            <ImageBackground 
            source={require('./img/stat2.png')}
            imageStyle={{resizeMode: 'contain'}}
            style={{flex:1}}
            >
            </ImageBackground>
        </TouchableOpacity>
    );
} 

export default Stat2;