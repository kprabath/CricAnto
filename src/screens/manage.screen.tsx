import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {
  CricantoText,
  CricantoModal,
  CricantoButton,
  CricantoHeader,
} from '../components';
import {getScaledNumber} from '../library/utils';
import Colors from '../res/colors';
import {CricantoTextTypes} from '../enums';

const TopTab = createMaterialTopTabNavigator();

const Manage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const ManageRoutes = () => {
    return (
      <TopTab.Navigator>
        <TopTab.Screen name="Pending" component={ActiveTab} />
        <TopTab.Screen name="Active" component={ActiveTab} />
        <TopTab.Screen name="Deleted" component={ActiveTab} />
      </TopTab.Navigator>
    );
  };

  const modalView = () => (
    <View style={styles.modalContainer}>
      <View style={styles.checkboxContainer}>
        <CricantoText
          label="Approve"
          type={CricantoTextTypes.BODY_SMALL}
          style={styles.checkBoxTextStyle}
        />
        <CheckBox
          boxType="square"
          lineWidth={1.0}
          // value={isSelected}
          // onValueChange={setSelection}
          style={styles.checkbox}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <CricantoText
          label="Reject"
          type={CricantoTextTypes.BODY_SMALL}
          style={styles.checkBoxTextStyle}
        />
        <CheckBox
          boxType="square"
          lineWidth={1.0}
          // value={isSelected}
          // onValueChange={setSelection}
          style={styles.checkbox}
        />
      </View>
      <CricantoButton
        label="Done"
        containerStyle={styles.btnStyle}
        onPress={() => setModalVisible(false)}
      />
    </View>
  );
  const card = () => (
    <View style={styles.actionCard}>
      <View style={styles.sampleBox} />
      <View style={styles.btnContent}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.takeBtn}>
          <CricantoText
            label="Take Action"
            type={CricantoTextTypes.H4}
            style={styles.actionText}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.viewBtn}>
          <CricantoText
            label="View Original"
            type={CricantoTextTypes.H4}
            style={styles.actionText}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const ActiveTab = () => (
    <>
      {card()}
      {card()}
      {card()}
    </>
  );
  return (
    <CricantoHeader enableHeader headerTitle="Manage" backKey>
      {ManageRoutes()}
      <CricantoModal modalVisible={modalVisible}>{modalView()}</CricantoModal>
    </CricantoHeader>
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
  modalContainer: {
    padding: getScaledNumber(30),
  },

  btnStyle: {
    width: '50%',
    marginTop: getScaledNumber(20),
    alignSelf: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: getScaledNumber(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkbox: {
    height: 16,
    width: 16,
    marginRight: 8,
    marginLeft: 18,
  },
  checkBoxTextStyle: {
    color: Colors.darkGray,
    fontWeight: '600',
  },
  actionText: {
    textAlign: 'center',
    fontWeight: '500',
  },
  btnContent: {
    height: '100%',
    justifyContent: 'space-between',
  },
  sampleBox: {
    width: getScaledNumber(90),
    height: getScaledNumber(90),
    backgroundColor: Colors.darkGray,
  },
  takeBtn: {
    backgroundColor: '#9DCEFF',
    borderRadius: 11,
    padding: 10,
  },
  viewBtn: {
    backgroundColor: '#92A3FD',
    borderRadius: 11,
    padding: 10,
    marginTop: getScaledNumber(5),
  },
  actionCard: {
    height: getScaledNumber(110),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 2,
    paddingVertical: getScaledNumber(20),
    paddingHorizontal: getScaledNumber(20),
    borderBottomColor: Colors.lightGray,
  },

  cardText: {
    color: Colors.black,
    fontWeight: '700',
  },
});

export default Manage;
