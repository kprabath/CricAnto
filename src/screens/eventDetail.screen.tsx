import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {getScaledNumber, SCREEN_WIDTH} from '../library/utils';
import {CricantoHeader, CricantoText, CricantoInput} from '../components';
import LiveEventIndicator from '../components/LiveEventIndicator';
import Colors from '../res/colors';

import Ticket from '../res/images/Ticket.svg';
import Search from '../res/images/Search.svg';
import {CricantoTextTypes} from '../enums';

const EventDetail = () => {
  const navigation = useNavigation();

  const card = () => (
    <View style={styles.cardContainer}>
      <Ticket />
    </View>
  );
  return (
    <CricantoHeader
      enableHeader
      backKey
      containerStyle={styles.container}
      headerTitle="Tournament">
      <LiveEventIndicator />
      <CricantoInput
        style={styles.searchInput}
        placeholder="Search by events, teams"
        Icon={Search}
      />
      <Ticket />
      <View style={styles.commonTextContent}>
        <CricantoText
          label="Ticket"
          type={CricantoTextTypes.H4}
          style={styles.commonTextStyle}
        />
      </View>
      <View style={styles.commonTextContent}>
        <CricantoText
          label="Ticket Count"
          type={CricantoTextTypes.H4}
          style={styles.commonTextStyle}
        />

        <CricantoText
          label="33"
          type={CricantoTextTypes.H4}
          style={styles.commonTextStyle}
        />
      </View>
      <View style={styles.commonContent}>
        <CricantoInput placeholder="Amount" style={styles.amountTextInput} />
        <TouchableOpacity style={styles.payBtn}>
          <CricantoText label="Pay" style={styles.payBtnText} />
        </TouchableOpacity>
      </View>
    </CricantoHeader>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    marginVertical: getScaledNumber(15),
    // width: '100%',
  },
  commonTextStyle: {
    fontWeight: '600',
  },
  payBtn: {
    borderRadius: getScaledNumber(9),
    paddingVertical: getScaledNumber(9),
    paddingHorizontal: getScaledNumber(20),
    backgroundColor: Colors.cricantoLightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commonContent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: getScaledNumber(20),
  },
  commonTextContent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: getScaledNumber(20),
  },
  amountTextInput: {
    width: '70%',
  },
  payBtnText: {
    fontWeight: '500',
    color: Colors.white,
  },
  cardContainer: {
    marginBottom: getScaledNumber(10),
    width: SCREEN_WIDTH - getScaledNumber(60),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: getScaledNumber(30),
    marginVertical: getScaledNumber(20),
    // justifyContent: 'space-between',
  },
});

export default EventDetail;
