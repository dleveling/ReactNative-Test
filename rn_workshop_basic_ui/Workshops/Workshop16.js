/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  SectionList} from 'react-native';

class Workshop16 extends Component {
    render() {
      return(
        <View style = {{flex: 1}}>
          <FlatList style={{paddingLeft: 32, paddingRight: 32}} data={[1,2,3,4,5,6,7,8,9,10]}
            ListHeaderComponent={this.renderHeader}
            renderItem={({item})=> this.renderItems(item)}
          />
        </View>
      );
    }

  renderHeader() {
    return (
      <View>
        <Image style = {{width: '100%', height: 90, resizeMode: 'contain', marginTop: 40, marginBottom: 40}}source={require('../Images/marvel.png')}/>
      </View>
    );
  }

  renderItems(item) {

    const {container, avatar, titleAndSubtitle, titleHeader} = styles;

    return (
      <View style = {container}>
        <View style = {titleHeader}>
          <Image style = {avatar} source={require('../Images/logo.png')}/>
            <View style = {titleAndSubtitle}>
              <Text>Marvel Cinematic Universe</Text>
              <Text>Spiderman - into the spider verse</Text>
            </View>
        </View>
        <Image style = {{width: '100%', height: 250 }} source={require('../Images/miles.jpg')}/>
      </View>
    );
  }

}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'skyblue',
    marginBottom: 30,
    borderRadius: 10
  },
  avatar: {
    width: 45, 
    height: 45, 
    resizeMode:'contain', 
    borderRadius: 45/2
  },
  titleAndSubtitle: {
    flexDirection:'column', 
    marginTop: 5, 
    marginLeft: 5
  },
  titleHeader: {
    flexDirection: 'row', 
    margin: 16
  }
});

export default Workshop16;