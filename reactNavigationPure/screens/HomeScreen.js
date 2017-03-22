import React from 'react';
import {StyleSheet, Text, View, ScrollView, Platform} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import styles from '../styles/styles';
import CountryScreen from './CountryScreen';
import CityInfoScreen from './CityInfoScreen';
import CityMapScreen from './CityMapScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button';

class HomeScreen extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    static navigationOptions = {
        title: 'Home',
        header: {
            visible: false
        }
    };

    renderCountryButtons() {
        const countriesAndCities = [
            {
                country: 'America',
                cities: [
                    {
                        city: 'New York'
                    }, {
                        city: 'San Francisco'
                    }, {
                        city: 'Louisville'
                    }, {
                        city: 'Seattle'
                    }
                ]
            }, {
                country: 'Canada',
                cities: [
                    {
                        city: 'Toronto'
                    }, {
                        city: 'Vancouver'
                    }, {
                        city: 'Montreal'
                    }
                ]
            }, {
                country: 'England',
                cities: [
                    {
                        city: 'London'
                    }, {
                        city: 'Cambridge'
                    }, {
                        city: 'Oxford'
                    }, {
                        city: 'Manchester'
                    }
                ]
            }, {
                country: 'France',
                cities: [
                    {
                        city: 'Paris'
                    }, {
                        city: 'Nantes'
                    }, {
                        city: 'Cannes'
                    }, {
                        city: 'Bordeaux'
                    }
                ]
            }
        ];
        // const {navigate} = this.props.navigation;

        return countriesAndCities.map((d, i) => {
            return (
                <View key={i}>
                    <Button style={styles.button} textStyle={styles.buttonText} onPress={() => {
                        this.handleCountryButtonClick(d)
                    }}>
                        {d.country}
                    </Button>
                </View>
            );
        });
    }

    handleCountryButtonClick(d) {
        console.log(`Navigate to ${d.country}`);
        this.props.navigation.navigate('Country', {
            country: d.country,
            cities: d.cities
        });
    }

    render() {
        return (
            <ScrollView style={styles.homeContainer}>
                <Text style={styles.text}>This simple app demos the features of react-navigator.</Text>
                <Text style={styles.text}>Choose a country to visit:</Text>
                <View style={styles.buttonContainer}>
                    {this.renderCountryButtons()}
                </View>
            </ScrollView>
        );
    }
}

const renderTabIcon = (tintColor, focused, focusedIcon, unfocusedIcon) => {
  return(
    <Ionicons name={focused ? focusedIcon : unfocusedIcon}
      size={26} style={{color: tintColor}}/>
  );
};


const CityTabNavigator = TabNavigator({
    Info: {
        screen: CityInfoScreen,
        navigationOptions: {
            tabBar: {
                label: 'Info',
                icon: ({tintColor, focused}) => renderTabIcon(tintColor, focused, 'ios-settings', 'ios-settings-outline')

            }
        }
    },
    Map: {
        screen: CityMapScreen,
        navigationOptions: {
            tabBar: {
                label: 'Map',
                icon: ({tintColor, focused}) => renderTabIcon(tintColor, focused, 'ios-map', 'ios-map-outline')
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios'
            ? '#e91e63'
            : '#fff'
    },
    backTitle: null
});

CityTabNavigator.navigationOptions = {
    title: ({state}) => {
        return state.params.city;
    }

};

const SimpleApp = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Country: {
        screen: CountryScreen
    },
    City: {
        screen: CityTabNavigator
        // screen: CityInfoScreen

    }
}, {
    initialRouteName: 'Home',
    headerMode: 'screen',
    backTitle: null
});

export default SimpleApp;
