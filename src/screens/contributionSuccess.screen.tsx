import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import colors from '../res/colors';
import {CricantoButton, CricantoText} from '../components';
import Success from '../res/images/Success.svg';
import {getScaledNumber} from '../library/utils';
import {PROFILE_SCREEN} from '../common/constants';

const ContributionSuccess = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Success />
        <CricantoText style={styles.successText} label="Thank You" />
      </View>
      <CricantoButton
        onPress={() => {
          navigation.navigate(PROFILE_SCREEN);
        }}
        containerStyle={styles.btn}
        label="Go Back to Home"
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  successText: {
    fontWeight: '600',
    marginTop: getScaledNumber(15),
  },
  btn: {
    width: '60%',
    alignSelf: 'center',
    marginBottom: getScaledNumber(20),
  },
});

export default ContributionSuccess;
