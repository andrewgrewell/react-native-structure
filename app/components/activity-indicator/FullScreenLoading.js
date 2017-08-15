import React from 'react';
import { StyleSheet } from 'react-native';
import BasicActivityIndicator from './BasicActivityIndicator';
import { colors } from '../../constants';


const FullScreenLoading = (props) => (
    <BasicActivityIndicator centered
                            color="white"
                            size="large"
                            style={styles.container}/>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: colors.primary
    }
});


FullScreenLoading.displayName = 'FullScreenLoading';


export default FullScreenLoading;