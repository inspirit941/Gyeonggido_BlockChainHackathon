import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Star3 = () => {
    return (
        <TouchableOpacity onPress={Actions.third} style={{flex:1}}>
            <ImageBackground 
            source={require('./img/comple.png')}
            imageStyle={{resizeMode: 'contain'}}
            style={{flex:1}}
            >
            </ImageBackground>
        </TouchableOpacity>
    );
} 

export default Star3;