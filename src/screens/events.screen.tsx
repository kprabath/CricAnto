import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {getScaledNumber, SCREEN_WIDTH} from '../library/utils';
import {CricantoHeader, CricantoInput} from '../components';
import LiveEventIndicator from '../components/LiveEventIndicator';
import {EVENT_DETAIL_SCREEN} from '../common/constants';

import Ticket from '../res/images/Ticket.svg';
import Search from '../res/images/Search.svg';

const DATA = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
    id: '4',
  },
];
const Event = () => {
  const navigation = useNavigation();

  const card = () => (
    <TouchableOpacity
      onPress={() => navigation.navigate(EVENT_DETAIL_SCREEN)}
      style={styles.cardContainer}>
      <Ticket />
    </TouchableOpacity>
  );
  return (
    <CricantoHeader
      enableHeader
      containerStyle={styles.container}
      headerTitle="Events">
      <LiveEventIndicator />
      <CricantoInput
        style={styles.searchInput}
        placeholder="Search by events, teams"
        Icon={Search}
      />
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        renderItem={card}
        keyExtractor={item => item.id}
      />
    </CricantoHeader>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    marginVertical: getScaledNumber(15),
    // width: '100%',
  },
  cardContainer: {
    marginBottom: getScaledNumber(10),
    width: SCREEN_WIDTH - getScaledNumber(60),
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: getScaledNumber(30),
    marginVertical: getScaledNumber(20),
    justifyContent: 'space-between',
  },
});

export default Event;
