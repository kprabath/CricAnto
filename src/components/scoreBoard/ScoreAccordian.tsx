/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  EasingNode,
  Extrapolate,
  Value,
} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {CricantoText} from '..';
import CircleView from '../CircleView';
import ScoreBoard from './ScoreBoard';

import Triangle from '../../res/images/Triangle.svg';
import {getScaledNumber, SCREEN_WIDTH} from '../../library/utils';
import colors from '../../res/colors';
import OverBoard from './OverBoard';

type Iprops = {
  team?: string;
  score: string;
  cardType?: 'Score' | 'Over';
};

export default (props: Iprops) => {
  const animatedHeight = new Value(1);
  const isDown = useRef(false);
  const containerHeight = useRef<number>(1);

  const animateHeight = () => {
    const heightToAnimate = !isDown.current ? containerHeight.current : 1;
    Animated.timing(animatedHeight, {
      toValue: heightToAnimate,
      easing: EasingNode.inOut(EasingNode.ease),
      duration: 500,
    }).start(() => {
      isDown.current = !isDown.current;
    });
  };

  const opacity = animatedHeight.interpolate({
    inputRange: [1, containerHeight.current],
    outputRange: [0, 1],
  });

  const rotate = animatedHeight.interpolate({
    inputRange: [1, containerHeight.current],
    outputRange: ['0deg', '180deg'],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={animateHeight}>
        <CircleView
          colors={['#92A3FD', '#9DCEFF']}
          width={SCREEN_WIDTH * 0.9}
          height={getScaledNumber(60)}>
          <View style={styles.accordianContainer}>
            <CricantoText style={styles.text} label={props.team} />
            <View style={styles.rightContent}>
              <CricantoText
                style={[styles.text, styles.scoreText]}
                label={props.score}
              />
              <Animated.View style={{transform: [{rotateZ: rotate}]}}>
                <Triangle />
              </Animated.View>
            </View>
          </View>
        </CircleView>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.scoreCard1,
          {
            height: animatedHeight,
            opacity: opacity,
            backgroundColor:
              props.cardType === 'Score' ? '#222232' : colors.darkGreeb,
          },
        ]}>
        <View
          onLayout={e =>
            (containerHeight.current = e.nativeEvent.layout.height)
          }>
          {props.cardType === 'Score' ? <ScoreBoard /> : <OverBoard />}
          {/* <ScoreBoard />
          <OverBoard /> */}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: getScaledNumber(10),
  },
  accordianContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: getScaledNumber(20),
  },
  scoreCard1: {
    borderRadius: 20,
    marginTop: 20,
    overflow: 'hidden',
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowItem: {
    flex: 0.2,
    textAlign: 'center',
    color: '#fff',
  },
  scoreBoardItem: {
    flexDirection: 'row',
    height: getScaledNumber(60),
    alignItems: 'center',
  },
  scoreBoard1description: {flex: 0.5, paddingHorizontal: 20},
  scoreBoard1Value: {flex: 0.5, flexDirection: 'row'},
  scoreText: {
    marginRight: 20,
  },

  // overBoardStyles
  overBoardRowItem: {
    flexDirection: 'row',
    height: getScaledNumber(60),
    alignItems: 'center',
    paddingHorizontal: getScaledNumber(8),
  },
  ballContainer: {
    flex: 0.8,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 5,
  },
  overContainer: {
    flex: 0.2,
  },
  overDescriptionText: {
    color: colors.white,
    marginVertical: 4,
  },
});
