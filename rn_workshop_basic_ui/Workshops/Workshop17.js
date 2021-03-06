import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity } from 'react-native';

  const items = [0, 1, 2, 3, 4, 5, 6, 7];
  
class Workshop17 extends Component {

  state = {
    index: new Animated.Value(0),
    track: new Animated.Value(0),
  };
                  
  componentDidMount = () => {
    Animated.timing(this.state.index, {
      duration: 500,
      toValue: this.state.track,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {index} = this.state;

    return (
      <View style = {styles.container}>
        <View style = {styles.background}>
          {items.map(i => {
            const translateX = Animated.multiply(Animated.subtract(index, i), 40);
            const transform = {
              transform: [{translateX}],
            }
             return <TouchableOpacity style={styles.circle} key={i} onPress={() => this.state.track.setValue(i)}>
                       <Animated.View style={[styles.mover, transform]} />
                    </TouchableOpacity>
            })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  background: {
    flexDirection: "row",
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: "#ddd",
    borderRadius: 20,
    marginRight: 4,
    overflow: "hidden",
  }, mover: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "tomato",
  },
});

export default Workshop17;
