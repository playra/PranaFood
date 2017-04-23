import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ParallaxView from 'react-native-parallax-view'
import { Container, Content, List, ListItem } from 'native-base'
import styles from '../makeup'

var PROGRAMS = [
    {
        title: 'Общие программы',
        name: 'General'
    },
    {
        title: 'Специальные программы',
        name: 'Special'
    },
    {
        title: 'Программы на неделю',
        name: 'Week'
    },
    {
        title: 'Программы одного дня',
        name: 'OneDay'
    },
    {
        title: 'Образовательные программы',
        name: 'Training'
    },
    {
        title: 'Программы для детей',
        name: 'Children'
    }
]

export default class Prana extends Component {
  render() {
    return (
      <ParallaxView
                ref={component => this._scrollView = component}
                backgroundSource={{ uri: "http://shawellnessclinic.com/shamagazine/wp-content/uploads/SHA_LIFESTYLE-922-B2-1.jpeg" }}
                windowHeight={300}
                >
              <View style={styles.textBody}>
                <Text style={styles.h1}>
                    Услуги
                </Text>
                <List>
                      {PROGRAMS.map((section, i) => (
                      <ListItem key={section.name}
                        onPress={Actions[section.name]}>
                          <Text>{section.title}</Text>
                      </ListItem>
                      ))}
                </List>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
              </View>
      </ParallaxView>
    )
  }
}
