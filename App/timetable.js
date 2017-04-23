import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ParallaxView from 'react-native-parallax-view'
import styles from './makeup'

export default class Timetable extends Component {
  render() {
    return (
      <ParallaxView
                ref={component => this._scrollView = component}
                backgroundSource={{ uri: "http://cdn.paper4pc.com/images/yoga-girl-wallpaper-1.jpg" }}
                windowHeight={300}
                >
                <View style={styles.textBody}>
                  <Text style={styles.h1}>
                      РАСПИСАНИЕ
                  </Text>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, magna assum officiis ut duo, audire elaboraret in cum. Praesent periculis nam
                    cu, an dicunt detracto nam. Nec salutandi iracundia ut, mea ea probo detraxit, ferri vituperatoribus est eu.
                    Populo nemore qualisque vis te, at numquam persequeris duo.
                  </Text>
                  <Text style={styles.text}>
                    Oportere indoctum scriptorem eos an, ne erant scripta repudiare est, cetero principes vim ea. Unum bonorum
                    volutpat eu mea. Per fugit democritum in, omnis dicam ignota no quo. Quem justo erant sit eu, augue nulla
                    feugiat ut mea, ex accumsan quaestio pro. Eum propriae imperdiet referrentur ne. Deleniti singulis inimicus
                    an vim, ne qui mazim definitiones reprehendunt.
                  </Text>
                  <Text style={styles.text}>
                    No soluta aliquip disputando sit. Porro oporteat no vim. Per ad evertitur concludaturque. Ad vim brute
                    mandamus, nostrum maluisset no quo, nostrum ancillae scribentur ea sed. Quem odio consulatu vel an, ludus
                    abhorreant sententiae id ius.
                  </Text>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, magna assum officiis ut duo, audire elaboraret in cum. Praesent periculis nam
                    cu, an dicunt detracto nam. Nec salutandi iracundia ut, mea ea probo detraxit, ferri vituperatoribus est eu.
                    Populo nemore qualisque vis te, at numquam persequeris duo.
                  </Text>
                  <Text style={styles.text}>
                    Oportere indoctum scriptorem eos an, ne erant scripta repudiare est, cetero principes vim ea. Unum bonorum
                    volutpat eu mea. Per fugit democritum in, omnis dicam ignota no quo. Quem justo erant sit eu, augue nulla
                    feugiat ut mea, ex accumsan quaestio pro. Eum propriae imperdiet referrentur ne. Deleniti singulis inimicus
                    an vim, ne qui mazim definitiones reprehendunt.
                  </Text>
                  <Text style={styles.text}>
                    No soluta aliquip disputando sit. Porro oporteat no vim. Per ad evertitur concludaturque. Ad vim brute
                    mandamus, nostrum maluisset no quo, nostrum ancillae scribentur ea sed. Quem odio consulatu vel an, ludus
                    abhorreant sententiae id ius.
                  </Text>
                </View>
              </ParallaxView>
      )
    }
  }
