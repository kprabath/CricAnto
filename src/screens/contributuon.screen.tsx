import React from 'react';

import {StyleSheet, View} from 'react-native';
import CricantoText from '../components/cricantoText';
import {getScaledNumber} from '../library/utils';
import Colors from '../res/colors';
import CricantoHeader from '../components/cricantoHeader';
import {CricantoTextTypes} from '../enums';

const Contribution = () => {
  return (
    <>
    <CricantoHeader headerTitle="Contribution"/>
    <View style={styles.container}>
      <View style={styles.card1}>
        <CricantoText
          label="Rs 50,000"
          style={styles.cardText}
          type={CricantoTextTypes.H2}
        />
      </View>
      <View style={styles.card2}>
        <CricantoText
          label="Rs 50,000"
          style={styles.cardText}
          type={CricantoTextTypes.H2}
        />
      </View>
      <View style={styles.card3}>
        <CricantoText
          label="Rs 50,000"
          style={styles.cardText}
          type={CricantoTextTypes.H2}
        />
      </View>
      <View style={styles.card4}>
        <CricantoText
          label="Contribution"
          style={styles.contributionText}
          type={CricantoTextTypes.H2}
        />
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
    height: getScaledNumber(110),
    borderRadius: 16,
    width: '100%',
    backgroundColor: '#7B0F22',
    justifyContent: 'flex-end',
    padding: getScaledNumber(10),
  },
  card2: {
    height: getScaledNumber(110),
    borderRadius: 16,
    width: '100%',
    backgroundColor: '#1B1B56',
    justifyContent: 'flex-end',
    padding: getScaledNumber(10),
  },
  card3: {
    height: getScaledNumber(110),
    borderRadius: 16,
    width: '100%',
    backgroundColor: '#9DCEFF',
    justifyContent: 'flex-end',
    padding: getScaledNumber(10),
  },
  card4: {
    height: getScaledNumber(110),
    borderRadius: 16,
    width: '100%',
    backgroundColor: '#227575',
    justifyContent: 'flex-end',
    padding: getScaledNumber(10),
  },
  cardText: {
    color: Colors.white,
    fontWeight: '700',
  },
  contributionText: {
    color: Colors.black,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Contribution;
