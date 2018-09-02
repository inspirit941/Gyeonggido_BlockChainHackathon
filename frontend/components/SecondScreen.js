import React from 'react';
import { StyleSheet, 
    Text, 
    View, 
    ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const SecondScreen = () => {
    return (
        <ImageBackground 
            source={require('./img/bus_front.png')}
            imageStyle={{resizeMode: 'stretch'}}
            style={{width: '100%',height: '100%'}}
        >
        <View style={styles.container}>

        </View>

        <Button
              title="카카오톡으로 로그인하기"
              color="#444444"
              rounded={true}
              onPress={Actions.third}
              backgroundColor="#fae100"
              buttonStyle={{marginBottom: 10, marginLeft: 40, marginRight: 40}}
            />
        <Button
              title="페이스북계정으로 로그인"
              color="white"
              rounded={true}
              onPress={Actions.third}
              backgroundColor="#3a68e8"
              buttonStyle={{marginBottom: 60, marginLeft: 40, marginRight: 40}}
        />
        </ImageBackground>
    );
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default SecondScreen;