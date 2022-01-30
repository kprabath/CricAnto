import React from 'react';

import {StyleSheet, View} from 'react-native';
import {CricantoTextTypes} from '../enums';
import CricantoText from '../components/cricantoText';
import CricantoButton from '../components/cricantoButton';
import {getScaledNumber} from '../library/utils';
import {AUTH_ROUTES} from '../common/constants';

import WelcomeLogo from '../res/images/Welcome.svg';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <WelcomeLogo />
        <CricantoText
          label="Welcome James"
          type={CricantoTextTypes.H3}
          style={styles.title}
        />
      </View>
      <CricantoButton
        onPress={() => navigation.navigate(AUTH_ROUTES)}
        label="Go to Home"
      />
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
