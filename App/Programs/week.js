import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ParallaxView from 'react-native-parallax-view'
import styles from '../makeup'

export default class Week extends Component {
  render() {
    return (
      <ParallaxView
                ref={component => this._scrollView = component}
                backgroundSource={{ uri: "http://shawellnessclinic.com/shamagazine/wp-content/uploads/iStock_22024700_SMALL-720x516.jpg" }}
                windowHeight={300}
                >
                <View style={styles.textBody}>
                  <Text style={styles.h1}>
                      Программы на неделю
                  </Text>
                  <Text style={styles.text}>
                    - Очищение организма.
                  </Text>
                  <Text style={styles.text}>
                    - Курс - Диагностика, профилактика и определение способов реабилитация патологий основных систем организма сопутствующих старению.
                  </Text>
                  <Text style={styles.text}>
                    - Восстановление после интенсивных нагрузок.
                  </Text>
                  <Text style={styles.text}>
                    - Восстановление тонуса.
                  </Text>
                </View>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
              </ParallaxView>
      )
    }
  }
