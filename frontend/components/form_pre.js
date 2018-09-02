import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


class PetButton extends Component {
    render() {
        return <Button
        title={this.props.title}
        color="#2e519e"
        textStyle={{fontWeight: 'bold'}}
        rounded={true}
        onPress={this.props.heading}
        backgroundColor="white"
        buttonStyle={styles.petbutton}
    />
    }
}

const Petition = () => {
    return (
        <ImageBackground 
        // source={require('./img/petition.jpeg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={{flex:1}}
        >
        <View style={styles.container}>
            <View style={styles.topbox}>
                    <View style={styles.header}>  
                        <Text style={styles.headingletter}>
                        민원의 종류를 {"\n"}
                        선택해주세요. {"\n"}
                        </Text>
                    </View>
                </View>
                <View style={styles.bottombox}>
                    <PetButton title={"무정차"} heading={Actions.unstop}/>
                    <PetButton title={"불친절/난폭운전"} heading={Actions.unkind}/>
                    <PetButton title={"배차간격"} heading={Actions.interval}/>
                    <PetButton title={"과다요금"} heading={Actions.overpay}/>
            </View>
        </View>
        </ImageBackground>
    );
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf3f9',
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
    petbutton: {
        marginTop: 20, 
        marginLeft: 15, 
        marginRight: 15,
        paddingTop: 25,
        paddingBottom: 25,
        // paddingLeft: 40,
        // paddingRight: 40,

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

export default Petition;