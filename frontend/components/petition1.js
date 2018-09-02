import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, Image, View, ImageBackground, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, ListItem, Button } from 'react-native-elements'


class Detail1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          accepted: false,
          resolved: false,
          data: {},
          error: null,
          refreshing: false,
        }
    }
    // componentWillMount() {
    //     this.makeRemoteRequest();
    // }

    // makeRemoteRequest = () => {
    //     const url = 'http://localhost:3000/api/Petition/1-string333-Sun%20Aug%2026%202018%2014%3A16%3A22%20GMT%2B0000%20(UTC)';
    //     this.setState({ loading: true });
    //     fetch(url)
    //       .then(res => res.json())
    //       .then(res => {
    //         this.setState({
    //           data: res,
    //           error: res.error || null,
    //           accepted: res.Accepted,
    //           resolved: res.Resolved,
    //           loading: false,
    //           refreshing: false
    //         });
    //         console.log('##### Composer REST API Server #####');
    //         console.log('request: http://192.168.0.26:3000/api/Petition');
    //         console.log(res);
    //       })
    //       .catch(error => {
    //         this.setState({ error, loading: false });
    //       });
    // };


    render () {
    return (
        <TouchableOpacity onPress={Actions.detail2} style={{flex:1}}>
        <ImageBackground 
        source={require('./img/cc/complain2.png')}
        imageStyle={{resizeMode: 'stretch'}}
        style={{flex:1}}
        >
        </ImageBackground>
        </TouchableOpacity>
    );}
} 

const styles = StyleSheet.create({
    form_property: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    form_property_last: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingBottom: 10,
        borderStyle: 'solid',
        borderBottomWidth: 0.5,
        borderBottomColor: '#444444'
    }, 
    form_label: {
        flex: 2,
        fontSize: 12,
        color: '#2e519e'
    },  
    form_empty: {
        flex: 1
    },
    form_output: {
        flex: 4,
        color: 'black'
    },
    form_text_input: {
        borderRadius:100,
        borderColor: 'transparent',
        height: 35,
        flex: 6,
        borderWidth: 1,
        textAlign:  'center',
        backgroundColor: 'white',
    },
    container: {
      flex: 1,
      marginTop: 60,
    //   marginHorizontal: 12
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
        justifyContent: 'flex-end',
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

module.exports = Detail1;