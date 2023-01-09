import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CricantoText, CricantoHeader, CricantoButton} from '../components';

import {CricantoTextTypes} from '../enums';
import {getScaledNumber} from '../library/utils';
import {UPDATE_FIRST_TIME} from '../common/constants';

import WelcomeLogo from '../res/images/Welcome.svg';
import {useDispatch, useSelector} from 'react-redux';

const Welcome = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state?.auth?.userInfo);

  const gotoDashBoard = () => {
    dispatch({type: UPDATE_FIRST_TIME, payload: false});
  };

  return (
    <CricantoHeader containerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <WelcomeLogo />
        <CricantoText
          label={`Welcome ${userData.firstName}`}
          type={CricantoTextTypes.H3}
          style={styles.title}
        />
      </View>
      <CricantoButton onPress={gotoDashBoard} label="Go to Home" />
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
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    lineHeight: 30,
    marginTop: getScaledNumber(5),
  },
});

export default Welcome;
