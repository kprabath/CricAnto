import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {StyleSheet, TouchableOpacity} from 'react-native';
import CricantoText from '../components/cricantoText';
import {getScaledNumber} from '../library/utils';
import {CricantoHeader, CricantoInput, CricantoButton} from '../components';
import {CricantoTextTypes} from '../enums';
import {USER_ACCOUNT_SCREEN} from '../common/constants';
import colors from '../res/colors';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {Reducers} from '../types';

import Menu from '../res/images/MenuIcon.svg';
import Search from '../res/images/Search.svg';
import UserDP from '../res/images/UserDP.svg';
const UserManagement = () => {
  const navigation = useNavigation();
  const name = useSelector((state: Reducers) => state.auth.userInfo?.name);

  return (
    <CricantoHeader
      headerTitle="User Management"
      backKey
      enableHeader
      RightIcon={Menu}
      containerStyle={styles.container}>
      <CricantoInput
        style={styles.searchInput}
        placeholder="Search"
        Icon={Search}
      />

      <TouchableOpacity
        style={styles.userContent}
        onPress={() => navigation.navigate(USER_ACCOUNT_SCREEN)}>
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          colors={[colors.linearColor1, colors.linearColor2]}
          style={styles.userTile}>
          <UserDP />

          <CricantoText
            label={name}
            type={CricantoTextTypes.H4}
          />
        </LinearGradient>
      </TouchableOpacity>
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
  userTile: {
    flexDirection: 'row',
    width: '100%',
    marginTop: getScaledNumber(20),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getScaledNumber(15),
    paddingVertical: getScaledNumber(5),
    borderRadius: getScaledNumber(8),
  },
  userContent: {
    width: '100%',
  },
  searchInput: {
    marginTop: getScaledNumber(15),
    width: '100%',
  },
});

export default UserManagement;
