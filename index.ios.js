'use strict'

import React, { Component } from 'react';
import { AppRegistry, Text, View, Dimensions, StyleSheet, PixelRatio, Image } from 'react-native';

import { Router, Scene, Actions } from 'react-native-router-flux'
import StartPage from './start.page'
import About from './App/about'
import TV from './App/tv'
import Eco from './App/eco'
import Programs from './App/programs'
import Procedures from './App/procedures'
import Timetable from './App/timetable'
import Cafe from './App/cafe'
import Shop from './App/shop'
import Contact from './App/contact'
import PrivateOffice from './App/private.office'
import General from './App/Programs/general'
import Special from './App/Programs/special'
import Week from './App/Programs/week'
import OneDay from './App/Programs/one.day'
import Training from './App/Programs/training'
import Children from './App/Programs/children'

import Prana from './App/Shop/prana.vanil'

export default class PF extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" navigationBarStyle={styles.navigationBarStyle} leftButtonIconStyle = {{ tintColor:'black'}} titleStyle={styles.titleStyle}
          rightButtonImage = {require('./images/cvetok-jizni2.png')}
          rightButtonIconStyle={{height:40, width:40}}
          onRight={() => Actions.PrivateOffice()}
          >
          <Scene key="StartPage" component={StartPage} hideNavBar={true} initial={true} />
          <Scene key="About" hideNavBar={false} component={About} />
          <Scene key="TV" hideNavBar={false} component={TV} />
          <Scene key="Eco" hideNavBar={false} component={Eco} />
          <Scene key="Programs" hideNavBar={false} component={Programs} />
          <Scene key="Procedures" hideNavBar={false} component={Procedures} />
          <Scene key="Timetable" hideNavBar={false} component={Timetable} />
          <Scene key="Cafe" hideNavBar={false} component={Cafe} />
          <Scene key="Shop" hideNavBar={false} component={Shop} />
          <Scene key="Contact" hideNavBar={false} component={Contact} />
          <Scene key="PrivateOffice" hideNavBar={false} component={PrivateOffice} />

          <Scene key="General" hideNavBar={false} component={General} />
          <Scene key="Special" hideNavBar={false} component={Special} />
          <Scene key="Week" hideNavBar={false} component={Week} />
          <Scene key="OneDay" hideNavBar={false} component={OneDay} />
          <Scene key="Training" hideNavBar={false} component={Training} />
          <Scene key="Children" hideNavBar={false} component={Children} />

          <Scene key="Prana" hideNavBar={false} component={Prana} />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navigationBarStyle: {
    backgroundColor: 'rgb(255, 255, 255)',
    opacity: 0.55,
    bottom: 0,
    top: null,
    height: 65
  },
  titleStyle: {
    //backgroundColor: '#334d5d',
    color: '#rgb(83, 84, 84)'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('PF', () => PF);
