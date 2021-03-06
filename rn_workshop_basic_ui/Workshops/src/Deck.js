import React, { Component } from 'react';
import { 
    View,
    Animated,
    PanResponder,
    Dimensions,
    LayoutAnimation,
    UIManager,
    StyleSheet,} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH
const SWIPE_OUT_DURATION = 250;

class Deck extends Component {

    constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            position.setValue({x: gesture.dx ,y: gesture.dy });
        },
        onPanResponderRelease: (event, gesture) => {
          if (gesture.dx > SWIPE_THRESHOLD) {
            this.forceSwipe('right');
          } else if (gesture.dx < -SWIPE_THRESHOLD) {
            this.forceSwipe('left');
          } else {
            this.resetPosition();
          }
        }
    });
    
    this.state = { panResponder, position };
   }

  render() {
    return (
      <View>
          {this.renderCards()}
      </View>
    );
  }

  getCardStyle() {
    const {  position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return{
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: {x: 0, y: 0}
    }).start();
  }

  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH
    Animated.timing(this.state.position, {
      toValue: { x, y: 0},
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index];
    // direction = 'right' ? onSwipeRight() : onSwipeLeft();
    direction = 'right' ? alert('Right') : alert('Left');
  }

  renderCards() {
      return this.props.data.map( (item, index) => {
        if(index === 0) {
            return(
                <Animated.View
                key={item.id}
                style={this.getCardStyle()}
                {...this.state.panResponder.panHandlers}    
                >
                    {this.props.renderCard(item)}
                </Animated.View>
            );
        }
        return this.props.renderCard(item);
      });
  }

}

export default Deck;