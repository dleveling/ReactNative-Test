import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  TouchableOpacity } from 'react-native';

class Note extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.valw.date}</Text>
        <Text style={styles.noteText}>{this.props.valw.note}</Text>
        
        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
   noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
   },
   deleteButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
    borderRadius: 15,
   },
   deleteButtonText: {
     color: 'white'
   }

});

export default Note;
