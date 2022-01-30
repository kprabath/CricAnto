import React from 'react';

import {StyleSheet, View} from 'react-native';
import {getScaledNumber} from '../library/utils';

import Ticket from '../res/images/Ticket.svg';

const Tickets = () => {
  return (
    <View style={styles.container}>
      <Ticket />
      <Ticket />
      <Ticket />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: getScaledNumber(30),
    marginVertical: getScaledNumber(20),
    justifyContent: 'space-between',
  },
});

export default Tickets;
