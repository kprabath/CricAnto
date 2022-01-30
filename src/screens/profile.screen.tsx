import React from 'react';

import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {CricantoTextTypes} from '../enums';
import CricantoText from '../components/cricantoText';
import {getScaledNumber} from '../library/utils';
import {TICKETS_SCREEN} from '../common/constants';

import UserDP from '../res/images/UserDP.svg';
import UserProfile from '../res/images/UserProfile.svg';
import Shield from '../res/images/Shield.svg';
import Notification from '../res/images/Notification.svg';
import Setting from '../res/images/Setting.svg';
import Graph from '../res/images/Graph.svg';
import Message from '../res/images/MessageBlue.svg';
import Colors from '../res/colors';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userContent}>
        <UserDP />
        <View style={styles.editBtnContent}>
          <CricantoText
            label="Muththaiya Muralitharan"
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
        <View style={styles.infoCard}>
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
        </View>
        <View style={styles.infoCard}>
          <CricantoText
            label="Kandy"
            type={CricantoTextTypes.H4}
            style={styles.infoCardText}
          />
          <CricantoText
            label="City"
            type={CricantoTextTypes.BUTTON_LBL}
            style={styles.infoCardSubText}
          />
        </View>
        <View style={styles.infoCard}>
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
        </View>
      </View>
      <View style={styles.ticketBtnContent}>
        <TouchableOpacity style={styles.ticketBtn}    onPress={() => navigation.navigate(TICKETS_SCREEN)}>
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
          <UserProfile />
          <CricantoText
            label="Personal Data"
            type={CricantoTextTypes.BUTTON_LBL}
            style={styles.commonCardBtnText}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.commonCardBtn}>
          <Graph />
          <CricantoText
            label="Activity History"
            type={CricantoTextTypes.BUTTON_LBL}
            style={styles.commonCardBtnText}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.commonCardBtn}>
          <Shield />
          <CricantoText
            label="Change Password"
            type={CricantoTextTypes.BUTTON_LBL}
            style={styles.commonCardBtnText}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.commonCard}>
        <CricantoText
          label="Notification"
          type={CricantoTextTypes.H4}
          style={styles.commonCardText}
        />
        <TouchableOpacity style={styles.commonCardBtn}>
          <Notification />
          <CricantoText
            label="Pop-up Notification"
            type={CricantoTextTypes.BUTTON_LBL}
            style={styles.commonCardBtnText}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.commonCard}>
        <CricantoText
          label="Other"
          type={CricantoTextTypes.H4}
          style={styles.commonCardText}
        />
        <TouchableOpacity style={styles.commonCardBtn}>
          <Message />
          <CricantoText
            label="Contact Us"
            type={CricantoTextTypes.BUTTON_LBL}
            style={styles.commonCardBtnText}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.commonCardBtn}>
          <Shield />
          <CricantoText
            label="Privacy Policy"
            type={CricantoTextTypes.BUTTON_LBL}
            style={styles.commonCardBtnText}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.commonCardBtn}>
          <Setting />
          <CricantoText
            label="Settings"
            type={CricantoTextTypes.BUTTON_LBL}
            style={styles.commonCardBtnText}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: getScaledNumber(20),
    marginVertical: getScaledNumber(20),
  },
  commonCardBtn: {
    flexDirection: 'row',
    paddingVertical: 6,
    alignItems: 'center',
  },
  commonCardBtnText: {
    color: Colors.darkGray,
    marginLeft: 10,
  },
  infoCardSubText: {
    color: Colors.darkGray,
  },
  commonCard: {
    backgroundColor: Colors.gray98,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  commonCardText: {
    fontWeight: '600',
    textAlign: 'left',
    paddingBottom: 10,
  },
  infoCardText: {
    color: Colors.cricantoLightBlue,
    paddingBottom: 5,
  },
  ticketBtnContent: {
    flexDirection: 'row',
    marginTop: 15,
  },
  ticketBtnText: {
    fontWeight: '500',
  },
  ticketBtn: {
    backgroundColor: Colors.cricantoLightBlue,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  infoCard: {
    width: 95,
    height: 66,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.gray98,
    // backgroundColor:'red'
  },
  userDetailsContent: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
