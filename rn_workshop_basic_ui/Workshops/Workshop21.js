import React, { Component } from 'react';
import LoginForm from './Components/LoginForm';
import { View, Text, Image, Alert, StyleSheet, ImageBackground } from 'react-native';

class Workshop21 extends Component {

  render() {
    return (
        <ImageBackground style={styles.container} source={require('../Images/bg.jpeg')}>
            <View style={styles.logocontainer}>
                <Image source={require('../Images/shieldlogo.png')} style={styles.logo} />
            </View>
            <LoginForm loginFunc={ ()=> this.loginFunc()}
                        registerFunc={ ()=> this.registerFunc()}
                        forgotFunc={ ()=> this.forgotFunc()}/>
        </ImageBackground>
    );
  }

  loginFunc(){
    Alert.alert("Login","Hello")
  }
  
  registerFunc(){
    Alert.alert("Register","Hello")
  }

  forgotFunc(){
    Alert.alert("Forgot Password","Hello")
  }

}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: null,
    padding: 20
  },
  logocontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 240,
    height: 240
  }

});

export default Workshop21;
