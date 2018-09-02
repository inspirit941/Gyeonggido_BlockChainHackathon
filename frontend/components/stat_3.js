import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

const Stat3 = () => {
    return (
        <ImageBackground 
        source={require('./img/stat3.png')}
        imageStyle={{resizeMode: 'stretch'}}
        style={{flex:1}}
        >

        </ImageBackground>
    );
} 

export default Stat3;