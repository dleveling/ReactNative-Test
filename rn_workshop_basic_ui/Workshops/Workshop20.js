import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { 
  View, 
  Text,
  StyleSheet } from 'react-native';

class Workshop20 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={{ 
          latitude: 13.7704973, 
          longitude: 100.5724797, 
          latitudeDelta: 0.1,
          longitudeDelta: 0.1}}>

          <MapView.Marker
            coordinate={{
              latitude: 13.7704973,
              longitude: 100.5724797
            }}
            title = {'The Streeet Post Office'}
            description = {'Description: The Street Post Office'} />

        </MapView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});

export default Workshop20;

