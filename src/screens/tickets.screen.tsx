import React from 'react';

import {StyleSheet, View} from 'react-native';
import {getScaledNumber} from '../library/utils';
import {CricantoHeader} from '../components';

import Ticket from '../res/images/Ticket.svg';

const Tickets = () => {
  return (
    <CricantoHeader headerTitle="Your Tickets" backKey containerStyle={styles.container}>
      <Ticket />
      <Ticket />
      <Ticket />
    </CricantoHeader>
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
