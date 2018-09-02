import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SecondScreen from './components/SecondScreen';
import ThirdScreen from './components/ThirdScreen';
import Interval from './components/form_interval';
import Unstop from './components/form_unstop';
import Unkind from './components/form_unkind';
import Overpay from './components/form_overpay';
import Petition from './components/form_pre';
import { Router, Scene, Stack, ActionConst } from 'react-native-router-flux';
import Mypetition from './components/mypetition';
import Stat1 from './components/stat_1';
import Stat2 from './components/stat_2';
import Stat3 from './components/stat_3';
import Detail from './components/petition';
import Detail1 from './components/petition1';
import Detail2 from './components/petition2';
import Star1 from './components/star1';
import Star2 from './components/star2';
import Star3 from './components/star3';




export default class App extends React.Component {
  render() {
    return (
      <Router>
         <Stack navTransparent key="root" >
          <Scene 
            key="second"
            component={SecondScreen}
            initial={true}
            navBarButtonColor="red"
          />
          <Scene 
            key="third"
            component={ThirdScreen}
            title="경기도 버스 민원"
            navBarButtonColor='#3a68e8'
          />
          {/* <Stack navTransparent> */}
          <Scene 
            key="petition"
            component={Petition}
            title="민원 넣기"
            navBarButtonColor='#3a68e8'
          />
            <Scene key="interval" component={Interval} title="배차 간격" navBarButtonColor='#3a68e8'/>
            <Scene key="unstop" component={Unstop} title="무정차 신고" navBarButtonColor='#3a68e8'/>
            <Scene key="unkind" component={Unkind} title="불친절 / 난폭운전" navBarButtonColor='#3a68e8'/>
            <Scene key="overpay" component={Overpay} title="과다요금 신고" navBarButtonColor='#3a68e8'/>
          {/* </Stack> */}
          {/* <Stack navTransparent duration={0} key='pettion'> */}
            <Scene key="mypetition" component={Mypetition} title="내 민원보기" navBarButtonColor='#3a68e8'/>
            <Scene key="detail" component={Detail} title="민원 상세" navBarButtonColor='#3a68e8'/>
            <Scene key="detail1" component={Detail1} title="민원 상세" navBarButtonColor='#3a68e8'/>
            <Scene key="detail2" component={Detail2} title="민원 상세" navBarButtonColor='#3a68e8'/>

            <Scene key="star1" component={Star1} title="만족도 평가" navBarButtonColor='#3a68e8'/>
            <Scene key="star2" component={Star2} title="만족도 평가" navBarButtonColor='#3a68e8'/>
            <Scene key="star3" component={Star3} navBarButtonColor='#3a68e8'/>

          {/* </Stack> */}
          <Stack navTransparent duration={0} key="stat">
            <Scene key="stat1" component={Stat1} title="" navBarButtonColor='#3a68e8'/>
            <Scene key="stat2" component={Stat2} title="" navBarButtonColor='#3a68e8'/>
            <Scene key="stat3" component={Stat3} title="" navBarButtonColor='#3a68e8'/>
          </Stack>
        </Stack>
      </Router>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
