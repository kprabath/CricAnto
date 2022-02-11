/* eslint-disable react-native/no-inline-styles */
import React, {ReactElement} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {getScaledNumber} from '../library/utils';
import colors from '../res/colors';

type bgKeyType = keyof typeof colors;

export type CircleIProps = {
  children: ReactElement;
  backgroundColors?: typeof colors[bgKeyType];
  height: number;
  width?: number;
  padding?: number;
  margin?: number;
  colors?: string[];
  style?: StyleProp<ViewStyle>;
};

const CircleView = (props: CircleIProps) => (
  <LinearGradient
    colors={props.colors ?? [props.backgroundColors, props.backgroundColors]}
    style={{
      height: props.height,
      width: props.width ?? 'auto',
      borderRadius: props.height / 2,
      padding: props.padding ?? getScaledNumber(10),
      margin: props.margin ?? 0,
      justifyContent: 'center',
      ...props.style,
    }}>
    {props.children}
  </LinearGradient>
);

CircleView.defaultProps = {
  style: {},
};

export default CircleView;
