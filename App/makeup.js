import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "image": {
        "width": width,
        "height": 200,
        "borderBottomWidth": 1,
        "borderBottomColor": "#rgb(152, 55, 221)"
    },
    "overlay": {
        "alignItems": "center",
        "justifyContent": "center",
        backgroundColor: 'rgba(0,0,0,0.3)'
        //"opacity": 0.8
    },
    "title": {
        "fontSize": 22,
        //"fontFamily": 'SFUIText-Ultrathin',
        "fontFamily": 'Avenir',
        "textAlign": "center",
        "lineHeight": 25,
        "fontWeight": "400",
        "color": "white",
        "shadowOffset": {width: 0, height: 0},
        "shadowRadius": 1,
        "shadowColor": "black",
        "shadowOpacity": 0.3,
        //"backgroundColor": '#rgb(36, 34, 34)',
        "borderLeftWidth": 15,
        //"opacity": 0.9
    },
    //ParallaxView
    header: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 24
    },
    h1: {
        fontSize: 24,
        //fontWeight: 'bold',
        paddingHorizontal: 1,
        color: '#000000',
        //fontFamily: 'SFUIText-Medium'
        fontFamily: 'Avenir',
    },
    h2: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },
    textBody: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    text: {
        color: '#000000',
        paddingBottom: 5,
        //fontFamily: 'SFUIText-Ultrathin'
        fontFamily: 'Avenir'
    },
    // Native Base
    card: {
      fontFamily: 'Avenir'
      //fontFamily: 'SFUIText-Medium'
    },
    thumbnail: {
      marginLeft: 18
    },
    list: {
      marginLeft: 1
    },
    // Shop
    shopH1: {
      fontSize: 21,
      color: '#000000',
      marginTop: 15,
      marginLeft: 15,
      fontFamily: 'Avenir'
      //fontFamily: 'SFUIText-Medium'
    }
});
