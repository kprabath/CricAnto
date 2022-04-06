import React, {useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Link} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Alert,StyleSheet, View, TouchableOpacity} from 'react-native';
import {CricantoTextTypes} from '../enums';
import {
  CricantoText,
  CricantoHeader,
  CricantoInput,
  CricantoButton,
} from '../components';
import {getScaledNumber} from '../library/utils';
import colors from '../res/colors';

import {LOGIN_SCREEN} from '../common/constants';
import User from '../res/images/User.svg';
import Message from '../res/images/Message.svg';
import Lock from '../res/images/Lock.svg';
import Google from '../res/images/Google.svg';
import CricantoIcon from '../res/images/CricantoIcon.svg';
import Facebook from '../res/images/Facebook.svg';

import {sendOTP, userRegister} from '../actions/user.actions';

const Otp = ({navigation}) => {
  const dispatch = useDispatch();
  const [verificationCode, setVerificationCode] = useState(String);
  const {
    params: {userName},
  } = useRoute();
  const isButtonDisabled = verificationCode.length === 0;
  const register = () => {
    const data = {
      userName,
      verificationCode,
    };

    console.log(data, 'rrrr');
    dispatch(
      sendOTP(
        data,
        () => {
          navigation.navigate(LOGIN_SCREEN);
        },
        () => {
          Alert.alert('Error', 'OTP Failed', [{text: 'OK', onPress: () => {}}]);
        },
      ),
    );
  };
  return (
    <CricantoHeader containerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <CricantoText label="Hey there," type={CricantoTextTypes.BODY_SMALL} />
        <CricantoText
          label="Enter OTP"
          type={CricantoTextTypes.H3}
          style={styles.title}
        />

        <CricantoInput
          style={styles.otpInput}
          placeholder="OTP"
          Icon={Message}
          value={verificationCode}
          setState={setVerificationCode}
        />
      </View>
      <View style={styles.bottomContainer}>
        <CricantoButton
          label="SUBMIT"
          onPress={register}
          disabled={isButtonDisabled}
          // onPress={() => navigation.navigate(LOGIN_SCREEN)}
        />
        <CricantoText
          label="Or"
          type={CricantoTextTypes.EYEBROW}
          style={styles.orText}
        />
        <View style={styles.socialMediaContent}>
          <TouchableOpacity style={styles.socialBtn}>
            <Google />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn}>
            <Facebook />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <CricantoIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomTextContent}>
          <CricantoText
            label="Already have an account? "
            type={CricantoTextTypes.HINT}
          />
          <Link to={{screen: LOGIN_SCREEN}}>
            <CricantoText
              label=" Login"
              type={CricantoTextTypes.HINT}
              style={styles.bottomTextStyle}
            />
          </Link>
        </View>
      </View>
    </CricantoHeader>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: getScaledNumber(30),
    marginVertical: getScaledNumber(20),
    justifyContent: 'space-between',
  },
  socialMediaContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    paddingBottom: 15,
  },
  socialBtn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.lightGray,
  },
  bottomTextStyle: {
    color: colors.cricantoPurple,
  },
  inputContainer: {
    alignItems: 'center',
    flex: 1,
  },
  bottomTextContent: {
    flexDirection: 'row',
  },
  orText: {
    marginVertical: 15,
  },
  bottomContainer: {
    alignItems: 'center',
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: getScaledNumber(20),
    marginBottom: getScaledNumber(20),
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '96%',
  },
  checkbox: {
    height: 16,
    width: 16,
    marginRight: 8,
    marginLeft: 18,
  },
  label: {
    margin: 8,
  },
  checkBoxTextStyle: {
    color: colors.darkGray,
  },
  title: {
    fontWeight: '700',
    lineHeight: 30,
    marginTop: getScaledNumber(5),
  },
  otpInput: {
    marginTop: getScaledNumber(100),
  },
  commonInput: {
    marginTop: getScaledNumber(10),
  },
});

export default Otp;
