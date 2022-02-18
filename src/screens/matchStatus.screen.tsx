import React from 'react';

import {StyleSheet, View} from 'react-native';
import {getScaledNumber} from '../library/utils';
import {CricantoTextTypes} from '../enums';
import {CricantoHeader, CricantoText} from '../components';

import Ticket from '../res/images/Ticket.svg';
import Colors from '../res/colors';

const MatchStatus = () => {
  return (
    <CricantoHeader
      headerTitle="ST VS TCK"
      backKey
      enableHeader
      containerStyle={styles.container}>
      <Ticket />
      <View style={styles.infoContainer}>
        <View style={styles.textContent}>
          <CricantoText
            label="Ticket Count"
            type={CricantoTextTypes.H3}
            style={styles.countText}
          />
          <CricantoText
            label="33"
            type={CricantoTextTypes.H3}
            style={styles.countText}
          />
        </View>

        <View style={styles.textContent}>
          <CricantoText
            label="Pavilion"
            type={CricantoTextTypes.H4}
            style={styles.normalText}
          />
          <CricantoText
            label="25"
            type={CricantoTextTypes.H4}
            style={styles.normalText}
          />
        </View>

        <View style={styles.textContent}>
          <CricantoText
            label="Normal"
            type={CricantoTextTypes.H4}
            style={styles.normalText}
          />
          <CricantoText
            label="33"
            type={CricantoTextTypes.H4}
            style={styles.normalText}
          />
        </View>
      </View>
    </CricantoHeader>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: getScaledNumber(30),
    marginVertical: getScaledNumber(20),
  },
  countText: {
    fontWeight: '700',
    color: Colors.white,
    marginBottom: getScaledNumber(10),
  },
  textContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  normalText: {
    fontWeight: '600',
    //   color:Colors.darkGray,
    marginBottom: getScaledNumber(10),
  },
  infoContainer: {
    marginTop: getScaledNumber(20),
    width: '100%',

    borderRadius: getScaledNumber(7),
    backgroundColor: Colors.cricantoLightPurple,
    padding: getScaledNumber(15),
  },
});

export default MatchStatus;
