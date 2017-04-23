import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ParallaxView from 'react-native-parallax-view'
import styles from '../makeup'

export default class Children extends Component {
  render() {
    return (
      <ParallaxView
                ref={component => this._scrollView = component}
                backgroundSource={{ uri: "http://shawellnessclinic.com/shamagazine/wp-content/uploads/Happiness-13-tips-to-be-happy-720x479.jpg" }}
                windowHeight={300}
                >
                <View style={styles.textBody}>
                  <Text style={styles.h1}>
                      Программы для детей
                  </Text>
                  <Text style={styles.text}>
                    - Развитие коммуникации.
                  </Text>
                  <Text style={styles.text}>
                    - Художественная студия.
                  </Text>
                  <Text style={styles.text}>
                    - Театральная студия.
                  </Text>
                  <Text style={styles.text}>
                    - Йога для детей.
                  </Text>
                </View>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
              </ParallaxView>
      )
    }
  }
