import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import colors from '../res/colors';
import {CricantoButton, CricantoText} from '../components';
import Success from '../res/images/Success.svg';
import {getScaledNumber} from '../library/utils';
import {SHOP_SCREEN} from '../common/constants';
import Colors from '../res/colors';

const OrderSuccess = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Success />
        <CricantoText style={styles.successText} label="Order Success" />
        <CricantoText
          style={styles.orderText}
          label="Your order has been placed successfully!
For more details, go to my orders."
        />
      </View>
      <TouchableOpacity
        style={styles.orderBtn}
        onPress={() => {
          navigation.navigate(SHOP_SCREEN);
        }}>
        <Text style={styles.btnText}>My Orders</Text>
      </TouchableOpacity>
      <CricantoButton
        onPress={() => {
          navigation.navigate(SHOP_SCREEN);
        }}
        containerStyle={styles.btn}
        label="Continue shopping"
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
  btnText: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.white,
  },
  orderBtn: {
    justifyContent: 'center',
    paddingVertical: 13,
    alignItems: 'center',
    width: '80%',
    backgroundColor: Colors.cricantoLightBlue,
    borderRadius: 20,
    marginBottom: getScaledNumber(20),
    alignSelf: 'center',
  },
  successText: {
    fontWeight: '600',
    marginTop: getScaledNumber(15),
  },
  orderText: {
    textAlign: 'center',
    marginTop: getScaledNumber(5),
  },
  btn: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: getScaledNumber(20),
  },
});

export default OrderSuccess;
