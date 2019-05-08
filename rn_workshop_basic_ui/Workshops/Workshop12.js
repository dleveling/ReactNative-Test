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

export default class Workshop12 extends Component {

  constructor(props){
    super(props)
    this.state = {active: false}
    //this.clickme = this.clickme.bind(this)
  }

  render() {
    return (
      <View style={{padding: 10 ,flex: 1, flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
          <Button title={this.state.active ? "Active" : "InActive"} onPress = {this.clickme.bind(this)}/>
          <Button title={this.state.active ? "2 Active" : "2 Inactive"} onPress = {this.clickmeWithArrowFn}/>
      </View>
    );
  }

  clickme() {
    this.setState(oldState => {
      return {active : !oldState.active}
    })
  }

  clickmeWithArrowFn = ()=> {
    this.setState(oldState => {
      return {active : !oldState.active}
    })
  }

}
