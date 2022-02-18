import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {StyleSheet, TouchableOpacity} from 'react-native';
import {getScaledNumber} from '../library/utils';
import {CricantoHeader} from '../components';
import {MATCH_STATUS_SCREEN} from '../common/constants';

import Ticket from '../res/images/Ticket.svg';

const Tickets = () => {
  const navigation = useNavigation();
  return (
    <CricantoHeader
    enableHeader
      headerTitle="Your Tickets"
      backKey
      containerStyle={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(MATCH_STATUS_SCREEN)}>
        <Ticket />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(MATCH_STATUS_SCREEN)}>
        <Ticket />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(MATCH_STATUS_SCREEN)}>
        <Ticket />
      </TouchableOpacity>
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
