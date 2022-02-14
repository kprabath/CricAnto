import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';

import {CricantoText} from '..';

import {getScaledNumber} from '../../library/utils';

import Like from '../../res/images/Like.svg';
import Share from '../../res/images/Share.svg';

type ICProps = {
  icon?: ReactElement;
  label?: string | number;
};

const IconContainer = ({icon, label}: ICProps) => (
  <View style={styles.iconContainer}>
    {icon}
    <CricantoText style={styles.iconText} label={label} />
  </View>
);

export default () => (
  <View style={styles.container}>
    <View style={styles.reactionIconContainer}>
      <IconContainer icon={<Like />} label={2} />
      <IconContainer icon={<Share />} label={'Reply'} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: getScaledNumber(10),
  },
  reactionIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconText: {
    paddingHorizontal: getScaledNumber(10),
  },
});
