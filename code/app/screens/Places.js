import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import Meteor from 'react-native-meteor';


class Places extends React.Component {
    
    
    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
        };
        
    }
    
    
    loadPlaces = () => {
        const params = {sortBy: 'rating', sortDirection: -1, offset: 0};
        
        this.setState({loading: true});
        
        Meteor.call('Places.sorted.fetch', params, (err, places) => {
            if (err) {
                console.log(err.reason);
            } else {
                console.log('places', places);
            }
            this.setState({loading: false});
            
        });
    };
    
    
    render() {
        return (
          <View><Text>Loading: {this.state.loading}</Text>
              <TouchableOpacity onPress={this.loadPlaces} style={styles.btn}>
                  <Text>Load data</Text>
              </TouchableOpacity>
          </View>
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    preview: {
        backgroundColor: '#bdc3c7',
        width: 300,
        height: 400,
        padding: 10,
        borderRadius: 5,
        color: '#333',
        marginBottom: 50,
    },
    btn: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 3,
        marginTop: 10,
    },
});

export default Places;
// Expo.registerRootComponent(Places);