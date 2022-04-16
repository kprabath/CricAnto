import React, {useState} from 'react';
import {Link} from '@react-navigation/native';
import {StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {CricantoTextTypes} from '../enums';
import {
  CricantoText,
  CricantoHeader,
  CricantoInput,
  CricantoButton,
} from '../components';
import {getScaledNumber} from '../library/utils';
import colors from '../res/colors';
import {SIGN_UP_SCREEN} from '../common/constants';
import {useDispatch} from 'react-redux';

import {userLogin} from '../actions/user.actions';

import Message from '../res/images/Message.svg';
import Lock from '../res/images/Lock.svg';
import Google from '../res/images/Google.svg';
import CricantoIcon from '../res/images/CricantoIcon.svg';
import Facebook from '../res/images/Facebook.svg';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [isSelected, setSelection] = useState(false);
  const [password, setPassword] = useState(String);
  const [username, setUsername] = useState(String);

  const isButtonDisabled = password.length === 0 || username.length === 0;

  const sumbit = () => {
    const data = {
      password,
      userName: username,
    };
    dispatch(
      userLogin(
        data,
        message => {
          Alert.alert('Success', message, [{text: 'OK', onPress: () => {}}]);
        },
        error => {
          Alert.alert('Error', error, [{text: 'OK', onPress: () => {}}]);
        },
      ),
    );
  };

  return (
    <CricantoHeader containerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <CricantoText label="Hey there," type={CricantoTextTypes.BODY_SMALL} />
        <CricantoText
          label="Welcome Back"
          type={CricantoTextTypes.H3}
          style={styles.title}
        />
        <CricantoInput
          style={styles.commonInput}
          placeholder="Username"
          Icon={Message}
          setState={setUsername}
          value={username}
        />
        <CricantoInput
          style={styles.commonInput}
          placeholder="Password"
          Icon={Lock}
          isProtected
          setState={setPassword}
          value={password}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
            boxType="square"
            lineWidth={1.0}
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <CricantoText
            label="By continuing you accept our Privacy Policy and Term of Use"
            type={CricantoTextTypes.BUTTON_LBL}
            style={styles.checkBoxTextStyle}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <CricantoButton
          label="Login"
          disabled={isButtonDisabled}
          onPress={sumbit}
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
            label="Don’t have an account yet? "
            type={CricantoTextTypes.HINT}
          />
          <Link to={{screen: SIGN_UP_SCREEN}}>
            <CricantoText
              label="Register"
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
    flex: 1,
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
    marginTop: 20,
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
  firstNameInput: {
    marginTop: getScaledNumber(30),
  },
  commonInput: {
    marginTop: getScaledNumber(15),
  },
});

export default Login;
