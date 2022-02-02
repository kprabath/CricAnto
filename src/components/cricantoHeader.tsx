import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {CricantoTextTypes} from '../enums';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import colors from '../res/colors';
import {getScaledNumber} from '../library/utils';
import DrawerIcon from '../res/images/DrawerIcon.svg';
import CricantoText from './cricantoText';

const CricantoHeader = ({headerTitle, style, RightIcon, onPress}: IProps) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.headerBtn}
        onPress={() => navigation?.openDrawer()}>
        <DrawerIcon />
      </TouchableOpacity>
      <CricantoText label={headerTitle} style={styles.titleStyle} type={CricantoTextTypes.H3} />
      <TouchableOpacity style={styles.headerBtn} onPress={onPress}>
        {RightIcon && <RightIcon style={styles.headerBtn} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: getScaledNumber(20),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle:{
    fontWeight:'500'
  },
  headerBtn: {
    width: getScaledNumber(30),
    height: getScaledNumber(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.white,
  },
});

export interface IProps {
  RightIcon?: Image;
  style?: StyleProp<TextStyle>;
  headerTitle?: string;
  onPress?: Function;
}

export default CricantoHeader;
