import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Stat1 = () => {
    return (
        <TouchableOpacity onPress={Actions.stat2} style={{flex:1}}>
            <ImageBackground 
            source={require('./img/stat1.png')}
            imageStyle={{resizeMode: 'stretch'}}
            style={{flex:1}}
            >
            </ImageBackground>
        </TouchableOpacity>
    );
} 

export default Stat1;