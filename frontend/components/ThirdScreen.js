import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground} from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class HomeButton extends Component {
    render() {
        return <Button
        title={this.props.title}
        color="transparent"
        rounded={true}
        onPress={this.props.heading}
        backgroundColor="transparent"
        buttonStyle={styles.homebutton}
    ><ImageBackground source={require('./img/button1.png')} 
    style={{width: 400, height: 400}}/>
    </Button>
    }
}

const ThirdScreen = () => {
    return (
        <ImageBackground 
        source={require('./img/main.png')}
        imageStyle={{resizeMode: 'stretch'}}
        style={{flex:1}}
        >
        <View style={styles.container}>
            <View style={styles.topbox}>
                <View style={styles.header}>  
                    <Text style={styles.headingletter}>

                    </Text>
                </View>
            </View>
            <View style={styles.bottombox}>
                <HomeButton title={"민원 넣기"} heading={Actions.petition}/>
                <HomeButton title={"내 민원 확인하기"} heading={Actions.mypetition}/>
                <HomeButton title={"민원 통계 보기"} heading={Actions.stat1}/>
            </View>
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

export default ThirdScreen;