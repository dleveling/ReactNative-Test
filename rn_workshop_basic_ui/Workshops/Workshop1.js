/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Workshop1 extends Component {

  render(){
    return(
      <View style={{flex: 1,  flexDirection: 'column', 
      backgroundColor: "#6b9ae5", 
      alignItems: 'center', 
      justifyContent: 'center'}}>

      <MyText message="Welcome to React Native" ></MyText>

      </View>
    );
  }

}

class MyText extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <Text style={{ textAlign: 'center' , color: "#FFFFFF"}}>
        {this.props.message}
      </Text>
    );
  }
}

