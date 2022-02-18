import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {StyleSheet, View, TouchableOpacity} from 'react-native';
import CricantoText from '../components/cricantoText';
import {getScaledNumber} from '../library/utils';
import Colors from '../res/colors';
import {CricantoHeader, CricantoModal, CricantoButton} from '../components';
import {CricantoTextTypes} from '../enums';
import {CONTRIBUTION_SUCCESS_SCREEN} from '../common/constants';

const Contribution = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const submit = () => {
    setModalVisible(false);
    navigation.navigate(CONTRIBUTION_SUCCESS_SCREEN);
  };

  const modalView = () => (
    <View style={styles.modalContainer}>
      <CricantoText
        label="PLATINUM"
        type={CricantoTextTypes.H3}
        style={styles.modalTitle}
      />
      <View style={styles.amountContent}>
        <CricantoText type={CricantoTextTypes.H3} label="50,000" />
      </View>
      <CricantoButton
        label="submit"
        onPress={submit}
        containerStyle={styles.btnStyle}
      />
    </View>
  );
  return (
    <CricantoHeader
    enableHeader
      headerTitle="Contribution"
      backKey
      containerStyle={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.card1}>
        <CricantoText
          label="Rs 50,000"
          style={styles.cardText}
          type={CricantoTextTypes.H2}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.card2}>
        <CricantoText
          label="Rs 50,000"
          style={styles.cardText}
          type={CricantoTextTypes.H2}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.card3}>
        <CricantoText
          label="Rs 50,000"
          style={styles.cardText}
          type={CricantoTextTypes.H2}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.card4}>
        <CricantoText
          label="Contribution"
          style={styles.contributionText}
          type={CricantoTextTypes.H2}
        />
      </TouchableOpacity>
      <CricantoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        {modalView()}
      </CricantoModal>
    </CricantoHeader>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: getScaledNumber(30),
    marginVertical: getScaledNumber(20),
    justifyContent: 'space-evenly',
  },
  modalTitle: {
    fontWeight: '700',
    textAlign: 'left',
  },
  modalContainer: {
    padding: getScaledNumber(30),
  },
  btnStyle: {
    width: '30%',
    alignSelf: 'center',
  },
  amountContent: {
    borderRadius: getScaledNumber(15),
    borderColor: Colors.darkGray,
    marginTop: getScaledNumber(20),
    marginBottom: getScaledNumber(20),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    width: '50%',
    padding: getScaledNumber(15),
  },
  card1: {
    height: getScaledNumber(110),
    borderRadius: 16,
    width: '100%',
    backgroundColor: '#7B0F22',
    justifyContent: 'flex-end',
    padding: getScaledNumber(10),
  },
  card2: {
    height: getScaledNumber(110),
    borderRadius: 16,
    width: '100%',
    backgroundColor: '#1B1B56',
    justifyContent: 'flex-end',
    padding: getScaledNumber(10),
  },
  card3: {
    height: getScaledNumber(110),
    borderRadius: 16,
    width: '100%',
    backgroundColor: '#9DCEFF',
    justifyContent: 'flex-end',
    padding: getScaledNumber(10),
  },
  card4: {
    height: getScaledNumber(110),
    borderRadius: 16,
    width: '100%',
    backgroundColor: '#227575',
    justifyContent: 'flex-end',
    padding: getScaledNumber(10),
  },
  cardText: {
    color: Colors.white,
    fontWeight: '700',
  },
  contributionText: {
    color: Colors.black,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Contribution;
