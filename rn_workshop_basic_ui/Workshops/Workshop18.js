import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';


class Workshop18 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const animatedStyle = {
      transform: [{ scale: this.animatedValue}]
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPressIn = {this.handlePressIn} onPressOut = {this.handlePressOut} >
          <Animated.View style={[styles.button, animatedStyle]}>
            <Text style={styles.Text}> Press Me</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1)
  }

  handlePressIn = () => {
    Animated.spring(this.animatedValue, {
      toValue: .5
    }).start();
  }

  handlePressOut = () => {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40
    }).start();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#333",
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "#FFF"
  }
})

export default Workshop18;
