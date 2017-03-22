// import Expo from 'expo';
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Button from 'apsl-react-native-button'

import styles from '../styles/styles';


export default class CountryScreen extends React.Component {
    static navigationOptions = {
        title: ({state}) => state.params.country
    };
    
    handleCityButtonClick(city) {
        console.log(`Navigate to ${city}`);
        this.props.navigation.navigate('City', {city: city});
    }
    
    renderCities() {
        // const {navigate} = this.props.navigation;
        return this.props.navigation.state.params.cities.map((d, i)=> {
            return (
              <View style={styles.buttonContainer} key={i}>
                  <Button style={styles.button} textStyle={styles.buttonText}
                          onPress={()=> {
                              this.handleCityButtonClick(d.city)
                          }}
                  >{d.city}</Button>
              </View>
            );
        });
    }
    
    render() {
        return (
          <View>
              <Text style={styles.text}>Items (routes) are added to the Navigation stack</Text>
              {this.renderCities()}
          </View>
        );
    }
}