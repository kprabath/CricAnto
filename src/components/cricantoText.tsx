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
    return styles.default;
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
    color: colors.cricantoLightBlack,
  },
  default:{
    fontSize: getScaledNumber(13),
    color: colors.cricantoLightBlack,
  },
  headerOne: {
    fontSize: getScaledNumber(28),
    color: colors.cricantoLightBlack,
  },
  headerTwo: {
    fontSize: getScaledNumber(24),
    color: colors.cricantoLightBlack,
  },
  headerThree: {
    fontSize: getScaledNumber(20),
    color: colors.cricantoLightBlack,
  },
  headerFour: {
    fontSize: getScaledNumber(14),
    color: colors.cricantoLightBlack,
  },
  custom: {
    fontSize: getScaledNumber(16),
    color: colors.cricantoLightBlack,
  },
  subtitle: {
    fontSize: getScaledNumber(18),
    color: colors.cricantoLightBlack,
  },
  bodySmall: {
    fontSize: getScaledNumber(16),
    color: colors.cricantoLightBlack,
    weight: '400',
  },
  eyebrowThin: {
    fontSize: getScaledNumber(12),
    color: colors.cricantoLightBlack,
  },
  eyebrow: {
    fontSize: getScaledNumber(12),
    color: colors.cricantoLightBlack,
  },
  buttonLbl: {
    fontSize: getScaledNumber(12),
    color: colors.cricantoLightBlack,
  },
  hint: {
    fontSize: getScaledNumber(12),
    color: colors.cricantoLightBlack,
  },
  error: {
    fontSize: getScaledNumber(12),
    color: colors.primary,
  },
  tiny: {
    fontSize: getScaledNumber(10),
    color: colors.cricantoLightBlack,
  },
});

export interface IProps {
  label?: string;
  type?: string;
  style?: StyleProp<TextStyle>;
}

export default CricantoText;
