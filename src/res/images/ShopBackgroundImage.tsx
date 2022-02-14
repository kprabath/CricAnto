import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import {getSVGDynamicHeightOrWidth} from '../../library/utils';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={getSVGDynamicHeightOrWidth(271, 375, props.width, 'Width')}
    fill="none"
    viewBox="0 0 375 231"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M375 193c0 20.987-17.013 38-38 38H38c-20.987 0-38-17.013-38-38V20C0 8.954 8.954 0 20 0h335c11.046 0 20 8.954 20 20v173Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-134.5}
        y1={327.5}
        x2={444.5}
        y2={-43.5}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
