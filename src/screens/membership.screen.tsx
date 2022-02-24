import React, {useState} from 'react';

import {StyleSheet, View, TouchableOpacity} from 'react-native';
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
import Success from '../res/images/Success.svg';

const Contribution = () => {
  const [modalVisible, setModalVsible] = useState(false);
  const [openGoldAccordion, setOpenGoldAccordion] = useState(false);
  const [openSilverAccordion, setOpenSilverAccordion] = useState(false);
  const [openBronzeAccordion, setOpenBronzeAccordion] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const successModal = () => (
    <View style={styles.successModalContainer}>
      <Success />
      <CricantoText
        label="Congratulations !"
        type={CricantoTextTypes.H2}
        style={styles.successText}
      />
      <CricantoButton
        label="Continue"
        containerStyle={styles.continueBtnStyle}
        onPress={() => setSuccessModalVisible(false)}
      />
    </View>
  );

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
        onPress={() => {
          setModalVsible(false), setSuccessModalVisible(true);
        }}
      />
    </View>
  );

  return (
    <CricantoHeader
      containerStyle={styles.container}
      isScrollView
      enableHeader
      headerTitle="Membership"
      backKey>
      <TouchableOpacity
        style={styles.card1}
        onPress={() => setOpenGoldAccordion(!openGoldAccordion)}>
        <View style={styles.cardContent}>
          <GoldLogo />
          <CricantoText
            label="Gold"
            style={styles.cardText}
            type={CricantoTextTypes.H2}
          />
          <DropdownIcon />
        </View>
        {openGoldAccordion && (
          <View style={styles.cardDetailCOntent}>
            <CricantoText
              label="5000/= Per year"
              style={styles.cardDetailText}
              type={CricantoTextTypes.BODY_SMALL}
            />

            <TouchableOpacity
              onPress={() => setModalVsible(true)}
              style={styles.purchaseBtn}>
              <CricantoText
                label="PURCHASE"
                type={CricantoTextTypes.EYEBROW}
                style={styles.purchaseText}
              />
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card2}
        onPress={() => setOpenSilverAccordion(!openSilverAccordion)}>
        <View style={styles.cardContent}>
          <SilverLogo />
          <CricantoText
            label="Silver"
            style={styles.cardText}
            type={CricantoTextTypes.H2}
          />
          <DropdownIcon />
        </View>
        {openSilverAccordion && (
          <View style={styles.cardDetailCOntent}>
            <CricantoText
              label="5000/= Per year"
              style={styles.cardDetailText}
              type={CricantoTextTypes.BODY_SMALL}
            />

            <TouchableOpacity
              onPress={() => setModalVsible(true)}
              style={styles.purchaseBtn}>
              <CricantoText
                label="PURCHASE"
                type={CricantoTextTypes.EYEBROW}
                style={styles.purchaseText}
              />
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card3}
        onPress={() => setOpenBronzeAccordion(!openBronzeAccordion)}>
        <View style={styles.cardContent}>
          <BronzeLogo />
          <CricantoText
            label="Bronze"
            style={styles.cardText}
            type={CricantoTextTypes.H2}
          />
          <DropdownIcon />
        </View>
        {openBronzeAccordion && (
          <View style={styles.cardDetailCOntent}>
            <CricantoText
              label="5000/= Per year"
              style={styles.cardDetailText}
              type={CricantoTextTypes.BODY_SMALL}
            />

            <TouchableOpacity
              onPress={() => setModalVsible(true)}
              style={styles.purchaseBtn}>
              <CricantoText
                label="PURCHASE"
                type={CricantoTextTypes.EYEBROW}
                style={styles.purchaseText}
              />
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
      <CricantoModal modalVisible={successModalVisible}>
        {successModal()}
      </CricantoModal>
      <CricantoModal modalVisible={modalVisible}>{modalView()}</CricantoModal>
    </CricantoHeader>
  );
};

const styles = StyleSheet.create({
  purchaseText: {
    color: Colors.black,
    fontWeight: '700',
  },
  purchaseBtn: {
    backgroundColor: '#458FFF',
    borderRadius: 20,
    padding: 10,
  },
  successModalContainer: {
    padding: getScaledNumber(30),
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: getScaledNumber(20),
    marginVertical: getScaledNumber(20),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card1: {
    paddingVertical: getScaledNumber(10),
    paddingHorizontal: getScaledNumber(20),
    borderRadius: 30,
    width: '100%',
    backgroundColor: '#37D4A5',
  },
  successText: {
    fontWeight: '700',
    marginTop: getScaledNumber(20),
    marginBottom: getScaledNumber(30),
  },
  cardDetailCOntent: {
    marginTop: getScaledNumber(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card2: {
    paddingVertical: getScaledNumber(10),
    paddingHorizontal: getScaledNumber(20),
    borderRadius: 30,
    width: '100%',
    backgroundColor: '#37CBD4',
  },
  card3: {
    paddingVertical: getScaledNumber(10),
    paddingHorizontal: getScaledNumber(20),
    borderRadius: 30,
    width: '100%',
    backgroundColor: '#BED437',
  },

  cardText: {
    color: Colors.black,
    fontWeight: '700',
  },
  cardDetailText: {
    fontWeight: '500',
  },
  btnStyle: {
    width: '50%',
    marginTop: getScaledNumber(20),
    alignSelf: 'center',
    position: 'absolute',
    bottom: SCREEN_HEIGHT * 0.1,
  },
  continueBtnStyle: {
    width: '50%',
    marginTop: getScaledNumber(20),
    alignSelf: 'center',
  },
});

export default Contribution;
