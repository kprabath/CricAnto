import React, {ReactChild, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {CricantoTextTypes} from '../enums';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  StyleProp,
  TextStyle,
} from 'react-native';
import colors from '../res/colors';
import {getScaledNumber} from '../library/utils';
import DrawerIcon from '../res/images/DrawerIcon.svg';
import LeftArrow from '../res/images/LeftArrow.svg';
import CricantoText from './cricantoText';
import {ScrollView} from 'react-native-gesture-handler';

const CricantoHeader = ({
  headerTitle,
  style,
  RightIcon,
  onPress,
  containerStyle,
  backKey,
  rightIconAction,
  headerTitleStyle,
  children,
  isScrollView,
  autoScroll,
}: IProps) => {
  const navigation = useNavigation();
  const scrollViewRef = useRef();
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
          style={[styles.titleStyle, headerTitleStyle]}
          type={CricantoTextTypes.BODY_SMALL}
        />
        <TouchableOpacity style={styles.headerBtn} onPress={rightIconAction}>
          {RightIcon && <RightIcon style={styles.headerBtn} />}
        </TouchableOpacity>
      </View>
      {isScrollView ? (
        <ScrollView
          style={styles.container}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            autoScroll && scrollViewRef.current.scrollToEnd({animated: true})
          }
          contentContainerStyle={[containerStyle]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.container, containerStyle]}>{children}</View>
      )}
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
  headerTitleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
  headerTitle?: string;
  backKey?: boolean;
  onPress?: Function;
  children?: any;
  rightIconAction?: any;
  isScrollView?: boolean;
  autoScroll?: false;
}

export default CricantoHeader;
