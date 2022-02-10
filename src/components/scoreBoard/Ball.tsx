import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {CricantoText} from '..';
import {getScaledNumber} from '../../library/utils';
import colors from '../../res/colors';
import CircleView from '../CircleView';

type IProps = {
  score: '0' | '1' | '2' | '3' | '4' | '5' | '6' | 'w' | 'n' | 'wd';
};

export default ({score}: IProps) => {
  const color = useMemo(
    () =>
      (score === '0' && colors.veryDarkGrey) ||
      (score === '1' && colors.white) ||
      (score === '4' && colors.lightestBlue) ||
      (score === 'wd' && colors.yellowishGreen) ||
      (score === 'w' && colors.darkRed),
    [score],
  );

  return (
    <CircleView
      margin={3}
      height={getScaledNumber(25)}
      width={getScaledNumber(25)}
      padding={0}
      backgroundColors={color as string}>
      <CricantoText style={styles.text} label={score} />
    </CircleView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 8,
  },
});
