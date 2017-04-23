import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ParallaxView from 'react-native-parallax-view'
import styles from '../makeup'

export default class General extends Component {
  render() {
    return (
      <ParallaxView
                ref={component => this._scrollView = component}
                backgroundSource={{ uri: "http://shawellnessclinic.com/shamagazine/wp-content/uploads/iStock_16701839_SMALL-720x480.jpg" }}
                windowHeight={300}
                >
                <View style={styles.textBody}>
                  <Text style={styles.h1}>
                      Общие программы
                  </Text>
                  <Text style={styles.text}>
                    - Детокс и контроль веса.
                  </Text>
                  <Text style={styles.text}>
                    - Восстановление после стресса.
                  </Text>
                  <Text style={styles.text}>
                    - Антистресс.
                  </Text>
                  <Text style={styles.text}>
                    - Перезапуск организма.
                  </Text>
                  <Text style={styles.text}>
                    - Диетология.
                  </Text>
                  <Text style={styles.text}>
                    - Комплексное омоложение организма.
                  </Text>
                  <Text>{'\n'}</Text>
                  <Text>{'\n'}</Text>
                </View>
              </ParallaxView>
      )
    }
  }
