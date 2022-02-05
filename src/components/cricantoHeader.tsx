import React, {ReactChild} from 'react';
import {useNavigation} from '@react-navigation/native';
import {CricantoTextTypes} from '../enums';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import colors from '../res/colors';
import {getScaledNumber} from '../library/utils';
import DrawerIcon from '../res/images/DrawerIcon.svg';
import LeftArrow from '../res/images/LeftArrow.svg';
import CricantoText from './cricantoText';

const CricantoHeader = ({
  headerTitle,
  style,
  RightIcon,
  onPress,
  containerStyle,
  backKey,
  rightIconAction,
  children,
}: IProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, style]}>
        <TouchableOpacity
          style={styles.headerBtn}
          onPress={
            backKey
              ? () => navigation?.goBack()
              : () => navigation?.openDrawer()
          }>
          {backKey ? <LeftArrow /> : <DrawerIcon />}
        </TouchableOpacity>
        <CricantoText
          label={headerTitle}
          style={styles.titleStyle}
          type={CricantoTextTypes.H3}
        />
        <TouchableOpacity style={styles.headerBtn} onPress={rightIconAction}>
          {RightIcon && <RightIcon style={styles.headerBtn} />}
        </TouchableOpacity>
      </View>
      <View style={[styles.container, containerStyle]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: getScaledNumber(20),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    fontWeight: '500',
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
  containerStyle?: StyleProp<TextStyle>;
  headerTitle?: string;
  backKey?: boolean;
  onPress?: Function;
  children?: any;
  rightIconAction?: any;
}

export default CricantoHeader;
