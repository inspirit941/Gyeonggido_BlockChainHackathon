import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, ImageBackground, DatePickerIOS,  TextInput} from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker';


function createPetition(params) {
    var dateObject = Date(params.date);
    console.log(typeof params.date);
    console.log(dateObject);

    return fetch('http://localhost:3000/api/NonstopCreate', {
    method: 'POST',
    headers: { 
    'Content-Type': 'application/json' },
    body: JSON.stringify({"$class": "org.petition.prov.petition.NonstopCreate",
    "CivilId": "string333",
    "location": params.location,
    "BusStopName": params.busstop,
    "BusNumber": params.busnum,
    "VehicleId": params.carnum,
    "Time": Date.now(),
    "Type": "무정차",
    "Content": params.pText}),
    }).then((response) => response.json())
    .then((responseJson) => {
      return console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
    
}

class Unstop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            location: '',
            busstop: '',
            busnum: '',
            carnum: '',
            pText: '', 
        }
    }


    showAlert = () => {
        Alert.alert(
            '주의(Alert)',
            '민원은 제출 이후엔 다시 수정이 불가합니다. 정말 민원을 제출하시겠습니까?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => createPetition(this.state).then(Actions.third)},
            ],
            { cancelable: true }
        )
     }
    render () {
    return (
        <ImageBackground 
        // source={require('./img/unstop.jpeg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={{flex:1}}
        >
        <View style={styles.container}>
            <View style={{flex:1, backgroundColor: "#ecf3f9"}}>

            </View>
            <View style={{flex:3, backgroundColor: "#ecf3f9", paddingHorizontal: 30}}>
                <View style={styles.form_property}>
                    <Text style={styles.form_label}>발생 날짜 및 시간</Text>
                    <Text style={styles.form_empty}></Text>
                    <DatePicker
                    style={styles.form_input}
                    date={this.state.date}
                    mode="datetime"
                    placeholder="발생 시간을 입력해주세요"
                    format="YYYY-MM-DD HH:mm:ss"
                    confirmBtnText="확인"
                    cancelBtnText="취소"
                    showIcon={false}
                    customStyles={{
                        // dateIcon: {
                        //     position: 'absolute',
                        //     left: 0,
                        //     top: 4,
                        //     marginLeft: 0
                        // },
                        dateInput: {
                            backgroundColor: "#ffffff",
                            borderRadius:100,
                            borderColor: 'transparent'
                        }
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                </View>
                <View style={styles.form_property}>
                    <Text style={styles.form_label}>발생 위치</Text>
                    <Text style={styles.form_empty}></Text>
                    <TextInput 
                        style={styles.form_text_input}
                        onChangeText={(location) => this.setState({location})}
                        value={this.state.location}
                    />
                </View>
                <View style={styles.form_property}>
                    <Text style={styles.form_label}>버스 정류장</Text>
                    <Text style={styles.form_empty}></Text>
                    <TextInput 
                        style={styles.form_text_input}
                        onChangeText={(busstop) => this.setState({busstop})}
                        value={this.state.busstop}
                        keyboardAppearance='light'
                    />
                </View>
                <View style={styles.form_property}>
                    <Text style={styles.form_label}>버스 번호</Text>
                    <Text style={styles.form_empty}></Text>
                    <TextInput 
                        style={styles.form_text_input}
                        onChangeText={(busnum) => this.setState({busnum})}
                        value={this.state.busnum}
                    />
                </View>
                <View style={styles.form_property}>
                    <Text style={styles.form_label}>차량 번호</Text>
                    <Text style={styles.form_empty}></Text>
                    <TextInput 
                        style={styles.form_text_input}
                        onChangeText={(carnum) => this.setState({carnum})}
                        value={this.state.carnum}
                    />
                </View>
            </View>
            <View style={{flex:4, backgroundColor: "white", paddingHorizontal: 40, paddingTop: 30}}>
                <TextInput 
                    style={{
                        color: "black",
                        textAlign: 'justify'
                    }}
                    placeholder='위 항목을 기입하고 민원 내용을 작성해주세요.'
                    placeholderTextColor = '#444444'
                    multiline={true}
                    onChangeText={(pText) => this.setState({pText})}
                    value={this.state.pText}
                />
            </View>
            <Button
                title="민원 제출하기"
                color="white"
                rounded={true}
                onPress={this.showAlert}
                backgroundColor="#3a68e8"
                buttonStyle={{
                    position: 'absolute',                                          
                    bottom: 50,
                    paddingHorizontal: 75,
                    alignSelf: 'center',
                }}
            />
        </View>
        </ImageBackground>
    );}
} 

const styles = StyleSheet.create({
    form_label: {
        flex: 2,
        fontSize: 15,
        color: '#2e519e'
    },
    form_property: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },    
    form_empty: {
        flex: 1
    },
    form_input: {
        flex: 6,
        
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

module.exports = Unstop;