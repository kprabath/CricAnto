import React, {useState} from 'react';

import {StyleSheet, View} from 'react-native';
import {getScaledNumber, SCREEN_HEIGHT} from '../library/utils';
import Colors from '../res/colors';
import {CricantoTextTypes} from '../enums';

import {
  CricantoButton,
  CricantoHeader,
  CricantoModal,
  CricantoText,
} from '../components';

import GoldLogo from '../res/images/Gold.svg';
import SilverLogo from '../res/images/Silver.svg';
import BronzeLogo from '../res/images/Bronze.svg';
import DropdownIcon from '../res/images/DropdownIcon.svg';
import Pot from '../res/images/Pot.svg';

import {TouchableOpacity} from 'react-native-gesture-handler';

const Contribution = () => {
  const [modalVisible, setModalVsible] = useState(false);

  const modalView = () => (
    <View
      style={{
        height: SCREEN_HEIGHT * 0.6,
        alignItems: 'center',
        paddingVertical: 20,
      }}>
      <CricantoText
        style={{fontSize: 24, fontWeight: 'bold', marginVertical: 20}}
        label="Gold Membership"
      />
      <CricantoText
        style={{fontSize: 18, fontWeight: 'bold', marginVertical: 20}}
        label="Valid Until 31/Dec"
      />
      <Pot />
      <CricantoButton
        label="PAY"
        containerStyle={styles.btnStyle}
        onPress={() => setModalVsible(false)}
      />
    </View>
  );

  return (
    <CricantoHeader enableHeader headerTitle="Membership" backKey>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setModalVsible(true)}
          style={styles.card1}>
          <>
            <GoldLogo />
            <CricantoText
              label="Gold"
              style={styles.cardText}
              type={CricantoTextTypes.H2}
            />
            <DropdownIcon />
          </>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card2}>
          <SilverLogo />
          <CricantoText
            label="Silver"
            style={styles.cardText}
            type={CricantoTextTypes.H2}
          />
          <DropdownIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card3}>
          <BronzeLogo />
          <CricantoText
            label="Bronz"
            style={styles.cardText}
            type={CricantoTextTypes.H2}
          />
          <DropdownIcon />
        </TouchableOpacity>
        <CricantoModal modalVisible={modalVisible}>{modalView()}</CricantoModal>
      </View>
    </CricantoHeader>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: getScaledNumber(30),
    marginVertical: getScaledNumber(20),
    justifyContent: 'space-evenly',
  },
  card1: {
    flexDirection: 'row',
    alignItems: 'center',
    height: getScaledNumber(70),
    borderRadius: 30,
    width: '90%',
    backgroundColor: '#37D4A5',
    justifyContent: 'space-between',
    paddingHorizontal: getScaledNumber(20),
  },
  card2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: getScaledNumber(70),
    borderRadius: 30,
    width: '90%',
    backgroundColor: '#37CBD4',
    justifyContent: 'space-between',
    paddingHorizontal: getScaledNumber(20),
  },
  card3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getScaledNumber(20),
    height: getScaledNumber(70),
    borderRadius: 30,
    width: '90%',
    backgroundColor: '#BED437',
    justifyContent: 'space-between',
    padding: getScaledNumber(10),
  },

  cardText: {
    color: Colors.black,
    fontWeight: '700',
  },
  btnStyle: {
    width: '50%',
    marginTop: getScaledNumber(20),
    alignSelf: 'center',
    position: 'absolute',
    bottom: SCREEN_HEIGHT * 0.1,
  },
});

export default Contribution;
