/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Colors from '../res/colors';
import CricantoText from '../components/cricantoText';

import Donate from '../res/images/Donate.svg';
import Dot from '../res/images/Dot.svg';
import Bag from '../res/images/Bag.svg';
import Home from '../res/images/Home.svg';
import Shop from '../res/images/Shop.svg';

import {
  CONTRIBUTION_SCREEN,
  MEMBERSHIP_SCREEN,
  SHOP_SCREEN,
  MANAGE_SCREEN,
  USER_MANAGEMENT_SCREEN,
} from '../common/constants';
import {userLogout} from '../actions/user.actions';

const CustomSidebarMenu = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state?.auth?.token);

  const logout = () => {
    dispatch(
      userLogout(
        {token},
        message => {
          Alert.alert('Success', message, [{text: 'OK', onPress: () => {}}]);
        },
        error => {
          Alert.alert('Error', error.errorMessage, [
            {text: 'OK', onPress: () => {}},
          ]);
        },
      ),
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.mainCategory}
          onPress={() => navigation.navigate(SHOP_SCREEN)}>
          <Home />
          <CricantoText label="Home" style={styles.mainCategoryText} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(CONTRIBUTION_SCREEN)}
          style={styles.subCategory}>
          <Donate />
          <CricantoText label="Contribution" style={styles.subCategoryText} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(USER_MANAGEMENT_SCREEN)}
          style={styles.subCategory}>
          <Bag />
          <CricantoText label="User Mangement" style={styles.subCategoryText} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(MANAGE_SCREEN)}
          style={styles.subCategory}>
          <Bag />
          <CricantoText
            label="Community Managemnt"
            style={styles.subCategoryText}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(MEMBERSHIP_SCREEN)}
          style={styles.subCategory}>
          <Bag />
          <CricantoText label="Membership" style={styles.subCategoryText} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mainCategory}
          onPress={() => navigation.navigate(SHOP_SCREEN)}>
          <Shop />
          <CricantoText label="Shop" style={styles.mainCategoryText} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.subCategory}>
          <Dot />
          <CricantoText label="My Orders" style={styles.subCategoryText} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.subCategory}>
          <Dot />
          <CricantoText label="Card & offers" style={styles.subCategoryText} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.subCategory}>
          <Dot />
          <CricantoText
            label="Delivery information"
            style={styles.subCategoryText}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.subCategory}>
          <Dot />
          <CricantoText
            label="Payment History"
            style={styles.subCategoryText}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.subCategory} onPress={logout}>
          <Dot />
          <CricantoText label="Logout" style={styles.subCategoryText} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 20,
  },
  mainCategory: {
    backgroundColor: Colors.lightSilver,
    padding: 14,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  mainCategoryText: {
    paddingLeft: 18,
  },
  subCategoryText: {
    color: Colors.darkGray,
    paddingLeft: 18,
  },
  subCategory: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
