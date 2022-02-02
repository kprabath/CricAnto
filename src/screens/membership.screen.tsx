import React from 'react';

import {StyleSheet, View} from 'react-native';
import CricantoText from '../components/cricantoText';
import {getScaledNumber} from '../library/utils';
import Colors from '../res/colors';
import {CricantoTextTypes} from '../enums';

import CricantoHeader from '../components/cricantoHeader';

import GoldLogo from '../res/images/Gold.svg';
import SilverLogo from '../res/images/Silver.svg';
import BronzeLogo from '../res/images/Bronze.svg';
import DropdownIcon from '../res/images/DropdownIcon.svg';

const Contribution = () => {
  return (
    <>
      <CricantoHeader headerTitle="Membership " />
      <View style={styles.container}>
        <View style={styles.card1}>
          <GoldLogo />
          <CricantoText
            label="Gold"
            style={styles.cardText}
            type={CricantoTextTypes.H2}
          />
          <DropdownIcon />
        </View>
        <View style={styles.card2}>
          <SilverLogo />
          <CricantoText
            label="Silver"
            style={styles.cardText}
            type={CricantoTextTypes.H2}
          />
          <DropdownIcon />
        </View>
        <View style={styles.card3}>
          <BronzeLogo />
          <CricantoText
            label="Bronz"
            style={styles.cardText}
            type={CricantoTextTypes.H2}
          />
          <DropdownIcon />
        </View>
      </View>
    </>
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
  card1: {
    flexDirection: 'row',
    alignItems: 'center',
    height: getScaledNumber(70),
    borderRadius: 30,
    width: '100%',
    backgroundColor: '#37D4A5',
    justifyContent: 'space-between',
    paddingHorizontal: getScaledNumber(20),
  },
  card2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: getScaledNumber(70),
    borderRadius: 30,
    width: '100%',
    backgroundColor: '#37CBD4',
    justifyContent: 'space-between',
    paddingHorizontal: getScaledNumber(20),
  },
  card3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getScaledNumber(20),
    height: getScaledNumber(70),
    borderRadius: 30,
    width: '100%',
    backgroundColor: '#BED437',
    justifyContent: 'space-between',
    padding: getScaledNumber(10),
  },

  cardText: {
    color: Colors.black,
    fontWeight: '700',
  },
});

export default Contribution;
