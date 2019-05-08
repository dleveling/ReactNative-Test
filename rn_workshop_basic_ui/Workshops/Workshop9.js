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
  TouchableNativeFeedback} from 'react-native';

export default class Workshop9 extends Component {

  constructor(props){
    super(props)
    this.state = {text: ''}
  }

  render() {
    return (
      <View style={{padding: 10 ,flex: 1, flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableHighlight onPress = {this.clickme} onLongPress = {this.longClick} underlayColor = 'skyblue'>
            <View>
              <Image resizeMode = 'center' 
                    style = {{width: 300, height: 300, marginTop: 20}}  
                    source = {require('./Images/spiderman.png')}/>
              <Text style = {{fontSize: 40,flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}> Hello Text</Text>
            </View>
          </TouchableHighlight>
      </View>
    );
  }

  clickme() {
    Alert.alert("Just Click ! ");
  }

  longClick() {
    Alert.alert("Long Click !")
  }

}
