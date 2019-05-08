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
  Button,
  Image,
  TouchableHighlight,
  ScrollView,
  TouchableNativeFeedback} from 'react-native';

export default class Workshop11 extends Component {

  constructor(props){
    super(props)
    this.state = {active: false}
  }

  render() {
    return (
      <View style={{padding: 10 ,flex: 1, flexDirection:'column', justifyContent: 'center'}}>
        <ScrollView>
          <Image resizeMode = 'center' style = {{width: undefined}} source = {require('../Images/spiderman.png')}/>
          <Image resizeMode = 'center' style = {{height: 500, width: undefined}} source={{uri: "https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg"}} />
        </ScrollView>
      </View>
    );
  }

}
