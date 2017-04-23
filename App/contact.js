import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ParallaxView from 'react-native-parallax-view'
import styles from './makeup'

export default class Contact extends Component {
  render() {
    return (
      <ParallaxView
                ref={component => this._scrollView = component}
                backgroundSource={{ uri: "http://static.wixstatic.com/media/1684a0_703232bd79ca45e3b0fdf1d1b7e61c72.jpg_srz_1440_1029_85_22_0.50_1.20_0.00_jpg_srz" }}
                windowHeight={300}
                >
                <View style={styles.textBody}>
                  <Text style={styles.h1}>
                      КОНТАКТЫ
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
