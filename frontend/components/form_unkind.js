import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const Unkind = () => {
    return (
        <ImageBackground 
        source={require('./img/unkind.jpeg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={{flex:1}}
        >
        <View style={styles.container}>
        </View>
        </ImageBackground>
    );
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#ecf3f9',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    },
    topbox: {
        flex: 2,
        // backgroundColor:'white',
        // alignItems: 'center',
        // justifyContent: 'flex-end',
    },
    bottombox: {
        flex: 3,
        borderColor:'blue',
        // backgroundColor: 'blue',
    },
    homebutton: {
        marginTop: 25, 
        marginLeft: 15, 
        marginRight: 15,
        paddingTop: 35,

        // paddingLeft: 40,
        // paddingRight: 40,
        paddingBottom: 35,
    },
    header: {
        marginLeft: 30, 
        marginTop: 120,
    },
    headingletter: {
        color: "#2e519e",
        fontWeight: "600",
        fontSize: 30,
        lineHeight: 40,
    }
  });

export default Unkind;