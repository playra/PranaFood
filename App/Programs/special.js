import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ParallaxView from 'react-native-parallax-view'
import styles from '../makeup'

export default class Special extends Component {
  render() {
    return (
      <ParallaxView
                ref={component => this._scrollView = component}
                backgroundSource={{ uri: "http://pranafood.ru/wp-content/uploads/2014/07/DSC07910-—-копия-2.jpg" }}
                windowHeight={300}
                >
                <View style={styles.textBody}>
                  <Text style={styles.h1}>
                      Специальные программы
                  </Text>
                  <Text style={styles.text}>
                    - "Формула молодости" - авторская программа омоложения и продления активного долголетия доктора Якова Маршака.
                  </Text>
                  <Text style={styles.text}>
                    - "Не зависимость" - авторская методика доктора Якова Маршака освобождения от зависимости.
                  </Text>
                  <Text style={styles.text}>
                    - "Формула жизни" - программа комплексного оздоровления организма.
                  </Text>
                  <Text style={styles.text}>
                    - Восстановления после болезни.
                  </Text>
                  <Text style={styles.text}>
                    - Реабилитации О.Д.А.
                  </Text>
                  <Text style={styles.text}>
                    - Панчкарма.
                  </Text>
                  <Text style={styles.text}>
                    - Антистресс.
                  </Text>
                  <Text style={styles.text}>
                    - Психологические консультации.
                  </Text>
                  <Text style={styles.text}>
                    - Коррекция фигуры. (Антицеллюлит).
                  </Text>
                  <Text style={styles.text}>
                    - Устранение внешних признаков старения.
                  </Text>
                  <Text style={styles.text}>
                    - Лечение кожи головы и волос.
                  </Text>
                  <Text style={styles.text}>
                    - PRP-терапия
                  </Text>
                </View>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
              </ParallaxView>
      )
    }
  }
