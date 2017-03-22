import React from 'react';
import {StyleSheet, Text, View, ScrollView, Platform} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import styles from '../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button';

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
const lorem = "Marfa bushwick distillery venmo readymade, seitan taxidermy single-origin coffee. Fashion axe iPhone pug, edison bulb pinterest bicycle rights intelligentsia chartreuse cronut try-hard subway tile blog typewriter. Microdosing pitchfork kogi forage, vape fixie green juice austin fam fap cray poutine bespoke art party. Kale chips hella meggings neutra put a bird on it la croix, kombucha try-hard stumptown disrupt pour-over. Fam beard migas, pinterest poke woke intelligentsia franzen 90's raw denim af vaporware vinyl. Woke affogato intelligentsia gochujang, schlitz tumblr authentic artisan echo park kickstarter pour-over food truck retro hashtag. Hammock thundercats four loko messenger bag unicorn keytar, dreamcatcher truffaut poutine lumber flannel heirloom photo booth biodiesel gochujang.";
class MainScreen extends React.Component {
    static navigationOptions = {
        // title: 'Home',
        header: {
            visible: false
        }
    };

    renderButtons(navigate) {
        return countriesAndCities.map((d, i) => {
            return (
                <View style={styles.buttonContainer} key={i}>
                    <Button style={styles.button} textStyle={styles.buttonText} onPress={() => navigate('Country', {
                        country: d.country,
                        cities: d.cities
                    })}>
                        {d.country}
                    </Button>
                </View>
            );
        });
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                {this.renderButtons(navigate)}
            </ScrollView>
        );
    }
}

class CountryScreen extends React.Component {
    static navigationOptions = {
        title: ({state}) => {
            return state.params.country;
        }
    };

    renderButtons(navigate, cities) {
        return cities.map((d, i) => {
            return (
                <View style={styles.buttonContainer} key={i}>
                    <Button style={styles.button} textStyle={styles.buttonText} onPress={() => navigate('Profile', {city: d.city})}>
                        {d.city}
                    </Button>
                </View>
            );
        });
    }

    render() {
        const {navigate, state} = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                {this.renderButtons(navigate, state.params.cities)}
            </ScrollView>
        );
    }
}

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: ({state}) => {
            return state.params.city;
        }
    };

    render() {
        return (
            <View>
                <Text style={styles.text}>You can use tabs, too. Note that these are contained within thier parent route.</Text>
                <Text style={styles.text}>{lorem}</Text>
            </View>
        );
    }

}

const App = StackNavigator({
    Main: {
        screen: MainScreen
    },
    Country: {
        screen: CountryScreen
    },
    Profile: {
        screen: ProfileScreen
    }
}
,{
  initialRouteName: 'Main',
  headerMode: 'screen',
  backTitle: null
});

export default App;
