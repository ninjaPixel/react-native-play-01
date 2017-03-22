import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import styles from '../styles/styles';

const lorem = "Marfa bushwick distillery venmo readymade, seitan taxidermy single-origin coffee. Fashion axe iPhone pug, edison bulb pinterest bicycle rights intelligentsia chartreuse cronut try-hard subway tile blog typewriter. Microdosing pitchfork kogi forage, vape fixie green juice austin fam fap cray poutine bespoke art party. Kale chips hella meggings neutra put a bird on it la croix, kombucha try-hard stumptown disrupt pour-over. Fam beard migas, pinterest poke woke intelligentsia franzen 90's raw denim af vaporware vinyl. Woke affogato intelligentsia gochujang, schlitz tumblr authentic artisan echo park kickstarter pour-over food truck retro hashtag. Hammock thundercats four loko messenger bag unicorn keytar, dreamcatcher truffaut poutine lumber flannel heirloom photo booth biodiesel gochujang.";

export default class CityInfoScreen extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
    render() {
        return (
            <View>
                <Text style={styles.text}>You can use tabs, too. Note that these are contained within thier parent route.</Text>
                <Text style={styles.text}>{lorem}</Text>
            </View>
        );
    }
}
