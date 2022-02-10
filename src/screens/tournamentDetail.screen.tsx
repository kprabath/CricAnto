import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {VIDEO_STREAM_SCREEN} from '../common/constants';

import {CricantoHeader, CricantoInput, CricantoText} from '../components';
import CircleView from '../components/CircleView';
import LiveEventIndicator from '../components/LiveEventIndicator';
import {MatchDetailCard} from '../components/MatchDetailCard';
import ScoreAccordian from '../components/scoreBoard/ScoreAccordian';

import {getScaledNumber} from '../library/utils';
import colors from '../res/colors';

import Search from '../res/images/Search.svg';

const Pressable = ({
  onPress,
  bgColorStyle,
  title,
}: {
  onPress: Function;
  bgColorStyle: string;
  title: string;
}) => (
  <TouchableOpacity onPress={onPress}>
    <CircleView margin={10} height={40} backgroundColors={bgColorStyle}>
      <CricantoText style={styles.white} label={title} />
    </CircleView>
  </TouchableOpacity>
);

export default () => {
  const [cardType, setCardTypeState] = useState<'Score' | 'Over'>('Score');
  const navigate = useNavigation().navigate;
  return (
    <CricantoHeader
      headerTitle="Tournaments"
      backKey
      isScrollView
      headerTitleStyle={styles.headerTitle}>
      <LiveEventIndicator />
      <CricantoInput
        style={styles.searchInput}
        placeholder="Search by events, teams"
        Icon={Search}
      />
      <View style={styles.content}>
        <MatchDetailCard onPress={() => navigate(VIDEO_STREAM_SCREEN)} />
        <View style={styles.descriptorContainer}>
          <Pressable
            bgColorStyle={colors.cricantoLightBlue}
            title="SCORECARD"
            onPress={() => setCardTypeState('Score')}
          />
          <Pressable
            bgColorStyle={colors.linearColor1}
            title="OVERS"
            onPress={() => setCardTypeState('Over')}
          />
        </View>

        <View style={styles.scoreList}>
          {/* lets swap the list  */}
          {cardType === 'Score' ? (
            <ScoreAccordian cardType={'Score'} team="ST ANT" score="147/3" />
          ) : (
            <ScoreAccordian cardType={'Over'} team="ST ANT" score="147/3" />
          )}
        </View>
      </View>
    </CricantoHeader>
  );
};

const styles = StyleSheet.create({
  scoreList: {
    marginVertical: getScaledNumber(42),
  },
  descriptorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {color: colors.white, fontWeight: 'bold'},
  headerTitle: {
    fontWeight: 'bold',
  },
  searchInput: {
    margin: getScaledNumber(15),
    // width: '100%',
  },
  content: {
    padding: getScaledNumber(15),
  },
});
