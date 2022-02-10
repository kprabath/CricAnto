import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import Video, {OnLoadData, OnProgressData} from 'react-native-video';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../library/utils';

import Loader from './Loader';

const VideoPlayer = ({source, videContainerStyle}: IProps) => {
  const [state, setState] = useState<IState>({
    play: true,
    currentTime: 0,
    duration: 0,
    showControls: false,
    videoLoaded: false,
  });

  const videoRef = React.createRef<Video>();

  const onVideoLoaded = () => setState({...state, videoLoaded: true});

  const onLoadEnd = (data: OnLoadData) => {
    setState({
      ...state,
      duration: data.duration,
      currentTime: data.currentTime,
    });
  };

  const onProgress = (data: OnProgressData) => {
    setState({
      ...state,
      currentTime: data.currentTime,
    });
  };

  const handleShowControls = () => {
    setState({...state, showControls: true, play: false});
  };

  return (
    <View style={styles.container}>
      {!state.videoLoaded && <Loader />}

      <TouchableWithoutFeedback onPress={handleShowControls}>
        <View>
          <Video
            ref={videoRef}
            source={{uri: source}}
            controls={false}
            resizeMode="stretch"
            onReadyForDisplay={onVideoLoaded}
            onLoad={onLoadEnd}
            onProgress={onProgress}
            paused={!state.play}
            style={[styles.video, videContainerStyle]}
            ignoreSilentSwitch="ignore"
            onError={err => console.debug('error loading video', err)}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  controls: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
  },
  video: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
});

interface IState {
  play: boolean;
  currentTime: number;
  duration: number;
  showControls: boolean;
  videoLoaded: boolean;
}

interface IProps {
  header?: string;
  source: string;
  onClose: Function;
  videContainerStyle?: StyleProp<ViewStyle>;
}

export default VideoPlayer;
