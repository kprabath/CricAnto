import React from 'react';
import {ImageURISource, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {CricantoTextTypes} from '../enums';
import CricantoText from './cricantoText';
import {getScaledNumber} from '../library/utils';

import Team1 from '../res/images/TeamLogo1.svg';
import Team2 from '../res/images/TeamLogo2.svg';
import colors from '../res/colors';
// import Search from '../res/images/Search.svg';
// import Add from '../res/images/AddIcon.svg';

export type IProps = {
  title?: string;
  team1Image?: ImageURISource;
  team2Image?: ImageURISource;
  description?: string;
  onPress?: Function;
};

export const MatchDetailCard = (props: IProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.statusContainer}>
      <>
        <CricantoText style={styles.teamText} label="ST ANT  VS  TCK" />

        <View style={styles.scoreContainer}>
          <View style={styles.score}>
            <Team1 />
            <CricantoText label="147/3" style={styles.scoreText} />
          </View>
          <View style={styles.score}>
            <CricantoText label="yet to bat" style={styles.scoreText} />
            <Team2 />
          </View>
        </View>
        <CricantoText
          label="WATCH LIVE"
          type={CricantoTextTypes.H3}
          style={styles.liveText}
        />
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamText: {
    fontWeight: '600',
    color: colors.darkGray,
    marginBottom: getScaledNumber(10),
    textAlign: 'center',
    width: '100%',
  },
  scoreText: {
    fontWeight: '700',
    marginHorizontal: getScaledNumber(10),
  },

  statusContainer: {
    flexDirection: 'column',
    paddingVertical: getScaledNumber(15),
    borderRadius: getScaledNumber(16),
    paddingHorizontal: getScaledNumber(10),
    marginBottom: getScaledNumber(15),
    backgroundColor: colors.cricantoLightPurple,
    width: '100%',
  },
  liveText: {
    color: colors.red,
    textAlign: 'center',
    fontWeight: '700',
  },
  searchInput: {
    marginVertical: getScaledNumber(15),
    // width: '100%',
  },
  container: {
    paddingHorizontal: getScaledNumber(20),
    alignItems: 'center',
    flexDirection: 'column',
  },
});
