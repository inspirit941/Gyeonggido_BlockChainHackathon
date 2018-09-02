import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, Image, View, ImageBackground, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, ListItem, Button } from 'react-native-elements'


class Detail extends Component {

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
    componentWillMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const url = 'http://localhost:3000/api/Petition/1-string333-1535506494000';
        this.setState({ loading: true });
        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: res,
              error: res.error || null,
              accepted: res.Accepted,
              resolved: res.Resolved,
              loading: false,
              refreshing: false
            });
            console.log('##### Composer REST API Server #####');
            console.log('request: http://192.168.0.26:3000/api/Petition');
            console.log(res);
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
    };


    render () {
    return (
        <ImageBackground 
        source={require('./img/cc/complain1.png')}
        imageStyle={{resizeMode: 'stretch'}}
        style={{flex:1}}
        >
        <View style={styles.container}>
            <Card 
                title='무정차' 
                titleStyle={{textAlign: "left", fontSize: 22, color: "#2e519e", paddingLeft: 30 ,marginBottom: 7}}
                containerStyle={{borderRadius:35, margin: 0, marginTop: 20, paddingTop: 25, height: 800 }}
                dividerStyle={{width: 400, marginLeft: -15}}
                >
                
                <TouchableOpacity onPress={Actions.detail1}>
                <View style={{flex: 1, marginTop: 130, alignItems: 'center', justifyContent: 'center',}}>
                    {(() => {
                        if (this.state.accepted && this.state.resolved) {
                            return <Image source={require('./img/progress/3.png')} style={{width: 300, height: 100,  resizeMode:'contain'}} />
                        } else if (this.state.accepted) {
                            return <Image source={require('./img/progress/2.png')} style={{width: 300, height: 100,  resizeMode:'contain'}} />
                        } else {
                            return <Image source={require('./img/progress/1.png')} style={{width: 300, height: 100,  resizeMode:'contain'}} />
                        }
                        
                    })()}
                    <Image source={require('./img/arrow.png')} style={{width: 370, height: 80,  resizeMode:'contain'}} />
                </View></TouchableOpacity>
                <View  style={{width: 370, height: 130, marginTop: 60, marginLeft: -15, paddingHorizontal: 50}}>
                        <View style={styles.form_property}>
                            <Text style={styles.form_label}>발생 날짜</Text>
                            <Text style={styles.form_empty}></Text>
                            <Text style={styles.form_output}>{this.state.data.Time}</Text>
                        </View>
                        <View style={styles.form_property}>
                            <Text style={styles.form_label}>위치</Text>
                            <Text style={styles.form_empty}></Text>
                            <Text style={styles.form_output}>{this.state.data.location}</Text>
                        </View>
                        <View style={styles.form_property}>
                            <Text style={styles.form_label}>버스 정류장</Text>
                            <Text style={styles.form_empty}></Text>
                            <Text style={styles.form_output}>{this.state.data.BusStopName}</Text>
                        </View>
                        <View style={styles.form_property_last}>
                            <Text style={styles.form_label}>차량 번호</Text>
                            <Text style={styles.form_empty}></Text>
                            <Text style={styles.form_output}>{this.state.data.VehicleId}</Text>
                        </View>
                </View>
                <View  style={{width: 320, height: 130, marginTop: 10, marginLeft: -15, paddingHorizontal: 50}}>
                        <Text style={styles.form_empty}>{this.state.data.Content}</Text>
                </View>
            </Card> 
        </View>
        </ImageBackground>
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

module.exports = Detail;