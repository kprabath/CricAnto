import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {CricantoHeader, CricantoText} from '../components';
import CircleView from '../components/CircleView';
import CommentBox from '../components/commentBox/CommentBox';
import CommentThumbnail from '../components/commentBox/CommentThumbnail';
import LiveEventIndicator from '../components/LiveEventIndicator';
import VideoPlayer from '../components/VidePlayer';

import {getScaledNumber, SCREEN_HEIGHT} from '../library/utils';
import colors from '../res/colors';

export default () => {
  return (
    <CricantoHeader
      enableHeader
      isScrollView
      containerStyle={style.container}
      backKey>
      <LiveEventIndicator hideEventButton />
      <View style={style.videoViewWrapper}>
        <VideoPlayer
          videContainerStyle={style.videoContianer}
          source={'https://samplelib.com/lib/preview/mp4/sample-5s.mp4'}
        />
      </View>
      <TouchableOpacity style={style.subscribeButton}>
        <CircleView margin={20} height={40} backgroundColors={colors.darkerRed}>
          <CricantoText style={style.subscribeButtonText} label="SUBSCRIBE" />
        </CircleView>
      </TouchableOpacity>
      <View>
        <CommentBox>
          <CommentBox
            style={{flex: 1}}
            hideThumbnail
            headerChildre={<CommentThumbnail style={{flex: 0.2}} />}>
            <CommentBox style={{flex: 1}} hideThumbnail />
          </CommentBox>
        </CommentBox>
      </View>
    </CricantoHeader>
  );
};

const style = StyleSheet.create({
  container: {
    padding: getScaledNumber(15),
  },
  videoViewWrapper: {
    borderRadius: getScaledNumber(40),
    overflow: 'hidden',
  },
  videoContianer: {
    height: SCREEN_HEIGHT * 0.4,
    borderRadius: 200,
  },
  subscribeButton: {
    flexDirection: 'row',
  },
  subscribeButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.white,
  },
});
