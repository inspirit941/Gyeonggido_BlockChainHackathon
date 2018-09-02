import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, Image, View, ImageBackground, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, ListItem, Button } from 'react-native-elements'

class Mypetition extends Component {
    constructor(props) {

        super(props);
        this.state = {
          loading: false,
          data: [{
            "$class": "org.petition.prov.petition.Petition",
            "Accepted": false,
            "BusNumber": "1003",
            "BusStopName": "금토천교",
            "Civil": "resource:org.petition.prov.participants.Civil#string333",
            "Content": "지나쳤어요!",
            "PetitionId": "1-string333-Sun Aug 26 2018 14:16:22 GMT+0000 (UTC)",
            "Resolved": false,
            "Time": "2018-08-26T14:16:22.951Z",
            "VehicleId": "9407",
            "location": "성남시 분당구 삼평동",
            "timestamp": "2018-08-26T14:16:22.985Z",
            }],
          page: 1,
          seed: 1,
          error: null,
          refreshing: false,
        }
    }
    
    // componentDidMount() {
    // this.makeRemoteRequest();
    // }

    // makeRemoteRequest = () => {
    //     const { page, seed } = this.state;
    //     const url = `http://192.168.0.26:3000/api/Petition`;
    //     this.setState({ loading: true });
    //     fetch(url)
    //       .then(res => res.json())
    //       .then(res => {
    //         this.setState({
    //           data: res,
    //           error: res.error || null,
    //           loading: false,
    //           refreshing: false
    //         });
    //         console.log(res)
    //       })
    //       .catch(error => {
    //         this.setState({ error, loading: false });
    //       });
    // };
    
    // render () {
    //     return (
    //         <TouchableOpacity onPress={Actions.detail} style={{flex:1}}>
    //         <ImageBackground 
    //         source={require('./img/mypeti.png')}
    //         imageStyle={{resizeMode: 'stretch'}}
    //         style={{flex:1}}
    //         >
    //         </ImageBackground>
    //         </TouchableOpacity>
    //     );}

    render () {
    return (
        <ImageBackground 
        // source={require('./img/mycomplain.jpeg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={{flex:1}}
        >
        <View style={styles.container}>
            <View style={styles.topbox}>
            <Text style={styles.title}>진행 중인 민원</Text> 
            <FlatList
                data={this.state.data}
                horizontal
                renderItem={({item}) => 
                <Card 
                title="무정차"
                titleStyle={{textAlign: "left", color: "#2e519e", marginBottom: 7}}
                containerStyle={{borderRadius:7, width: 290, paddingTop: 10, height: 210, marginTop: 5, marginLeft: 30}}
                dividerStyle={{width: "100%", width: 290, marginLeft: -15}}
                >
                <View style={{flex: 1, marginTop: 50, alignItems: 'center', justifyContent: 'center',}}>
                {console.log(item)}
                {console.log('!!!!!')}
                {(() => {
                    if (item.Accepted && item.Resolved) {
                        return <Image source={require('./img/progress/3.png')} style={{width: 240, height: 80,  resizeMode:'contain'}} />
                    } else if (item.Accepted) {
                        return <Image source={require('./img/progress/2.png')} style={{width: 240, height: 80,  resizeMode:'contain'}} />
                    } else {
                        return <Image source={require('./img/progress/1.png')} style={{width: 240, height: 80,  resizeMode:'contain'}} />
                    }
                })()}
                </View>
                <Button
                    backgroundColor='#444411'
                    buttonStyle={{borderRadius: 100, marginTop: 60, marginHorizontal: 20,
                    padding: 8}}
                    fontSize= '12'
                    onPress={Actions.detail}
                    title='자세히 보기' />
                </Card> 
            }
            keyExtractor={(item, index) => index.toString()}
            />
            </View>
            <View style={styles.bottombox}>
            <Text style={styles.title}>완료된 민원</Text>
            <Card 
                title='무정차' 
                titleStyle={{textAlign: "left", color: "#2e519e", marginBottom: 7}}
                containerStyle={{borderRadius:7, width: 290, paddingTop: 10, height: 210, marginTop: 5, marginLeft: 30}}
                dividerStyle={{width: "100%", width: 290, marginLeft: -15}}
                >
                <View style={{flex: 1, marginTop: 50, alignItems: 'center', justifyContent: 'center',}}>
                    <Image source={require('./img/progress/3.png')} style={{width: 240, height: 80,  resizeMode:'contain'}} />
                </View>
            <Button
                backgroundColor='#444411'
                buttonStyle={{borderRadius: 100, marginTop: 60, marginHorizontal: 20,
                padding: 8}}
                fontSize= '12'
                onPress={Actions.detail}
                title='자세히 보기' />
            </Card>   
     
            </View>
        </View>
        </ImageBackground>
    );}
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
      backgroundColor: '#ecf3f9',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   flexDirection: 'column',
    },
    topbox: {
        flex: 2,
        // backgroundColor:'white',
        // alignItems: 'center',
        // justifyContent: 'flex-end',
    },
    bottombox: {
        flex: 2,
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
    },
    title: {
        marginTop: 10,
        color: "#2e519e",
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 40,
        marginLeft: 30,    
        
    }
  });

export default Mypetition;