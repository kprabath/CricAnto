import React from 'react';

import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import {getScaledNumber} from '../library/utils';
import Colors from '../res/colors';
import {CricantoTextTypes} from '../enums';

import {
  CricantoHeader,
  CricantoInput,
  CricantoCartItem,
  CricantoText,
  CricantoButton,
} from '../components';

import Search from '../res/images/Search.svg';
import SampleProduct from '../res/images/SampleProduct.svg';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    itemName: 'Nike React Miler',
    itemPrice: 'Rs 13000.00',
    CartImage: SampleProduct,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    itemName: 'GM – NOIR 808',
    itemPrice: 'Rs 3000.00',
    CartImage: SampleProduct,
  },
];

const Cart = () => {
  return (
    <CricantoHeader headerTitle="My Cart" backKey>
      <View style={styles.container}>
        <CricantoText label="Add more products to your cart!" />
        <CricantoInput
          style={styles.searchInput}
          placeholder="Search"
          Icon={Search}
        />
        <FlatList
          data={DATA}
          renderItem={CricantoCartItem}
          keyExtractor={item => item.id}
        />
        <View style={styles.commonContent}>
          <CricantoInput
            placeholder="Enter voucher code"
            style={styles.voucherTextInput}
          />
          <TouchableOpacity style={styles.applyBtn}>
            <CricantoText label="Apply" style={styles.applyBtnText} />
          </TouchableOpacity>
        </View>

        <View style={styles.commonContent}>
          <CricantoText label="In total" style={styles.totalText} />
          <CricantoText label="Rs48000.00" style={styles.totalText} />
        </View>
      </View>
      <CricantoButton label="Checkout" style={styles.checkoutBtn} />
    </CricantoHeader>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: getScaledNumber(30),
    marginVertical: getScaledNumber(20),
    flex: 1,
  },
  checkoutBtn: {
    width: '90%',
    alignSelf: 'center',
  },
  commonContent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: getScaledNumber(20),
  },
  voucherTextInput: {
    width: '70%',
  },
  applyBtnText: {
    fontWeight: '500',
    color: Colors.white,
  },
  applyBtn: {
    borderRadius: getScaledNumber(9),
    paddingVertical: getScaledNumber(9),
    paddingHorizontal: getScaledNumber(20),
    backgroundColor: Colors.cricantoLightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemDescriptionContent: {
    flexDirection: 'column',
    paddingLeft: getScaledNumber(10),
  },
  totalText: {
    fontWeight: '600',
  },
  price: {
    fontWeight: '600',
    marginTop: getScaledNumber(10),
  },
  itemImageContent: {
    borderRadius: getScaledNumber(10),
    borderWidth: 1,
    borderColor: Colors.lightSilver,
    height: getScaledNumber(100),
    width: getScaledNumber(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.lightSilver,
    borderRadius: getScaledNumber(16),
    flexDirection: 'row',
    padding: getScaledNumber(5),
    marginTop: getScaledNumber(8),
    alignItems: 'center',
  },
  searchInput: {
    marginTop: getScaledNumber(15),
    // width: '100%',
  },
});

export default Cart;
