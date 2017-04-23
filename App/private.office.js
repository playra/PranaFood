import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ParallaxView from 'react-native-parallax-view'
import { Container, Content, Thumbnail, List, ListItem } from 'native-base'
import styles from './makeup'

export default class PrivateOffice extends Component {
  render() {
    return (
      <ParallaxView
                ref={component => this._scrollView = component}
                backgroundSource={{ uri: "http://qrcoder.ru/code/?http%3A%2F%2Fhttp%3A%2F%2Fpranafood.ru&4&0" }}
                windowHeight={300}
                >
                <View style={styles.textBody}>
                  <Thumbnail style={styles.thumbnail} square size={90} source={{ uri: "http://kudaidesh.ru/wp-content/uploads/2013/08/cherno-beloe.jpg" }} />
                  <List>
                      <ListItem >
                          <Text>Яков Эммануилович Маршак</Text>
                      </ListItem>
                      <ListItem>
                          <Text>ID 100102144</Text>
                      </ListItem>
                      <ListItem>
                          <Text>Научный деятель, доктор биохимических наук, математик.</Text>
                      </ListItem>
                      <Text>{'\n'}</Text>
                      <Text>{'\n'}</Text>
                  </List>
                </View>
              </ParallaxView>
      )
    }
  }
