import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {CricantoText} from '.';
import {getScaledNumber} from '../library/utils';

import colors from '../res/colors';
import LiveCircle from '../res/images/LiveCircle.svg';

type IProps = {
  containerStyle?: StyleProp<ViewStyle>;
  hideEventButton?: boolean;
};

export default (props: IProps) => (
  <View style={[styles.container, props.containerStyle]}>
    <View style={styles.live}>
      <LiveCircle />
      <CricantoText style={styles.liveText} label="LIVE" />
    </View>
    {!props.hideEventButton && (
      <CricantoText style={styles.eventText} label="EVENTS" />
    )}
  </View>
);

const styles = StyleSheet.create({
  live: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.black,
    padding: getScaledNumber(10),
    paddingHorizontal: getScaledNumber(14),
    alignItems: 'center',
    marginHorizontal: getScaledNumber(10),
  },
  eventText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: getScaledNumber(10),
  },
  liveText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.lighterDark,
    marginLeft: getScaledNumber(10),
  },
  container: {
    margin: getScaledNumber(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
