// import Expo from 'expo';
import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import styles from '../styles/styles';

export default class CityMapScreen extends React.Component {
    
    renderMarkers() {
        const markers = [{
            latlng: {
                latitude: 37.78825,
                longitude: -122.4324
            },
            title: 'Title',
            description: 'Some interesting description'
        },
            {
                latlng: {
                    latitude: 37.78925,
                    longitude: -122.4334
                },
                title: 'Title',
                description: 'Some interesting description'
            },
            {
                latlng: {
                    latitude: 37.78685,
                    longitude: -122.4421
                },
                title: 'Title',
                description: 'Some interesting description'
            }];
        return null;
        // return (    markers.map((marker, i) =>
        //   <Expo.MapView.Marker
        //     key={i}
        //     coordinate={marker.latlng}
        //     title={marker.title}
        //     description={marker.description}
        //   />
        // ));
    }
    
    initialRegion() {
        return {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            
        };
    }
    
    render() {
        return null;
        // return (
        //   <Expo.MapView
        //     style={{flex: 1}}
        //     initialRegion={this.initialRegion()}
        //   >
        //       {this.renderMarkers()}
        //   </Expo.MapView>
        //
        // );
    }
}