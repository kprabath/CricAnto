import React, {ReactElement} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {CricantoText} from '..';
import {getScaledNumber} from '../../library/utils';

import CommentHeder from './CommentHeder';
import CommentThumbnail from './CommentThumbnail';
import ReactionField from './ReactionField';

type IProps = {
  children?: ReactElement;
  headerChildre?: ReactElement;
  hideThumbnail?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default (props: IProps) => (
  <View style={[styles.container]}>
    {!props.hideThumbnail && (
      <View style={styles.leftContainer}>
        <CommentThumbnail />
      </View>
    )}
    <View style={[styles.rightContainer, props.style]}>
      <CommentHeder>{props.headerChildre}</CommentHeder>
      <CricantoText
        style={styles.descriptionText}
        label="I guess the IA is looking good for now. Let’s get started with next process"
      />
      <ReactionField />
      {props.children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#9DCEFF',
    borderRadius: 10,
    padding: getScaledNumber(4),
  },
  leftContainer: {
    flex: 0.2,
  },
  rightContainer: {
    flex: 0.8,
    paddingRight: getScaledNumber(20),
  },
  descriptionText: {
    marginTop: getScaledNumber(10),
    fontSize: getScaledNumber(14),
    fontWeight: '400',
    lineHeight: getScaledNumber(22),
  },
});
