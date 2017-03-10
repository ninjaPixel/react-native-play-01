import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Meteor from 'react-native-meteor';
import config from './app/config/config';

import Places from './app/screens/Places';

Meteor.connect(config.SERVER_URL);


const playIcon = Expo.Asset.fromModule(require('./src/images/play.png'));
// const volumeIcon = require('./src/images/sound.png');
// const hdIcon = require('./src/images/hd-sign.png');
// const fullScreenIcon = require('./src/images/full-screen.png');
const remoteImage = {uri: 'https://s3.amazonaws.com/crysfel/public/book/new-york.jpg'};

class App extends React.Component {
    render() {
        const name = '02 - Hey there, this is my life';
        // const playIcon = Expo.Asset.fromModule(require('/src/images/play.png'));
        
        return (
          <View>
              <Image source={playIcon} style={styles.icon}/>
              <Image source={remoteImage} style={styles.fullScreen}>
                  <View style={styles.container}>
                      <View style={styles.innerContainer}/>
                      <Text style={styles.title}>
                          <Text style={styles.subtitle}>Playing: </Text>
                          {name}
                      </Text>
                  </View>
              </Image>
          </View>
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 100,
        backgroundColor: '#e67e22',
        borderRadius: 5,
    },
    innerContainer: {
        backgroundColor: '#d35400',
        height: 50,
        width: 100,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: '200',
        color: '#fff',
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 12,
        left: 10,
    },
    subtitle: {
        fontWeight: 'bold',
    }, icon: {
        // tintColor: '#fff',
        height: 46,
        width: 46,
        marginLeft: 5,
        marginRight: 5,
    },
    fullscreen: {
        flex: 1,
    },
});

// Expo.registerRootComponent(App);
Expo.registerRootComponent(Places);
