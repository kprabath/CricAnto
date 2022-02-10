import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CricantoTextTypes} from '../enums';
import {getScaledNumber} from '../library/utils';
import {CricantoHeader, CricantoInput, CricantoText} from '../components';

import Team1 from '../res/images/TeamLogo1.svg';
import Team2 from '../res/images/TeamLogo2.svg';
import Search from '../res/images/Search.svg';
import Add from '../res/images/AddIcon.svg';

import Colors from '../res/colors';

const Home = () => {

  return (
    <CricantoHeader
      containerStyle={styles.container}
      headerTitle="Tournaments"
      RightIcon={Add}>
      <CricantoInput
        style={styles.searchInput}
        placeholder="Search by events, teams"
        Icon={Search}
      />
      <View style={styles.statusContainer}>
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
      </View>

      <View style={styles.statusContainer}>
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
      </View>

      <View style={styles.statusContainer}>
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
      </View>
    </CricantoHeader>
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
    color: Colors.darkGray,
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
    backgroundColor: Colors.cricantoLightPurple,
    width: '100%',
  },
  liveText: {
    color: Colors.red,
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

export default Home;
