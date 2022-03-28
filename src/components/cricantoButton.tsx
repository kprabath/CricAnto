import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import colors from '../res/colors';
import LinearGradient from 'react-native-linear-gradient';

const CricantoButton = ({
  label,
  style,
  containerStyle,
  onPress,
  disabled,
}: IProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[disabled ? styles.disabledContainer : styles.btn, containerStyle]}
      onPress={onPress}>
      {disabled ? (
        <Text style={styles.btnText}>{label}</Text>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          colors={[colors.linearColor1, colors.linearColor2]}
          style={[styles.container, style]}>
          <Text style={styles.btnText}>{label}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 13,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 20,
    margin: 0,
  },
  disabledContainer: {
    justifyContent: 'center',
    paddingVertical: 13,
    alignItems: 'center',
    width: '100%',
    borderRadius: 20,
    marginTop: 10,
    backgroundColor: colors.lightGray,
  },
  btn: {
    width: '100%',
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  btnText: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.white,
  },
});

export interface IProps {
  label?: string;
  containerStyle?: StyleProp<TextStyle>;
  onPress: Function;
  style?: StyleProp<TextStyle>;
  disabled?: boolean;
}

export default CricantoButton;
