import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import colors from '../res/colors';
import LinearGradient from 'react-native-linear-gradient';

const CricantoButton = ({label, style, containerStyle, onPress}: IProps) => {
  return (
    <TouchableOpacity style={[styles.btn, containerStyle]} onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={[colors.linearColor1, colors.linearColor2]}
        style={[styles.container, style]}>
        <Text style={styles.btnText}>{label}</Text>
      </LinearGradient>
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
  btn: {
    width: '100%',
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
}

export default CricantoButton;
