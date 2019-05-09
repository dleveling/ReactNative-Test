import React, { Component } from 'react';
import { View, Text, Alert, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';

class LoginForm extends Component {

  constructor(props) {
    super(props)
    // Alert.alert("S.H.I.E.L.D.", "Welcome");
  }

  render() {
    return (
      <View style={styles.loginformContainer}>
        <TextInput underlineColorAndroid='transparent' placeholder='Email' style={styles.textInput}/>
        <TextInput underlineColorAndroid='transparent' placeholder='Password' style={styles.textInput}/>
        
        <TouchableOpacity onPress={this.props.loginFunc} style={styles.loginbutton}>
          <Text>LOG IN</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.props.registerFunc} style={styles.registerbutton}>
          <Text>REGISTER</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.props.forgotFunc} style={styles.forgotbutton}>
          <Text>FORGOT PASSWORD</Text>
        </TouchableOpacity>
      
      </View>
    );
  }

}

const styles=StyleSheet.create({
  loginformContainer: {
    alignItems: 'center',
    marginBottom: 40
  },
  textInput: {
    color: '#ffffff',
    alignSelf: 'stretch',
    padding: 12,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: '#fff',
    borderWidth: 0.6,
  },
  loginbutton: {
    backgroundColor: '#ecf0f1',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 10,
  },
  registerbutton: {
    backgroundColor: '#bdc3c7',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 10,
  },
  forgotbutton: {
    backgroundColor: '#e74c3c',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 10,
  }

});

export default LoginForm;
