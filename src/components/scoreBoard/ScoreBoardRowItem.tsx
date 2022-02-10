import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CricantoText} from '..';

import {getScaledNumber} from '../../library/utils';
import colors from '../../res/colors';

type S1Props = {
  label: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
};
const ScoreBoardRowItem = ({
  label,
  value1,
  value2,
  value3,
  value4,
  value5,
}: S1Props) => (
  <View style={styles.scoreBoardItem}>
    <View style={styles.scoreBoard1description}>
      <CricantoText style={{color: colors.white}} label={label} />
    </View>
    <View style={styles.scoreBoard1Value}>
      <CricantoText style={styles.rowItem} label={value1} />
      <CricantoText style={styles.rowItem} label={value2} />
      <CricantoText style={styles.rowItem} label={value3} />
      <CricantoText style={styles.rowItem} label={value4} />
      <CricantoText style={styles.rowItem} label={value5} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  accordianContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: getScaledNumber(20),
  },
  scoreCard1: {
    backgroundColor: '#222232',
    borderRadius: 20,
    marginTop: 20,
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowItem: {
    flex: 0.2,
    textAlign: 'center',
    color: '#fff',
  },
  scoreBoardItem: {
    flexDirection: 'row',
    height: getScaledNumber(60),
    alignItems: 'center',
  },
  scoreBoard1description: {flex: 0.5, paddingHorizontal: 20},
  scoreBoard1Value: {flex: 0.5, flexDirection: 'row'},
  scoreText: {
    marginRight: 20,
  },
});

export default ScoreBoardRowItem;
