/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Workshop5 extends Component {

  render(){
    return(
      <View style = {{flex: 1, flexDirection: 'column'}}>
          <View style = {{flex: 1, backgroundColor: 'powderblue'}}/>
          <View style = {{flex: 2, backgroundColor: 'skyblue'}} />
          <View style = {{flex: 3, backgroundColor: 'steelblue'}} />
          <Text style = {{flex: 1, backgroundColor: 'pink'}}>Hello</Text>
      </View>

    );
  }
}