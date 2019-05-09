import React, { Component } from 'react';
import { View, 
        Text,
        TextInput,
        ScrollView ,
        TouchableOpacity,
        StyleSheet
         } from 'react-native';
import Note from './Note'

class Main extends Component {

  constructor() {
    super();
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }

  render() {

    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} valw={val}
          deleteMethod={ ()=> this.deleteNote(key)} />
    });

    return (
      <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.headerText}>*-NOTER-*</Text>
        </View>
      
        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>

        <View style={styles.footer}>
            <TextInput 
            style={styles.textInput} 
            placeholder='>Note' 
            placeholderTextColor='white' 
            underlineColorAndroid='transparent' 
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}>



            </TextInput>
        </View>

        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

      </View>
    );
  }

  addNote() {
    if (this.state.noteText){
      var d = new Date();
      this.state.noteArray.push({
        'date': d.getFullYear() +
        "/" + (d.getMonth() + 1) + 
        "/" + d.getDate(),
        'note': this.state.noteText
      });
      this.setState({noteArray: this.state.noteArray})
      this.setState({noteText: ''});
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray})
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#add',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 45,
    height: 45,
    borderRadius: 27.5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 2,
    marginLeft: 1
  }

});

export default Main;
