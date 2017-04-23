import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ParallaxView from 'react-native-parallax-view'
import styles from '../makeup'

export default class Training extends Component {
  render() {
    return (
      <ParallaxView
                ref={component => this._scrollView = component}
                backgroundSource={{ uri: "http://shawellnessclinic.com/shamagazine/wp-content/uploads/advices-to-prevent-Alzheimer-720x479.jpg" }}
                windowHeight={300}
                >
                <View style={styles.textBody}>
                  <Text style={styles.h1}>
                      Образовательные и развивающие программы
                  </Text>
                  <Text style={styles.text}>
                    - Лекции и семинары приглашённых гостей.
                  </Text>
                  <Text style={styles.text}>
                    - Курс - Йога для начинающих.
                  </Text>
                  <Text style={styles.text}>
                    - Курс - Углубленное изучение йоги.
                  </Text>
                  <Text style={styles.text}>
                    - Курс - Йогатерапия.
                  </Text>
                  <Text style={styles.text}>
                    - Курс - Сложные асаны.
                  </Text>
                  <Text style={styles.text}>
                    - Курс - Для преподавателей йоги.
                  </Text>
                  <Text style={styles.text}>
                    - Курс - Нейрология.
                  </Text>
                  <Text style={styles.text}>
                    - Курс - Массаж.
                  </Text>
                  <Text style={styles.text}>
                    - Курс - Вегетарианская кулинария.
                  </Text>
                  <Text style={styles.text}>
                    - Курс - Арт-терапия.
                  </Text>
                  <Text style={styles.text}>
                    - Курс - Формирование правильных привычек.
                  </Text>
                  <Text style={styles.text}>
                    - Курс - Домашний уход за кожей и волосами.
                  </Text>
                </View>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
              </ParallaxView>
      )
    }
  }
