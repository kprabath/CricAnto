import React from 'react';

import {StyleSheet} from 'react-native';
import {getScaledNumber} from '../library/utils';
import {CricantoHeader, CricantoText} from '../components';

import Menu from '../res/images/MenuIcon.svg';

const Notifications = () => {
  return (
    <CricantoHeader
    enableHeader
      headerTitle="Notification"
      backKey
      RightIcon={Menu}
      containerStyle={styles.container}></CricantoHeader>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: getScaledNumber(30),
    marginVertical: getScaledNumber(20),
  },
});

export default Notifications;
