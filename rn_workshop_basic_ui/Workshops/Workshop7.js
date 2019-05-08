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
  TextInput,
  View,
  ScrollView} from 'react-native';

export default class Workshop7 extends Component {

  constructor(props){
    super(props)
    this.state = {text2: ''}
  }

  render(){
    return(

      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {/* {this.state.text.split(' ').map((word) => word && '🍕').join(' ')} */}
          {this.state.text}
        </Text>
      </View>
      
    );
  }
}
