/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Workshop6 extends Component {

  render(){
    return(

      //MARK: - FlexDirection แบบ Row
      // <View style = {{flex: 1, flexDirection: 'row'}}>
      //   <View style = {{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
      //   <View style = {{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
      //   <View style = {{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
      // </View>

      //MARK: - FlexDirection, JustifyContent, AlignItems แบบ Space-between
      // <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
      //     <View style = {{width: 150, height: 150, backgroundColor: 'powderblue'}}></View>
      //     <View style = {{width: 150, height: 150, backgroundColor: 'skyblue'}}></View>
      //     <View style = {{width: 150, height: 150, backgroundColor: 'steelblue'}}></View>
      // </View>
      
      //MARK: - Stretch
      <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
          <View style = {{width: 150, height: 150, backgroundColor: 'powderblue'}}></View>
          <View style = {{height: 150, backgroundColor: 'skyblue'}}></View>
          <View style = {{height: 150, backgroundColor: 'steelblue'}}></View>
      </View>

    );
  }
}