import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {CricantoTextTypes} from '../enums';
import {getScaledNumber} from '../library/utils';
import {TICKETS_SCREEN} from '../common/constants';
import {
  CricantoHeader,
  CricantoModal,
  CricantoText,
  CricantoButton,
  CricantoInput,
} from '../components';
import CheckBox from '@react-native-community/checkbox';
import {
  updateUserEmail,
  updateUserTelephoneNo,
  updateUserAddress,
  updateUserStatus,
} from '../actions/user.actions';
import {useDispatch, useSelector} from 'react-redux';

import UserDP from '../res/images/UserDP.svg';
import Menu from '../res/images/MenuIcon.svg';
import Success from '../res/images/Success.svg';

import Colors from '../res/colors';
import {Reducers} from '../types';
import {State} from 'react-native-gesture-handler';

const UserAccount = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [EditMailModal, setEditMailModal] = useState(false);
  const [EditMobileNoModal, setEditMobileNoModal] = useState(false);
  const [editAddressModal, setEditAddressModal] = useState(false);
  const [editMail, setEditMail] = useState(String);
  const [editMobileNo, setEditMobileNo] = useState(String);
  const [editAddress, setEditAddress] = useState(String);
  const [successModalType, setSuccessModalType] = useState(String);

  const navigation = useNavigation();

  const email = useSelector((state: Reducers) => state.auth.userInfo?.email);
  const telephoneNo = useSelector(
    (state: Reducers) => state.auth.userInfo?.phoneNumber,
  );
  const name = useSelector((state: Reducers) => state.auth.userInfo?.name);
  const address = useSelector(
    (state: Reducers) => state.auth.userInfo?.address,
  );

  const status = useSelector((state: Reducers) => state.auth.userInfo?.Status);
  console.log('status' + status);
  const [userState, setUserState] = useState('Active');

  const editUserEmail = () => {
    const data = {
      updatedEmail: editMail,
    };
    dispatch(
      updateUserEmail(
        data,
        () => {
          setModalVisible(false),
            setSuccessModalVisible(true),
            setSuccessModalType('User Email');
        },
        error => {
          Alert.alert('Error', error.errorMessage, [
            {text: 'OK', onPress: () => {}},
          ]);
        },
      ),
    );
  };

  const editUserTelephoneNo = () => {
    const data = {
      updatedPhoneNumber: editMobileNo,
    };
    dispatch(
      updateUserTelephoneNo(
        data,
        () => {
          setModalVisible(false),
            setSuccessModalVisible(true),
            setSuccessModalType('User Mobile No');
        },
        error => {
          Alert.alert('Error', error.errorMessage, [
            {text: 'OK', onPress: () => {}},
          ]);
        },
      ),
    );
  };

  const editUserAddress = () => {
    const data = {
      updatedAddress: editAddress,
    };
    dispatch(
      updateUserAddress(
        data,
        () => {
          setModalVisible(false),
            setSuccessModalVisible(true),
            setSuccessModalType('User City');
        },
        error => {
          Alert.alert('Error', error.errorMessage, [
            {text: 'OK', onPress: () => {}},
          ]);
        },
      ),
    );
  };

  const editUserStatus = () => {
    const data = {
      updatedStatus: userState == 'Active' ? 'ACTIVE' : 'INACTIVE',
    };
    dispatch(
      updateUserStatus(
        data,
        () => {
          setModalVisible(false),
            setSuccessModalVisible(true),
            setSuccessModalType('User Status');
        },
        error => {
          Alert.alert('Error', error.errorMessage, [
            {text: 'OK', onPress: () => {}},
          ]);
        },
      ),
    );
  };

  const successModal = () => (
    <View style={styles.successModalContainer}>
      <Success />
      <CricantoText
        label={'You Susscessfully change ' + successModalType}
        type={CricantoTextTypes.BODY_SMALL}
        style={styles.successText}
      />
      <CricantoButton
        label="Continue"
        containerStyle={styles.btnStyle}
        onPress={() => {
          setEditMailModal(false),
            setEditMobileNoModal(false),
            setEditAddressModal(false),
            setSuccessModalVisible(false);
        }}
      />
    </View>
  );

  const modalView = () => (
    <View style={styles.modalContainer}>
      {/* {Status.map(x => (
        <View style={styles.checkboxContainer}>
          <CricantoText
            label={x.text}
            type={CricantoTextTypes.BODY_SMALL}
            style={styles.checkBoxTextStyle}
          />
          <CheckBox
            boxType="square"
            lineWidth={1.0}
            value={true}
            onValueChange={setStatusCheck}
            style={styles.checkbox}
          />
        </View>
      ))} */}
      <View style={styles.checkboxContainer}>
        <CricantoText
          label="Active"
          type={CricantoTextTypes.BODY_SMALL}
          style={styles.checkBoxTextStyle}
        />
        <CheckBox
          boxType="square"
          lineWidth={1.0}
          value={userState === 'Active'}
          onValueChange={() => {
            setUserState('Active');
          }}
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
          value={userState === 'Permemantly Suspend'}
          onValueChange={value => {
            setUserState('Permemantly Suspend');
          }}
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
          value={userState === 'Temporary Suspend'}
          onValueChange={value => {
            setUserState('Temporary Suspend');
          }}
          style={styles.checkbox}
        />
      </View>
      <CricantoButton
        label="Done"
        containerStyle={styles.btnStyle}
        onPress={() => {
          editUserStatus(),
            setModalVisible(false);
        }}
      />
    </View>
  );

  // const modalView2 = () => (
  //   <View style={[styles.modalContainer]}>
  //     <View style={styles.checkboxContainer}>
  //       <CricantoText
  //         label="Admin"
  //         type={CricantoTextTypes.BODY_SMALL}
  //         style={styles.checkBoxTextStyle}
  //       />
  //       <CheckBox
  //         boxType="square"
  //         lineWidth={1.0}
  //         value={roleCheck1}
  //         onValueChange={setRoleCheck1}
  //         style={styles.checkbox}
  //       />
  //     </View>
  //     <View style={styles.checkboxContainer}>
  //       <CricantoText
  //         label="Editor"
  //         type={CricantoTextTypes.BODY_SMALL}
  //         style={styles.checkBoxTextStyle}
  //       />
  //       <CheckBox
  //         boxType="square"
  //         lineWidth={1.0}
  //         value={roleCheck2}
  //         onValueChange={setRoleCheck2}
  //         style={styles.checkbox}
  //       />
  //     </View>
  //     <View style={styles.checkboxContainer}>
  //       <CricantoText
  //         label="User"
  //         type={CricantoTextTypes.BODY_SMALL}
  //         style={styles.checkBoxTextStyle}
  //       />
  //       <CheckBox
  //         boxType="square"
  //         lineWidth={1.0}
  //         value={roleCheck3}
  //         onValueChange={setRoleCheck3}
  //         style={styles.checkbox}
  //       />
  //     </View>
  //     <CricantoButton
  //       label="Done"
  //       containerStyle={styles.btnStyle}
  //       onPress={() => {
  //         setUserRoleModal(false), setSuccessModalVisible(true),setSuccessModalType("User Role Model");
  //       }}
  //     />
  //   </View>
  // );

  const modalView2 = () => (
    <View style={[styles.modalContainer]}>
      <TextInput
        style={styles.commonInput}
        placeholder="City"
        onChangeText={setEditAddress}
        value={editAddress}
      />
      <View style={[styles.modalContainerInner]}>
        <CricantoButton
          label="Done"
          containerStyle={styles.btnStyle}
          onPress={() => {
            editUserAddress(),setEditAddressModal(false);
          }}
        />
        <CricantoButton
          label="Cancel"
          containerStyle={styles.btnStyle}
          onPress={() => {
            setEditAddressModal(false), setEditAddress('');
          }}
        />
      </View>
    </View>
  );

  const modalView3 = () => (
    <View style={[styles.modalContainer]}>
      <TextInput
        style={styles.commonInput}
        placeholder="Email"
        onChangeText={setEditMail}
        value={editMail}
      />
      <View style={[styles.modalContainerInner]}>
        <CricantoButton
          label="Done"
          containerStyle={styles.btnStyle}
          onPress={() => {
            editUserEmail(),setEditMailModal(false);
          }}
        />
        <CricantoButton
          label="Cancel"
          containerStyle={styles.btnStyle}
          onPress={() => {
            setEditMailModal(false), setEditMail('');
          }}
        />
      </View>
    </View>
  );
  const modalView4 = () => (
    <View style={[styles.modalContainer]}>
      <TextInput
        style={styles.commonInput}
        placeholder="Mobile"
        maxLength={10}
        onChangeText={setEditMobileNo}
        value={editMobileNo}
      />
      <View style={[styles.modalContainerInner]}>
        <CricantoButton
          label="Done"
          containerStyle={styles.btnStyle}
          onPress={() => {
            editUserTelephoneNo(),setEditMobileNoModal(false);
          }}
        />
        <CricantoButton
          label="Cancel"
          containerStyle={styles.btnStyle}
          onPress={() => {
            setEditMobileNoModal(false), setEditMobileNo('');
          }}
        />
      </View>
    </View>
  );
  // const modalView5 = () => (
  //   <View style={[styles.modalContainer]}>
  //     <TextInput
  //       style={styles.commonInput}
  //       placeholder="Age"
  //       maxLength={3}
  //       onChangeText={setEditAge}
  //       value={editAge}
  //     />
  //     <View style={[styles.modalContainerInner]}>
  //       <CricantoButton
  //         label="Done"
  //         containerStyle={styles.btnStyle}
  //         onPress={() => {
  //           setEditAgeModel(false), setSuccessModalVisible(true);
  //         }}
  //       />
  //       <CricantoButton
  //         label="Cancel"
  //         containerStyle={styles.btnStyle}
  //         onPress={() => {
  //           setEditAgeModel(false), setEditAge('');
  //         }}
  //       />
  //     </View>
  //   </View>
  // );
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
            <CricantoText label={name} type={CricantoTextTypes.H4} />
            <TouchableOpacity style={styles.editBtn}>
              <CricantoText
                label="Edit Role"
                type={CricantoTextTypes.H4}
                style={styles.editText}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.infoContent}
          onPress={() => setEditMailModal(true)}>
          <CricantoText label="Email" />
          <CricantoText label={email} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.infoContent}
          onPress={() => setEditMobileNoModal(true)}>
          <CricantoText label="Mobile Number" />
          <CricantoText label={telephoneNo} />
        </TouchableOpacity>

        <View style={styles.statusBtnContainer}>
          <CricantoText label="Status" />
          <CricantoText label={status} style={styles.statusValue} />
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
          <TouchableOpacity style={styles.infoCard}>
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
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.infoCard}
            onPress={() => setEditAddressModal(true)}>
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
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoCard}>
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
          </TouchableOpacity>
        </View>
      </View>
      <CricantoModal modalVisible={modalVisible}>{modalView()}</CricantoModal>
      <CricantoModal modalVisible={editAddressModal}>
        {modalView2()}
      </CricantoModal>
      <CricantoModal modalVisible={EditMailModal}>{modalView3()}</CricantoModal>
      <CricantoModal modalVisible={EditMobileNoModal}>
        {modalView4()}
      </CricantoModal>
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

  modalContainerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  successModalContainer: {
    padding: getScaledNumber(30),
    alignItems: 'center',
  },
  btnStyle: {
    width: '48%',
    marginTop: getScaledNumber(20),
    alignSelf: 'center',
  },
  infoContent: {
    flexDirection: 'row',
    marginVertical: getScaledNumber(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
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
    backgroundColor: Colors.white,
    shadowColor: Colors.shadowColor,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
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
  commonInput: {
    marginTop: getScaledNumber(15),
    height: 50,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default UserAccount;
