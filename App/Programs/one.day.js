import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ParallaxView from 'react-native-parallax-view'
import styles from '../makeup'

export default class OneDay extends Component {
  render() {
    return (
      <ParallaxView
                ref={component => this._scrollView = component}
                backgroundSource={{ uri: "http://shawellnessclinic.com/shamagazine/wp-content/uploads/iStock_000076511543_Large1-720x480.jpg" }}
                windowHeight={300}
                >
                <View style={styles.textBody}>
                  <Text style={styles.h1}>
                      Программы одного дня
                  </Text>
                  <Text style={styles.text}>
                    - Активное очищение организма.
                  </Text>
                  <Text style={styles.text}>
                    - Активная перезагрузка.
                  </Text>
                  <Text style={styles.text}>
                    - Устранения признаков усталости кожи лица, рук, шеи.
                  </Text>
                </View>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
              </ParallaxView>
      )
    }
  }
