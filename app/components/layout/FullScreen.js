import React from 'react';
import { View, StyleSheet } from 'react-native';


const FullScreen = (props) => (
    <View style={styles.container}>
        {props.children}
    </View>
);

FullScreen.displayName = 'FullScreen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default FullScreen;