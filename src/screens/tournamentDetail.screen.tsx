import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {VIDEO_STREAM_SCREEN} from '../common/constants';

import {CricantoHeader, CricantoInput, CricantoText} from '../components';
import CircleView from '../components/CircleView';
import LiveEventIndicator from '../components/LiveEventIndicator';
import {MatchDetailCard} from '../components/MatchDetailCard';
import ScoreAccordian from '../components/scoreBoard/ScoreAccordian';

import {getScaledNumber, SCREEN_WIDTH} from '../library/utils';
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
  const navigate = useNavigation().navigate;

  const scrollToIndex = (index: number) =>
    ref.current.scrollToIndex({animated: true, index: index});

  const ref = useRef();
  return (
    <CricantoHeader
      headerTitle="Tournaments"
      backKey
      autoScroll
      isScrollView
      headerTitleStyle={styles.headerTitle}>
      <LiveEventIndicator />
      <CricantoInput
        style={styles.searchInput}
        placeholder="Search by events, teams"
        Icon={Search}
      />
      <View>
        <View style={styles.card}>
          <MatchDetailCard onPress={() => navigate(VIDEO_STREAM_SCREEN)} />
        </View>
        <View style={styles.descriptorContainer}>
          <Pressable
            bgColorStyle={colors.cricantoLightBlue}
            title="SCORECARD"
            onPress={() => scrollToIndex(0)}
          />
          <Pressable
            bgColorStyle={colors.linearColor1}
            title="OVERS"
            onPress={() => scrollToIndex(1)}
          />
        </View>

        <View style={styles.scoreList}>
          {/* lets swap the list  */}
          <FlatList
            ref={ref}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[0, 1]}
            renderItem={({item}) =>
              item <= 0 ? (
                <View style={styles.scoreList}>
                  <ScoreAccordian
                    cardType={'Score'}
                    team="ST ANT"
                    score="147/3"
                  />
                  <ScoreAccordian
                    cardType={'Score'}
                    team="ST ANT"
                    score="147/3"
                  />
                </View>
              ) : (
                <View style={styles.scoreList}>
                  <ScoreAccordian
                    cardType={'Over'}
                    team="ST ANT"
                    score="147/3"
                  />
                  <ScoreAccordian
                    cardType={'Over'}
                    team="ST ANT"
                    score="147/3"
                  />
                </View>
              )
            }
          />
        </View>
      </View>
    </CricantoHeader>
  );
};

const styles = StyleSheet.create({
  scoreList: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  card: {
    marginLeft: 10,
    marginRight: 10,
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
