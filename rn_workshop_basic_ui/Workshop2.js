/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Workshop2 extends Component {

  render(){
    return(
      <View style={{flex: 1,  flexDirection: 'column', backgroundColor: "#6b9ae5", alignItems: 'center', 
      justifyContent: 'center'}}>

      <BlinkText message="Welcome to React X" intervalxx={300}/>

      </View>
    );
  }

}

class BlinkText extends Component {

  constructor(props){
    super(props)
    this.state = {isVisible: true}

    setInterval(() => {
      this.setState(oldState => {
        return{isVisible: !oldState.isVisible }
      })
    }, this.props.intervalxx)
  }

  render(){
    let display = this.state.isVisible ? this.props.message+" QWERTY" : '';
    return(
      <Text style={{ textAlign: 'center' , color: "#FFFFFF"}}>
      {display}
      </Text>
    );
  }
}

