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
  SectionList} from 'react-native';

export default class Workshop14 extends Component {
  render() {
    return(
    <ScrollView>
      <View style = {styles.container}>
          <FlatList
              data = {[
                {key : 'Spiderman'},
                {key : 'IronMan'},
                {key : 'QuickSilver'},
                {key : 'Hawkeye'},
                {key : 'BlackWidow'},
                {key : 'Thor'},
                {key : 'Vision'},
                {key : 'Hulk'},
                {key : 'AntMan'}
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
      </View>

      <View style = {styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  container : {
    flex: 1,
    padding: 22
  },
  items: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(102,204,255,1.0)',
  }
})

