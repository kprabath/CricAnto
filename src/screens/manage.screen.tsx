import React from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CricantoText from '../components/cricantoText';
import {getScaledNumber} from '../library/utils';
import Colors from '../res/colors';
import {CricantoTextTypes} from '../enums';

import GoldLogo from '../res/images/Gold.svg';
import SilverLogo from '../res/images/Silver.svg';
import BronzeLogo from '../res/images/Bronze.svg';
import DropdownIcon from '../res/images/DropdownIcon.svg';

const Manage = () => {
  const card = () => (
    <View style={styles.actionCard}>
      <View style={styles.sampleBox} />
      <View style={styles.btnContent}>
        <TouchableOpacity style={styles.takeBtn}>
          <CricantoText label="Take Action" type={CricantoTextTypes.H4} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewBtn}>
          <CricantoText label="View Original" type={CricantoTextTypes.H4} />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      {card()}
      {card()}
      {card()}
      {card()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: getScaledNumber(30),
    marginVertical: getScaledNumber(20),
    justifyContent: 'space-evenly',
  },
  btnContent: {
    height: '100%',
    justifyContent: 'space-between',
  },
  sampleBox: {
    width: getScaledNumber(90),
    height: getScaledNumber(90),
    backgroundColor: Colors.darkGray,
  },
  takeBtn: {
    backgroundColor: '#9DCEFF',
    borderRadius: 11,
    padding: 10,
  },
  viewBtn: {
    backgroundColor: '#92A3FD',
    borderRadius: 11,
    padding: 10,
  },
  actionCard: {
    height: getScaledNumber(110),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 2,
    paddingBottom: getScaledNumber(20),
    borderBottomColor: Colors.lightGray,
  },

  cardText: {
    color: Colors.black,
    fontWeight: '700',
  },
});

export default Manage;
