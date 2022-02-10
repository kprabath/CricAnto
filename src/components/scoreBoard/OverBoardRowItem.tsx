import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CricantoText} from '..';
import Ball from './Ball';

import {getScaledNumber} from '../../library/utils';
import colors from '../../res/colors';

const OverBoardRowItem = () => (
  <View style={styles.overBoardRowItem}>
    <View style={styles.overContainer}>
      <CricantoText style={styles.overDescriptionText} label="Ov 1" />
      <CricantoText style={styles.overDescriptionText} label="4 Runs" />
    </View>
    <View style={styles.ballContainer}>
      <Ball score="1" />
      <Ball score="0" />
      <Ball score="0" />
      <Ball score="4" />
      <Ball score="w" />
      <Ball score="1" />
      <Ball score="wd" />
    </View>
  </View>
);

const styles = StyleSheet.create({
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

export default OverBoardRowItem;
