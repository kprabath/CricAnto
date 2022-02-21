import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {CricantoTextTypes} from '../enums';
import {getScaledNumber} from '../library/utils';
import {TICKETS_SCREEN} from '../common/constants';
import {
  CricantoHeader,
  CricantoModal,
  CricantoText,
  CricantoButton,
} from '../components';
import CheckBox from '@react-native-community/checkbox';

import UserDP from '../res/images/UserDP.svg';
import Menu from '../res/images/MenuIcon.svg';
import Success from '../res/images/Success.svg';

import Colors from '../res/colors';

const UserAccount = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [useRoleModal, setUserRoleModal] = useState(false);
  const navigation = useNavigation();

  const successModal = () => (
    <View style={styles.successModalContainer}>
      <Success />
      <CricantoText
        label="You Susscessfully change 
          User Role"
        type={CricantoTextTypes.BODY_SMALL}
        style={styles.successText}
      />
      <CricantoButton
        label="Continue"
        containerStyle={styles.btnStyle}
        onPress={() => setSuccessModalVisible(false)}
      />
    </View>
  );

  const modalView = () => (
    <View style={styles.modalContainer}>
      <View style={styles.checkboxContainer}>
        <CricantoText
          label="Active"
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
          label="Permemantly Suspend"
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
          label="Temporary Suspend"
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
        onPress={() => {
          setModalVisible(false), setSuccessModalVisible(true);
        }}
      />
    </View>
  );

  const modalView2 = () => (
    <View style={[styles.modalContainer]}>
      <View style={styles.checkboxContainer}>
        <CricantoText
          label="Admin"
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
          label="Editor"
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
          label="User"
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
        onPress={() => {
          setUserRoleModal(false), setSuccessModalVisible(true);
        }}
      />
    </View>
  );
  return (
    <CricantoHeader
      enableHeader
      backKey
      headerTitle="User Management"
      RightIcon={Menu}>
      <View style={styles.container}>
        <View style={styles.userContent}>
          <UserDP />
          <View style={styles.editBtnContent}>
            <CricantoText
              label="Muththaiya Muralitharan"
              type={CricantoTextTypes.H4}
            />
            <TouchableOpacity
              onPress={() => setUserRoleModal(true)}
              style={styles.editBtn}>
              <CricantoText
                label="Edit Role"
                type={CricantoTextTypes.H4}
                style={styles.editText}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoContent}>
          <CricantoText label="Email" />
          <CricantoText label=":  muththaiya@gmail.com" />
        </View>
        <View style={styles.infoContent}>
          <CricantoText label="Mobile Number" />
          <CricantoText label=":  0777123456" />
        </View>

        <View style={styles.statusBtnContainer}>
          <CricantoText label="Status" />
          <CricantoText label="Active" style={styles.statusValue} />
          <TouchableOpacity
            style={styles.statusBtn}
            onPress={() => setModalVisible(true)}>
            <CricantoText
              label="Edit"
              type={CricantoTextTypes.EYEBROW}
              style={styles.statusBtnText}
            />
          </TouchableOpacity>
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
      </View>
      <CricantoModal modalVisible={modalVisible}>{modalView()}</CricantoModal>
      <CricantoModal modalVisible={useRoleModal}>{modalView2()}</CricantoModal>
      <CricantoModal modalVisible={successModalVisible}>
        {successModal()}
      </CricantoModal>
    </CricantoHeader>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: getScaledNumber(20),
    marginVertical: getScaledNumber(20),
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
  successText: {
    marginTop: getScaledNumber(20),
    marginBottom: getScaledNumber(30),
  },
  statusValue: {
    color: Colors.cricantoGreen,
    paddingHorizontal: getScaledNumber(20),
  },
  modalContainer: {
    padding: getScaledNumber(30),
  },

  successModalContainer: {
    padding: getScaledNumber(30),
    alignItems: 'center',
  },
  btnStyle: {
    width: '50%',
    marginTop: getScaledNumber(20),
    alignSelf: 'center',
  },
  infoContent: {
    flexDirection: 'row',
    marginVertical: getScaledNumber(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoCardSubText: {
    color: Colors.darkGray,
  },

  infoCardText: {
    color: Colors.cricantoLightBlue,
    paddingBottom: 5,
  },
  statusBtnContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  statusBtnText: {
    fontWeight: '600',
  },
  statusBtn: {
    backgroundColor: Colors.cricantoLightPurple,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
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
    marginTop: getScaledNumber(20),
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
    marginTop: getScaledNumber(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: getScaledNumber(20),
  },
});

export default UserAccount;
