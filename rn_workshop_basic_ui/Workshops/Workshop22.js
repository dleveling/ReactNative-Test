import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

export default class animatedbasic extends Component {
  
  componentWillMount() {
    this.animatedValue = new Animated.Value(-300);
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 300,
      duration: 3000
    }).start();
  }
  
  
  render() {
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [-300, 300],
      outputRange: ['rgb(0,0,0)', 'rgb(191, 280, 179)']
    })
    const animatedStyle = {
      backgroundColor: interpolateColor,
      transform: [
        { translateY: this.animatedValue }
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
  }
});

AppRegistry.registerComponent('animatedbasic', () => animatedbasic);

