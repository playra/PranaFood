import React, { Component } from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ParallaxView from 'react-native-parallax-view'
import { Container, Content, List, ListItem, Thumbnail, Image, Text } from 'native-base'
import styles from './makeup'

export default class Shop extends Component {
  render() {
    return (
      <ParallaxView
                ref={component => this._scrollView = component}
                backgroundSource={{ uri: "http://shawellnessclinic.com/shamagazine/wp-content/uploads/iStock_66416211_LARGE-720x480.jpg" }}
                windowHeight={300}
                >
                <View>
                  <List style={styles.list}>
                        <Text style={styles.shopH1}>
                            МАГАЗИН
                        </Text>
                        <ListItem onPress={Actions.Prana}>
                            <Thumbnail square size={80} source={{ uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_7QV5dw66nmWQpckViIdG10YGhe-GgtlXVEpazZMr26GDUEyI" }} />
                            <Text>Абонементы</Text>
                        </ListItem>
                        <ListItem onPress={Actions.Prana}>
                            <Thumbnail square size={80} source={{ uri: "http://shawellnessclinic.com/shamagazine/wp-content/uploads/SHA_LIFESTYLE-922-B2-1.jpeg" }} />
                            <Text>Услуги</Text>
                        </ListItem>
                        <ListItem onPress={Actions.Prana}>
                            <Thumbnail square size={80} source={{ uri: "http://www.publy.ru/wp-content/uploads/2016/08/158141982457a72d15608773.67597217.jpg" }} />
                            <Text>Книги</Text>
                        </ListItem>
                        <ListItem onPress={Actions.Prana}>
                            <Thumbnail square size={80} source={{ uri: "http://re-born.ru/Pictures/Middle/1205_mango.jpg?max_width=230&max_height=230" }} />
                            <Text>Питание</Text>
                        </ListItem>
                        <ListItem onPress={Actions.Prana}>
                            <Thumbnail square size={80} source={{ uri: "http://vdv-kashin.ru/pic/users/1/img/2014/19_02_vnetr_krasota/f7dd92b47de833f17d3ade6c926ee8e9.jpg" }} />
                            <Text>БАДы</Text>
                        </ListItem>
                        <ListItem onPress={Actions.Prana}>
                            <Thumbnail square size={80} source={{ uri: "http://www.sportobzor.ru/uploads/images/1364234157_collage5.jpg" }} />
                            <Text>Одежда</Text>
                        </ListItem>
                        <ListItem onPress={Actions.Prana}>
                            <Thumbnail square size={80} source={{ uri: "http://www.4yoga.ru/published/publicdata/4YOGA/attachments/SC/products_pictures/shakti_pro_enl.jpg" }} />
                            <Text>Аксессуары</Text>
                        </ListItem>
                        <ListItem onPress={Actions.Prana}>
                            <Thumbnail square size={80} source={{ uri: "https://4yoga.ru/upload/iblock/a11/bekbender.jpeg" }} />
                            <Text>Оборудование</Text>
                        </ListItem>
                        <ListItem onPress={Actions.Prana}>
                            <Thumbnail square size={80} source={{ uri: "http://www.sephora.com/productimages/sku/s1802370-main-zoom.jpg" }} />
                            <Text>Косметика</Text>
                        </ListItem>
                        <Text>{'\n'}</Text>
                        <Text>{'\n'}</Text>
                  </List>
                </View>
              </ParallaxView>
      )
    }
  }
