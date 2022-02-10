import React from 'react';

import {StyleSheet} from 'react-native';
import {getScaledNumber} from '../library/utils';
import {CricantoHeader, CricantoText} from '../components';

import Menu from '../res/images/MenuIcon.svg';
import UploadImage from '../res/images/Upload.svg';
const Upload = () => {
  return (
    <CricantoHeader
      headerTitle="Upload"
      backKey
      RightIcon={Menu}
      containerStyle={styles.container}>
      <UploadImage />
    </CricantoHeader>
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

export default Upload;
