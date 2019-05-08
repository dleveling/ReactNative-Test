/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Workshop4 extends Component {

  render(){
    return(
      <View style = {styles.container}>
          <View style = {{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
          <View style = {{width: 100, height: 100, backgroundColor: 'skyblue'}} />
          <View style = {{width: 150, height: 150, backgroundColor: 'steelblue'}} />
          <Text style = {styles.myText}>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#FFFFFF",
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  myText: {
    width: 100,
    height: 100,
    backgroundColor: "#D0D0D0"
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