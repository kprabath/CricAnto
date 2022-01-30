import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

import {CricantoTextTypes} from '../enums';
import colors from '../res/colors';
import {getScaledNumber} from '../library/utils';

const CricantoText = ({label, type, style}: IProps) => {
  const getStyle = () => {
    if (type === CricantoTextTypes.DISPLAY) return styles.display;
    if (type === CricantoTextTypes.H1) return styles.headerOne;
    if (type === CricantoTextTypes.H2) return styles.headerTwo;
    if (type === CricantoTextTypes.H3) return styles.headerThree;
    if (type === CricantoTextTypes.H4) return styles.headerFour;
    if (type === CricantoTextTypes.CUSTOM) return styles.custom;
    if (type === CricantoTextTypes.SUBTITLE) return styles.subtitle;
    if (type === CricantoTextTypes.BODY_SMALL) return styles.bodySmall;
    if (type === CricantoTextTypes.EYEBROW) return styles.eyebrow;
    if (type === CricantoTextTypes.BUTTON_LBL) return styles.buttonLbl;
    if (type === CricantoTextTypes.HINT) return styles.hint;
    if (type === CricantoTextTypes.ERROR) return styles.error;
  };

  return (
    <Text allowFontScaling={false} style={[getStyle(), style]}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  display: {
    fontSize: getScaledNumber(40),
    color: colors.black,
  },
  headerOne: {
    fontSize: getScaledNumber(28),
    color: colors.black,
  },
  headerTwo: {
    fontSize: getScaledNumber(24),
    color: colors.black,
  },
  headerThree: {
    fontSize: getScaledNumber(20),
    color: colors.cricantoBlack,
  },
  headerFour: {
    fontSize: getScaledNumber(14),
    color: colors.black,
  },
  custom: {
    fontSize: getScaledNumber(16),
    color: colors.black,
  },
  subtitle: {
    fontSize: getScaledNumber(18),
    color: colors.black,
  },
  bodySmall: {
    fontSize: getScaledNumber(16),
    color: colors.cricantoBlack,
    weight: '400',
  },
  eyebrowThin: {
    fontSize: getScaledNumber(12),
    color: colors.black,
  },
  eyebrow: {
    fontSize: getScaledNumber(12),
    color: colors.black,
  },
  buttonLbl: {
    fontSize: getScaledNumber(12),
    color: colors.black,
  },
  hint: {
    fontSize: getScaledNumber(12),
    color: colors.black,
  },
  error: {
    fontSize: getScaledNumber(12),
    color: colors.primary,
  },
  tiny: {
    fontSize: getScaledNumber(10),
    color: colors.black,
  },
});

export interface IProps {
  label?: string;
  type?: string;
  style?: StyleProp<TextStyle>;
}

export default CricantoText;
