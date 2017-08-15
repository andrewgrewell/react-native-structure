import React from 'react';
import Video from 'react-native-video';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


const BackgroundVideo = ({ source, repeat, muted, paused }) => (
    <Video source={source}
           style={styles.video}
           resizeMode="cover"
           muted={muted}
           paused={paused}
           repeat={repeat} />
);

BackgroundVideo.displayName = 'BackgroundVideo';

BackgroundVideo.propTypes = {
    repeat: PropTypes.bool,
    muted: PropTypes.bool,
    paused: PropTypes.bool
};

BackgroundVideo.defaultProps = {
    muted: true
};


const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(75, 75, 75, 1)'
    }
});

export default BackgroundVideo;