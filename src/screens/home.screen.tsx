import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Switch, TouchableOpacity} from 'react-native';
import {CricantoTextTypes} from '../enums';
import {getScaledNumber} from '../library/utils';
import {NOTIFICATION_SCREEN, UPLOAD_SCREEN} from '../common/constants';
import {CricantoHeader, CricantoText} from '../components';

import Team1 from '../res/images/TeamLogo1.svg';
import Team2 from '../res/images/TeamLogo2.svg';
import Ticket from '../res/images/Ticket.svg';
import Notification from '../res/images/NotificationIcon.svg';
import Add from '../res/images/AddIcon.svg';
import Banner from '../res/images/NoticeBanner.svg';

import Colors from '../res/colors';

const Home = () => {
  const navigation = useNavigation();

  return (
    <CricantoHeader
      enableHeader
      containerStyle={styles.container}
      headerTitle="Hello James"
      RightIcon={Notification}
      rightIconAction={() => navigation.navigate(NOTIFICATION_SCREEN)}>
      <TouchableOpacity
        style={styles.uploadContainer}
        onPress={() => navigation.navigate(UPLOAD_SCREEN)}>
        <CricantoText
          style={styles.updateText}
          label="UPDATES"
          type={CricantoTextTypes.BODY_SMALL}
        />

        <Add />
      </TouchableOpacity>

      <Banner />
      <View style={styles.topEventsContent}>
        <CricantoText
          style={styles.eventText}
          label="Top Events"
          type={CricantoTextTypes.BODY_SMALL}
        />
        <View style={styles.liveContent}>
          <CricantoText
            style={styles.liveText}
            label="LIVE"
            type={CricantoTextTypes.BODY_SMALL}
          />
          <Switch ios_backgroundColor="#800000" />
        </View>
      </View>
      <CricantoText
        style={styles.activityStatusText}
        label="Activity Status"
        type={CricantoTextTypes.BODY_SMALL}
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
      </View>
      <Ticket />
    </CricantoHeader>
  );
};

const styles = StyleSheet.create({
  uploadContainer: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    marginTop: getScaledNumber(10),
  },
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
  activityStatusText: {
    fontWeight: '600',
    color: Colors.darkGray,
    marginVertical: getScaledNumber(15),
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
  topEventsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: getScaledNumber(15),
    borderRadius: getScaledNumber(16),
    paddingHorizontal: getScaledNumber(10),
    backgroundColor: Colors.cricantoLightPurple,
    width: '100%',
  },
  container: {
    paddingHorizontal: getScaledNumber(20),
    alignItems: 'center',
    flexDirection: 'column',
  },
  liveContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventText: {
    fontWeight: '600',
    color: Colors.darkGray,
  },
  updateText: {
    fontWeight: '600',
    color: Colors.darkGray,
    marginTop: getScaledNumber(10),
  },
  liveText: {
    fontWeight: '700',
    marginRight: getScaledNumber(10),
  },
});

export default Home;
