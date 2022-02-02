import React from 'react';

import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import {getScaledNumber} from '../library/utils';
import Colors from '../res/colors';
import {CricantoTextTypes} from '../enums';

import CricantoHeader from '../components/cricantoHeader';
import CricantoInput from '../components/cricantoInput';
import CricantoText from '../components/cricantoText';
import BackgroundImage from '../res/images/ShopBackground.svg';
import SampleImage from '../res/images/SampleImage1.jpeg';
import Shoe from '../res/images/Shoe.svg';
import Bat from '../res/images/Bat.svg';
import Discount from '../res/images/Discount.svg';
import Message from '../res/images/Message.svg';
import Cart from '../res/images/Cart.svg';

const Shop = () => {
  const topSlider = () => (
    <View style={styles.topSliderContainer}>
      <Image source={SampleImage} style={styles.sliderImage} />
      <View style={styles.sliderActionContent}>
        <CricantoText label="Popular" style={styles.sliderActionText} />
        <CricantoText
          label="Air Max 2090"
          style={styles.sliderActionText}
          type={CricantoTextTypes.SUBTITLE}
        />
        <TouchableOpacity style={styles.buyBtn}>
          <CricantoText label="Buy Now" style={styles.buyBtnText} />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <>
      <BackgroundImage style={styles.backgroundImage} />

      <CricantoHeader RightIcon={Cart} style={styles.headerStyle} />
      <View style={styles.container}>
        <CricantoInput
          style={styles.searchInput}
          placeholder="Email"
          Icon={Message}
        />
        {topSlider()}
        <View style={styles.itemContainer}>
          <View style={styles.commonItem}>
            <Bat />
          </View>
          <View style={styles.commonItem}>
            <Shoe />
          </View>
          <View style={styles.commonItem}>
            <Bat />
          </View>
          <View style={styles.commonItem}>
            <Discount />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    marginHorizontal: getScaledNumber(30),
    marginVertical: getScaledNumber(20),
    justifyContent: 'space-evenly',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  commonItem: {
    borderRadius: getScaledNumber(12),
    width: getScaledNumber(55),
    height: getScaledNumber(55),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.cricantoLightBlue,
    marginVertical: getScaledNumber(20),
  },
  buyBtnText: {
    fontWeight: '500',
    color: Colors.white,
  },
  buyBtn: {
    borderRadius: getScaledNumber(9),
    paddingVertical: getScaledNumber(9),
    paddingHorizontal: getScaledNumber(10),
    backgroundColor: Colors.cricantoLightBlack,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    marginTop: getScaledNumber(8),
  },
  sliderActionContent: {
    flexDirection: 'column',
    paddingLeft: getScaledNumber(10),
  },
  sliderActionText: {
    fontWeight: '500',
    marginTop: getScaledNumber(5),
  },
  sliderImage: {
    width: getScaledNumber(160),
    height: getScaledNumber(100),
  },
  topSliderContainer: {
    backgroundColor: Colors.lightSilver,
    borderRadius: getScaledNumber(19),
    padding: getScaledNumber(16),
    width: '100%',
    marginTop: getScaledNumber(20),
    flexDirection: 'row',
  },
  searchInput: {
    marginTop: getScaledNumber(15),
    width: '80%',
  },
  headerStyle: {
    position: 'absolute',
  },
  backgroundImage: {
    position: 'absolute',
    top: -50,
    left: 7,
    // left: 0,
    // right: 0,
    // bottom: 0,
  },
});

export default Shop;
