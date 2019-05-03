/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {

  render(){
    return(
      <View style={{flex: 1,  flexDirection: 'column', 
      backgroundColor: "#6b9ae5", 
      alignItems: 'center', 
      justifyContent: 'center'}}>

      <Text style={{ textAlign: 'center' , color: "#FFFFFF"}}>
        Hello React Native
      </Text>
      <Text style={{ textAlign: 'center' , color: "#FFFFFF"}}>
        Hello React Native
      </Text>
      <Text style={{ textAlign: 'center' , color: "#FFFFFF"}}>
        Hello React Native
      </Text>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
