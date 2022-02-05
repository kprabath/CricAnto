import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {getScaledNumber} from '../library/utils';
import Colors from '../res/colors';
import {CricantoTextTypes} from '../enums';

import {CricantoHeader, CricantoInput, CricantoText} from '../components';
import {CART_SCREEN} from '../common/constants';

import BackgroundImage from '../res/images/ShopBackground.svg';
import SampleImage from '../res/images/SampleImage1.jpeg';
import Shoe from '../res/images/Shoe.svg';
import Bat from '../res/images/Bat.svg';
import Discount from '../res/images/Discount.svg';
import Search from '../res/images/Search.svg';
import Cart from '../res/images/Cart.svg';
import SampleProduct from '../res/images/SampleProduct.svg';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Shop = () => {
  const navigation = useNavigation();
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

  const newProducts = () => (
    <View style={styles.productTileContainer}>
      <View style={styles.productTileImageContent}>
        <SampleProduct />
      </View>
      <CricantoText label="GM – NOIR 808" type={CricantoTextTypes.H4} />
      <CricantoText
        label="Rs31000.00"
        type={CricantoTextTypes.H4}
        style={styles.price}
      />
    </View>
  );
  return (
    <CricantoHeader
      RightIcon={Cart}
      style={styles.headerStyle}
      rightIconAction={() => navigation.navigate(CART_SCREEN)}>
      <BackgroundImage style={styles.backgroundImage} />

      <View style={styles.container}>
        <CricantoInput
          style={styles.searchInput}
          placeholder="Search"
          Icon={Search}
        />
        {topSlider()}
        <View style={styles.itemContainer}>
          <View style={styles.itemContent}>
            <View style={styles.commonItem}>
              <Bat />
            </View>
            <CricantoText label="Bats" />
          </View>
          <View style={styles.itemContent}>
            <View style={styles.commonItem}>
              <Shoe />
            </View>
            <CricantoText label="Boots" />
          </View>
          <View style={styles.itemContent}>
            <View style={styles.commonItem}>
              <Bat />
            </View>
            <CricantoText label="Bags" />
          </View>
          <View style={styles.itemContent}>
            <View style={styles.commonItem}>
              <Discount />
            </View>
            <CricantoText label="Disconts" />
          </View>
        </View>
      </View>
      <View style={styles.newProductsContainer}>
        <View style={styles.newProductsHeader}>
          <CricantoText
            label="New Products"
            type={CricantoTextTypes.BODY_SMALL}
            style={styles.newProductsText}
          />
          <TouchableOpacity style={styles.viewBtn}>
            <CricantoText
              label="view all"
              type={CricantoTextTypes.H4}
              style={styles.viewText}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          horizontal
          renderItem={newProducts}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </CricantoHeader>
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
  price: {
    fontWeight: '600',
    marginTop: getScaledNumber(10),
  },
  productTileImageContent: {
    borderRadius: getScaledNumber(10),
    borderWidth: 1,
    borderColor: Colors.lightSilver,
    height: getScaledNumber(135),
    width: getScaledNumber(125),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: getScaledNumber(15),
  },
  productTileContainer: {
    backgroundColor: Colors.white,
    borderRadius: getScaledNumber(16),
    flexDirection: 'column',
    padding: getScaledNumber(10),
    width: getScaledNumber(140),
    height: getScaledNumber(233),
    alignItems: 'center',
    marginRight: getScaledNumber(15),
  },
  newProductsText: {
    fontWeight: '600',
    color: Colors.cricantoLightBlack,
  },
  viewBtn: {
    backgroundColor: Colors.cricantoLightBlue,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    width: getScaledNumber(70),
  },
  viewText: {
    color: Colors.white,
  },
  newProductsHeader: {
    flexDirection: 'row',
    marginHorizontal: getScaledNumber(30),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: getScaledNumber(20),
  },
  newProductsContainer: {
    backgroundColor: Colors.cricantoLightGray,
    flexDirection: 'column',
    flex: 1,
    paddingVertical: getScaledNumber(20),
    paddingHorizontal: getScaledNumber(10),
  },
  itemContent: {
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: Colors.cricantoLightPurple,
    marginTop: getScaledNumber(20),
    marginBottom: getScaledNumber(10),
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
    color: Colors.cricantoLightBlack,
    marginTop: getScaledNumber(5),
  },
  sliderImage: {
    width: getScaledNumber(160),
    height: getScaledNumber(100),
    borderRadius: getScaledNumber(10),
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
    zIndex: 2,
  },
  backgroundImage: {
    position: 'absolute',
    top: -50,
    left: 7,
  },
});

export default Shop;
