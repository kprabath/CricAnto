import React, {useState} from 'react';
import {Link} from '@react-navigation/native';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {CricantoTextTypes} from '../enums';
import CricantoText from '../components/cricantoText';
import CricantoInput from '../components/cricantoInput';
import CricantoButton from '../components/cricantoButton';
import {getScaledNumber} from '../library/utils';
import colors from '../res/colors';

import {LOGIN_SCREEN} from '../common/constants';
import User from '../res/images/User.svg';
import Message from '../res/images/Message.svg';
import Lock from '../res/images/Lock.svg';
import Google from '../res/images/Google.svg';
import CricantoIcon from '../res/images/CricantoIcon.svg';
import Facebook from '../res/images/Facebook.svg';
const SignUp = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <CricantoText label="Hey there," type={CricantoTextTypes.BODY_SMALL} />
        <CricantoText
          label="Create an Account"
          type={CricantoTextTypes.H3}
          style={styles.title}
        />
        <CricantoInput
          style={styles.firstNameInput}
          placeholder="First Name"
          Icon={User}
        />
        <CricantoInput
          style={styles.commonInput}
          placeholder="Last Name"
          Icon={User}
        />
        <CricantoInput
          style={styles.commonInput}
          placeholder="Email"
          Icon={Message}
        />
        <CricantoInput
          style={styles.commonInput}
          placeholder="Password"
          Icon={Lock}
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
          label="Register"
          onPress={() => navigation.navigate(LOGIN_SCREEN)}
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
    </View>
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

export default SignUp;
