import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import colors from '../../res/colors';
import CircleView from '../CircleView';

export default ({style}: {style?: StyleProp<ViewStyle>}) => (
  <View style={style}>
    <CircleView height={60} width={60} backgroundColors={colors.darkGray} />
  </View>
);
