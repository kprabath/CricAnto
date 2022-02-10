import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {CricantoHeader, CricantoInput} from '../components';
import {MatchDetailCard} from '../components/MatchDetailCard';

import {getScaledNumber} from '../library/utils';
import Colors from '../res/colors';

import Search from '../res/images/Search.svg';
import Add from '../res/images/AddIcon.svg';
import {TOURNAMENTS_DETAIL_SCREEN} from '../common/constants';

const Home = () => {
  const data = [0, 1, 2];
  const navigate = useNavigation().navigate;

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
      <FlatList
        data={data}
        renderItem={() => (
          <MatchDetailCard
            onPress={() => navigate(TOURNAMENTS_DETAIL_SCREEN)}
          />
        )}
      />
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
    flexDirection: 'column',
  },
});

export default Home;
