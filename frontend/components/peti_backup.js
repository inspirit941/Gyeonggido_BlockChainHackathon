
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