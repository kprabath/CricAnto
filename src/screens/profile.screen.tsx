import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Switch, TouchableOpacity} from 'react-native';
import {CricantoTextTypes} from '../enums';
import {getScaledNumber} from '../library/utils';
import {TICKETS_SCREEN} from '../common/constants';
import {CricantoHeader, CricantoText} from '../components';
import {useSelector} from 'react-redux';
import {Reducers} from '../types';

import UserDP from '../res/images/UserDP.svg';
import UserProfile from '../res/images/UserProfile.svg';
import Shield from '../res/images/Shield.svg';
import Notification from '../res/images/Notification.svg';
import Setting from '../res/images/Setting.svg';
import Graph from '../res/images/Graph.svg';
import Message from '../res/images/MessageBlue.svg';
import RightArrow from '../res/images/RightArrow.svg';

import Colors from '../res/colors';

const Profile = () => {
  const navigation = useNavigation();
  const name = useSelector((state: Reducers) => state.auth.userInfo?.name);
  const address = useSelector(
    (state: Reducers) => state.auth.userInfo?.address,
  );

  return (
    <CricantoHeader enableHeader headerTitle="Profile">
      <View style={styles.container}>
        <View style={styles.userContent}>
          <UserDP />
          <View style={styles.editBtnContent}>
            <CricantoText
              label={name}
              type={CricantoTextTypes.H4}
            />
            <TouchableOpacity style={styles.editBtn}>
              <CricantoText
                label="Edit"
                type={CricantoTextTypes.H4}
                style={styles.editText}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.userDetailsContent}>
          {/* <View style={styles.infoCard}>
            <CricantoText
              label="1993"
              type={CricantoTextTypes.H4}
              style={styles.infoCardText}
            />
            <CricantoText
              label="Batch"
              type={CricantoTextTypes.BUTTON_LBL}
              style={styles.infoCardSubText}
            />
          </View> */}
          <View style={styles.infoCard}>
            <CricantoText
              label={address}
              type={CricantoTextTypes.H4}
              style={styles.infoCardText}
            />
            <CricantoText
              label="City"
              type={CricantoTextTypes.BUTTON_LBL}
              style={styles.infoCardSubText}
            />
          </View>
          {/* <View style={styles.infoCard}>
            <CricantoText
              label="22yo"
              type={CricantoTextTypes.H4}
              style={styles.infoCardText}
            />
            <CricantoText
              label="Age"
              type={CricantoTextTypes.BUTTON_LBL}
              style={styles.infoCardSubText}
            />
          </View> */}
        </View>
        <View style={styles.ticketBtnContent}>
          <TouchableOpacity
            style={styles.ticketBtn}
            onPress={() => navigation.navigate(TICKETS_SCREEN)}>
            <CricantoText
              label="My Tickets"
              type={CricantoTextTypes.EYEBROW}
              style={styles.ticketBtnText}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.commonCard}>
          <CricantoText
            label="Account"
            type={CricantoTextTypes.H4}
            style={styles.commonCardText}
          />
          <TouchableOpacity style={styles.commonCardBtn}>
            <View style={styles.commonCardLeftContent}>
              <UserProfile />
              <CricantoText
                label="Personal Data"
                type={CricantoTextTypes.BUTTON_LBL}
                style={styles.commonCardBtnText}
              />
            </View>
            <RightArrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.commonCardBtn}>
            <View style={styles.commonCardLeftContent}>
              <Graph />
              <CricantoText
                label="Activity History"
                type={CricantoTextTypes.BUTTON_LBL}
                style={styles.commonCardBtnText}
              />
            </View>
            <RightArrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.commonCardBtn}>
            <View style={styles.commonCardLeftContent}>
              <Shield />
              <CricantoText
                label="Change Password"
                type={CricantoTextTypes.BUTTON_LBL}
                style={styles.commonCardBtnText}
              />
            </View>
            <RightArrow />
          </TouchableOpacity>
        </View>

        <View style={styles.commonCard}>
          <CricantoText
            label="Notification"
            type={CricantoTextTypes.H4}
            style={styles.commonCardText}
          />

          <TouchableOpacity style={styles.commonCardBtn}>
            <View style={styles.commonCardLeftContent}>
              <Notification />
              <CricantoText
                label="Pop-up Notification"
                type={CricantoTextTypes.BUTTON_LBL}
                style={styles.commonCardBtnText}
              />
            </View>
            <Switch style={styles.switchStyle} />
          </TouchableOpacity>
        </View>

        <View style={styles.commonCard}>
          <CricantoText
            label="Other"
            type={CricantoTextTypes.H4}
            style={styles.commonCardText}
          />
          <TouchableOpacity style={styles.commonCardBtn}>
            <View style={styles.commonCardLeftContent}>
              <Message />
              <CricantoText
                label="Contact Us"
                type={CricantoTextTypes.BUTTON_LBL}
                style={styles.commonCardBtnText}
              />
            </View>
            <RightArrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.commonCardBtn}>
            <View style={styles.commonCardLeftContent}>
              <Shield />
              <CricantoText
                label="Privacy Policy"
                type={CricantoTextTypes.BUTTON_LBL}
                style={styles.commonCardBtnText}
              />
            </View>
            <RightArrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.commonCardBtn}>
            <View style={styles.commonCardLeftContent}>
              <Setting />
              <CricantoText
                label="Settings"
                type={CricantoTextTypes.BUTTON_LBL}
                style={styles.commonCardBtnText}
              />
            </View>
            <RightArrow />
          </TouchableOpacity>
        </View>
      </View>
    </CricantoHeader>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: getScaledNumber(20),
    marginVertical: getScaledNumber(20),
  },
  commonCardLeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commonCardBtn: {
    flexDirection: 'row',
    paddingVertical: getScaledNumber(6),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commonCardBtnText: {
    color: Colors.darkGray,
    marginLeft: getScaledNumber(10),
  },
  infoCardSubText: {
    color: Colors.darkGray,
  },
  commonCard: {
    backgroundColor: Colors.white,
    borderRadius: getScaledNumber(16),
    paddingHorizontal: getScaledNumber(20),
    paddingVertical: getScaledNumber(10),
    marginVertical: getScaledNumber(10),
    shadowColor: Colors.shadowColor,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  commonCardText: {
    fontWeight: '600',
    textAlign: 'left',
    paddingBottom: getScaledNumber(10),
  },
  infoCardText: {
    color: Colors.cricantoLightBlue,
    paddingBottom: getScaledNumber(5),
  },
  ticketBtnContent: {
    flexDirection: 'row',
    marginTop: getScaledNumber(15),
  },
  ticketBtnText: {
    fontWeight: '700',
  },
  ticketBtn: {
    backgroundColor: Colors.cricantoLightBlue,
    borderRadius: getScaledNumber(8),
    paddingVertical: getScaledNumber(10),
    paddingHorizontal: getScaledNumber(20),
  },
  infoCard: {
    width: getScaledNumber(95),
    height: getScaledNumber(66),
    borderRadius: getScaledNumber(15),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.white,
    shadowColor: Colors.shadowColor,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    // backgroundColor:'red'
  },
  userDetailsContent: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switchStyle: {
    transform: [{scaleX: 0.7}, {scaleY: 0.7}],
  },
  editBtnContent: {
    height: '100%',
    alignItems: 'center',
  },
  editBtn: {
    backgroundColor: Colors.cricantoLightBlue,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
    width: 100,
  },
  editText: {
    color: Colors.white,
  },
  userContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Profile;
