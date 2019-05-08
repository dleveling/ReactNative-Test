/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
  StyleSheet, 
  Text,
  View,
  Alert,
  Button} from 'react-native';

export default class Workshop8 extends Component {

  constructor(props){
    super(props)
    this.state = {text: ''}
  }

  render() {
    return (
      <View style={{padding: 10 ,flex: 1, flexDirection:'column', justifyContent: 'center'}}>
          <Button title = "Press Here" onPress = {this.clickme} />
      </View>
    );
  }

  clickme() {
    Alert.alert("Thank for click ! ");
  }

}
