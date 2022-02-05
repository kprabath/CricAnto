import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {getScaledNumber} from '../library/utils';
import Colors from '../res/colors';
import {CricantoTextTypes} from '../enums';

import {CricantoText} from '.';

const CricantoCartItem = ({item}: IProps) => {
  const {CartImage, itemName, itemPrice} = item;
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemImageContent}>
        <CartImage />
      </View>
      <View style={styles.itemDescriptionContent}>
        <CricantoText label={itemName} type={CricantoTextTypes.H4} />
        <CricantoText
          label={itemPrice}
          type={CricantoTextTypes.H4}
          style={styles.price}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemDescriptionContent: {
    flexDirection: 'column',
    paddingLeft: getScaledNumber(10),
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
    marginTop: getScaledNumber(13),
    alignItems: 'center',
  },
});

export interface IProps {
  item?: Item;
}

export interface Item {
  itemPrice?: string;
  itemName?: string;
  CartImage?: Image;
}

export default CricantoCartItem;
