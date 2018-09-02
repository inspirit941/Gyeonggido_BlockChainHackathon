import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Star2 = () => {
    return (
        <TouchableOpacity onPress={Actions.star3} style={{flex:1}}>
            <ImageBackground 
            source={require('./img/star2.png')}
            imageStyle={{resizeMode: 'contain'}}
            style={{flex:1}}
            >
            </ImageBackground>
        </TouchableOpacity>
    );
} 

export default Star2;