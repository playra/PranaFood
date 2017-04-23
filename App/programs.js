import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ParallaxView from 'react-native-parallax-view'
import styles from './makeup'
import { Container, Content, Card, CardItem, Thumbnail, Icon, List, ListItem } from 'native-base'

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

export default class Programs extends Component {
  render() {
    return (
      <ParallaxView
                ref={component => this._scrollView = component}
                backgroundSource={{ uri: "http://shawellnessclinic.com/shamagazine/wp-content/uploads/healthy-christmas-presents-ideas-720x609.jpg" }}
                windowHeight={300}
                >
                <View style={styles.textBody}>
                  <Text style={styles.h1}>
                      ПРОГРАММЫ
                  </Text>
                  <Text style={styles.text}>
                    В древности, еще до того, как люди научились культивировать сельскохозяйственные культуры, они использовали в пищу плоды и семена многолетних растений, которые запасали энергию в виде жиров. Эту энергию печень потом переводила в глюкозу, без которой неокортекс — новые области коры головного мозга, которые у человека, в отличие, от млекопитающих, составляют основную часть,  жить не может.
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
