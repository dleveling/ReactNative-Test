/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Workshop3 extends Component {

  render(){
    return(
      <View style = {styles.container}>

        <Text style={{color: "#FFFFFF"}}>HelloReactNative</Text>
        <Text style = {styles.bigblue}>Hello bigblue</Text>
        <Text style = {styles.red}>Hello red</Text>
        <Text style = {styles.brown}>Hello brown</Text>
        <Text style = {styles.pink}>Hello Pink</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#6b9ae5",
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  },
  brown: {
    color: 'brown',
    fontSize: 60,
    fontWeight: 'bold'
  },
  pink: {
    color: 'pink',
    fontSize: 50,
    fontWeight: 'normal',
    backgroundColor: 'blue'
  }

});