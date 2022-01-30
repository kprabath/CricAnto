import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const getScaledNumber = (size: number = 0) => {
  // based on iphone 11 Pro's scale
  const scale = SCREEN_WIDTH / 375;
  const newSize = size * scale;
  const nearestPixel = PixelRatio.roundToNearestPixel(newSize);

  if (Platform.OS === 'ios') return Math.round(nearestPixel);

  return Math.round(nearestPixel) - 2;
};

export {getScaledNumber};
