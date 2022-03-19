import React from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import colors from '../res/colors';

const CricantoInput = ({placeholder, Icon, style,setState,value}: IProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={Icon ? styles.sectionStyle : styles.sectionStyleWithoutIcon}>
        {Icon && <Icon style={styles.imageStyle} />}

        <TextInput
          style={{flex: 1}}
          onChangeText={setState}
          value={value}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 14,
  },
  sectionStyleWithoutIcon: {
    paddingHorizontal: 19,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 14,
  },
  imageStyle: {
    marginHorizontal: 19,
    marginVertical: 16,
  },
});

export interface IProps {
  placeholder?: string;
  setState?: Function;
  value?: string;
  Icon?: Image;
  style?: StyleProp<TextStyle>;
}

export default CricantoInput;
