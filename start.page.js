'use strict'

import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, PixelRatio, Image, ListView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Parallax from 'react-native-parallax';
import styles from './App/makeup';

var PARALLAX_FACTOR = 0.8;
var SECTIONS = [
    {
        title: 'О НАС',
        name: 'About',
        keyword: { uri: 'https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/15219559_1792255417656518_3460719518712580728_n.jpg?oh=1ceb9e84c98e8ff5c89b008e7f0ac0c8&oe=59669EEE' },
    },
    {
        title: 'REBORN TV',
        name: 'TV',
        keyword: { uri: 'http://www.satcore.info/images/articles/3d-films.jpg' },
    },
    {
        title: 'ЭКОПРОЕКТЫ',
        name: 'Eco',
        keyword: { uri: 'https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/15095548_1792255717656488_6565545006593780483_n.jpg?oh=daf86b09e69550dea720201cfade6084&oe=5966FFE3' },
    },
    {
        title: 'ПРОГРАММЫ',
        name: 'Programs',
        keyword: { uri: 'https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/15095006_1792255790989814_982016867045555718_n.jpg?oh=7da6272fbc0be99c5c27db93e368007c&oe=5925306C' },
    },
    {
        title: 'МЕТОДИКИ',
        name: 'Procedures',
        keyword: { uri: 'https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/15202628_1792255947656465_4187497144556883878_n.jpg?oh=9c7e41bc080b3b5d11a3034ab06e1ac1&oe=5966CAF3' },
    },
    {
        title: 'РАСПИСАНИЕ',
        name: 'Timetable',
        keyword: { uri: 'https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/15192665_1792255957656464_1126235528815554422_n.jpg?oh=565cefb8d73b4095ec276e43f6cbc093&oe=59592187' },
    },
    {
        title: 'КАФЕ',
        name: 'Cafe',
        keyword: { uri: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/15170772_1792255217656538_8627834219744120944_n.jpg?oh=72e3073245cde02def96c9f34b2c9bc9&oe=58FD40A6' },
    },
    {
        title: 'МАГАЗИН',
        name: 'Shop',
        keyword: { uri: 'https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/15219572_1792255400989853_4268041104422447313_n.jpg?oh=c8ae480ab6cd5ecddaa48968fb44f8ad&oe=5956A071' },
    },
    {
        title: 'КОНТАКТЫ',
        name: 'Contact',
        keyword: { uri: 'https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/15219387_1792255494323177_8301443642537275137_n.jpg?oh=93be67960be48da87feb493b9daffc7f&oe=59254E94' },
    },
    {
        title: 'ЛИЧНЫЙ КАБИНЕТ',
        name: 'PrivateOffice',
        keyword: { uri: 'https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/15193607_1792255440989849_3919824729655333090_n.jpg?oh=69bc3e840a774fc030ceadb4ecc4c98a&oe=5957D7F0' },
    }
]


export default class StartPage extends Component {
  render() {
    return (
      <Parallax.ScrollView style={{paddingTop: 20}}>
                {SECTIONS.map((section, i) => (
                    <Parallax.Image
                        key={section.name}
                        onPress={Actions[section.name]}
                        style={styles.image}
                        overlayStyle={styles.overlay}
                        source={section.keyword}
                        parallaxFactor={PARALLAX_FACTOR}>
                        <Text style={styles.title}>{section.title}</Text>
                    </Parallax.Image>
                ))}
      </Parallax.ScrollView>
    )
  }
}
