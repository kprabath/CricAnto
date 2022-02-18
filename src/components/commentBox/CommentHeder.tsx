import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';
import {CricantoText} from '..';

import {getScaledNumber} from '../../library/utils';

type IProps = {
  children?: ReactElement;
};

export default ({children}: IProps) => (
  <View style={styles.container}>
    <View>
      <CricantoText style={styles.text1} label="Esther Howard" />
      <CricantoText style={styles.text2} label="July 25, 2021 2:30 PM" />
    </View>
    {children && children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: getScaledNumber(4),
  },
  text1: {
    fontSize: getScaledNumber(16),
    fontWeight: '600',
    lineHeight: getScaledNumber(19),
    color: '#1D2E89',
  },
  text2: {
    fontSize: getScaledNumber(14),
    fontWeight: '400',
    color: '#6B7193',
    lineHeight: getScaledNumber(17),
  },
});
